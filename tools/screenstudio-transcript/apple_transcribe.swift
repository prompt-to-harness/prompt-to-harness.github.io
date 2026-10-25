// Repository-owned adapter for Apple's public Speech framework. No Screen Studio code.
import Foundation
import AVFoundation
import Speech
import CoreMedia
import Darwin

struct CLIError: LocalizedError {
    let message: String
    var errorDescription: String? { message }
}

func emit(_ object: [String: Any]) throws {
    let data = try JSONSerialization.data(withJSONObject: object, options: [.sortedKeys])
    try FileHandle.standardOutput.write(contentsOf: data + Data([10]))
}

@main
struct AppleTranscribe {
    static func main() async {
        do {
            try await run(Array(CommandLine.arguments.dropFirst()))
        } catch {
            try? emit(["type": "error", "message": error.localizedDescription])
            exit(1)
        }
    }

    static func run(_ args: [String]) async throws {
        if args == ["--help"] || args == ["-h"] {
            print("apple-transcribe <audio-file> [--locale zh_CN] | --locales | --version")
            return
        }
        if args == ["--version"] {
            try emit(["type": "version", "engine": "Apple SpeechTranscriber", "adapter": "course-apple-transcribe", "version": 1])
            return
        }
        guard SpeechTranscriber.isAvailable else {
            throw CLIError(message: "SpeechTranscriber is unavailable on this Mac.")
        }
        if args == ["--locales"] {
            let locales = await SpeechTranscriber.supportedLocales
            try emit(["type": "supported-locales", "locales": locales.map { $0.identifier }.sorted()])
            return
        }
        guard args.count == 1 || (args.count == 3 && args[1] == "--locale"),
              let filename = args.first, !filename.hasPrefix("--") else {
            throw CLIError(message: "Usage: apple-transcribe <audio-file> [--locale zh_CN]")
        }
        let requested = Locale(identifier: args.count == 3 ? args[2] : "zh_CN")
        guard let locale = await SpeechTranscriber.supportedLocale(equivalentTo: requested) else {
            throw CLIError(message: "Unsupported locale: \(requested.identifier). Use --locales.")
        }
        let file = try AVAudioFile(forReading: URL(fileURLWithPath: filename))
        let duration = Double(file.length) / file.processingFormat.sampleRate
        guard duration.isFinite && duration > 0 else {
            throw CLIError(message: "The audio file is empty or has invalid duration.")
        }
        let transcriber = SpeechTranscriber(locale: locale, transcriptionOptions: [],
            reportingOptions: [], attributeOptions: [.audioTimeRange, .transcriptionConfidence])
        if let request = try await AssetInventory.assetInstallationRequest(supporting: [transcriber]) {
            try emit(["type": "status", "message": "Preparing Apple language assets", "locale": locale.identifier])
            try await request.downloadAndInstall()
        }
        try emit(["type": "status", "engine": "Apple SpeechTranscriber", "adapter": "course-apple-transcribe",
                  "locale": locale.identifier, "duration": duration])
        let analyzer = SpeechAnalyzer(modules: [transcriber])
        let resultsTask = Task {
            var count = 0
            for try await result in transcriber.results {
                guard result.isFinal else { continue }
                for run in result.text.runs {
                    let text = String(result.text[run.range].characters)
                    guard !text.isEmpty else { continue }
                    guard let range = run[AttributeScopes.SpeechAttributes.TimeRangeAttribute.self] else {
                        throw CLIError(message: "Apple returned text without timing; refusing fabricated timestamps.")
                    }
                    let start = range.start.seconds
                    let end = CMTimeRangeGetEnd(range).seconds
                    guard start.isFinite && end.isFinite && start >= 0 && end >= start else {
                        throw CLIError(message: "Apple returned invalid timestamps.")
                    }
                    var event: [String: Any] = ["type": "word", "word": text, "start": start, "end": end,
                        "progress": min(1, max(0, end / duration))]
                    if let confidence = run[AttributeScopes.SpeechAttributes.ConfidenceAttribute.self], confidence.isFinite {
                        event["confidence"] = confidence
                    }
                    try emit(event)
                    count += 1
                }
            }
            return count
        }
        do {
            if let end = try await analyzer.analyzeSequence(from: file) {
                try await analyzer.finalizeAndFinish(through: end)
            } else {
                try await analyzer.finalizeAndFinishThroughEndOfInput()
            }
            let count = try await resultsTask.value
            try emit(["type": "complete", "word_events": count, "duration": duration])
        } catch {
            resultsTask.cancel()
            await analyzer.cancelAndFinishNow()
            throw error
        }
    }
}

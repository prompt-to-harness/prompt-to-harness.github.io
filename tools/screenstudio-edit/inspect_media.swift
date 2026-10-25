import AVFoundation
import AppKit
import Foundation

@main struct InspectMedia {
    static func main() async throws {
        let args = CommandLine.arguments
        guard args.count >= 2 else { throw NSError(domain: "usage: inspect-media video.mp4 [frames-directory]", code: 1) }
        let asset = AVURLAsset(url: URL(fileURLWithPath: args[1]))
        let duration = try await asset.load(.duration).seconds
        let videos = try await asset.loadTracks(withMediaType: .video)
        let audios = try await asset.loadTracks(withMediaType: .audio)
        guard let track = videos.first else { throw NSError(domain: "No video track", code: 1) }
        let size = try await track.load(.naturalSize)
        let fps = try await track.load(.nominalFrameRate)
        let generator = AVAssetImageGenerator(asset: asset)
        generator.appliesPreferredTrackTransform = true
        generator.requestedTimeToleranceBefore = .zero
        generator.requestedTimeToleranceAfter = .zero
        let times = args.count > 3
            ? args[3].split(separator: ",").compactMap { Double($0) }
            : [min(0.1, duration / 2), duration / 2, max(0, duration - 0.15)]
        var frames: [String] = []
        var savedTimes: [Double] = []
        let indices = args.count > 4 ? Set(args[4].split(separator: ",").compactMap { Int($0) }) : Set(times.indices)
        // Decode beginning, middle and end even when frame output is not requested.
        for (index, seconds) in times.enumerated() {
            let result = try await generator.image(at: CMTime(seconds: seconds, preferredTimescale: 600))
            if args.count > 2 && !args[2].isEmpty && indices.contains(index) {
                let directory = URL(fileURLWithPath: args[2])
                try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
                let url = directory.appendingPathComponent("frame-\(index).png")
                let bitmap = NSBitmapImageRep(cgImage: result.image)
                guard let bytes = bitmap.representation(using: .png, properties: [:]) else {
                    throw NSError(domain: "PNG encoding failed", code: 1)
                }
                try bytes.write(to: url)
                frames.append(url.path)
                savedTimes.append(seconds)
            }
        }
        let result: [String: Any] = ["duration": duration, "width": size.width, "height": size.height,
                                    "fps": fps, "audio_tracks": audios.count, "frames": frames,
                                    "frame_times": times, "saved_frame_times": savedTimes]
        let bytes = try JSONSerialization.data(withJSONObject: result, options: [.sortedKeys])
        print(String(data: bytes, encoding: .utf8)!)
    }
}

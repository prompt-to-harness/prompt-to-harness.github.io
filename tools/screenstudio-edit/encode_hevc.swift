import AVFoundation
import Foundation
import VideoToolbox

@main struct Transcode {
  static func main() async throws {
    let args = CommandLine.arguments
    guard args.count == 4, let rate = Int(args[3]), rate > 0 else {
      throw NSError(domain: "usage: encode_hevc INPUT OUTPUT BITRATE", code: 1)
    }
    let source = URL(fileURLWithPath: args[1])
    let dest = URL(fileURLWithPath: args[2])
    let bitrate = rate
    let start = 0.0
    guard !FileManager.default.fileExists(atPath: dest.path) else {
      throw NSError(domain: "Output already exists", code: 1)
    }
    let asset = AVURLAsset(url: source)
    let full = try await asset.load(.duration).seconds
    let length = full
    let videos = try await asset.loadTracks(withMediaType: .video)
    let audios = try await asset.loadTracks(withMediaType: .audio)
    guard videos.count == 1, audios.count == 1 else {
      throw NSError(domain: "Expected one video and one audio track", code: 1)
    }
    let video = videos[0]
    let audio = audios.first
    let size = try await video.load(.naturalSize)
    let reader = try AVAssetReader(asset: asset)
    reader.timeRange = CMTimeRange(
      start: CMTime(seconds: start, preferredTimescale: 60000),
      duration: CMTime(seconds: length, preferredTimescale: 60000))
    let writer = try AVAssetWriter(outputURL: dest, fileType: .mp4)
    writer.shouldOptimizeForNetworkUse = true
    let vout = AVAssetReaderTrackOutput(
      track: video,
      outputSettings: [
        kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange
      ])
    vout.alwaysCopiesSampleData = false
    reader.add(vout)
    let settings: [String: Any] = [
      AVVideoCodecKey: AVVideoCodecType.hevc, AVVideoWidthKey: Int(size.width),
      AVVideoHeightKey: Int(size.height),
      AVVideoCompressionPropertiesKey: [
        AVVideoAverageBitRateKey: bitrate, AVVideoExpectedSourceFrameRateKey: 30,
        AVVideoMaxKeyFrameIntervalKey: 60, AVVideoAllowFrameReorderingKey: true,
        AVVideoProfileLevelKey: kVTProfileLevel_HEVC_Main_AutoLevel,
      ],
      AVVideoEncoderSpecificationKey: [
        kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder as String: true
      ],
    ]
    let vin = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
    vin.expectsMediaDataInRealTime = false
    vin.transform = try await video.load(.preferredTransform)
    writer.add(vin)
    var aout: AVAssetReaderTrackOutput?
    var ain: AVAssetWriterInput?
    if let audio = audio {
      let formats = try await audio.load(.formatDescriptions)
      aout = AVAssetReaderTrackOutput(track: audio, outputSettings: nil)
      aout!.alwaysCopiesSampleData = false
      reader.add(aout!)
      ain = AVAssetWriterInput(
        mediaType: .audio, outputSettings: nil, sourceFormatHint: formats.first)
      ain!.expectsMediaDataInRealTime = false
      writer.add(ain!)
    }
    guard writer.startWriting(), reader.startReading() else {
      throw writer.error ?? reader.error ?? NSError(domain: "Start failed", code: 1)
    }
    writer.startSession(atSourceTime: CMTime(seconds: start, preferredTimescale: 60000))
    let group = DispatchGroup()
    let began = Date()
    func pipe(_ output: AVAssetReaderTrackOutput, _ input: AVAssetWriterInput, _ label: String) {
      group.enter()
      input.requestMediaDataWhenReady(on: DispatchQueue(label: "encode." + label)) {
        while input.isReadyForMoreMediaData {
          guard let sample = output.copyNextSampleBuffer() else {
            input.markAsFinished()
            group.leave()
            return
          }
          if !input.append(sample) {
            input.markAsFinished()
            group.leave()
            return
          }
        }
      }
    }
    pipe(vout, vin, "video")
    if let ao = aout, let ai = ain { pipe(ao, ai, "audio") }
    await withCheckedContinuation { (c: CheckedContinuation<Void, Never>) in
      group.notify(queue: .global()) { c.resume() }
    }
    guard reader.status == .completed else {
      throw reader.error ?? NSError(domain: "Reader incomplete", code: 1)
    }
    await writer.finishWriting()
    guard writer.status == .completed else {
      throw writer.error ?? NSError(domain: "Writer incomplete", code: 1)
    }
    print("Complete HEVC \(bitrate) bps, \(length)s, elapsed \(Date().timeIntervalSince(began))s")
  }
}

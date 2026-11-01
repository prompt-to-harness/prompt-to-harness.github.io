import AVFoundation
import CoreMedia
import Foundation

@main struct Info {
  static func main() async throws {
    for path in CommandLine.arguments.dropFirst() {
      let asset = AVURLAsset(url: URL(fileURLWithPath: path))
      let dur = try await asset.load(.duration).seconds
      var rows: [[String: Any]] = []
      for t in try await asset.loadTracks(withMediaType: .video) {
        let formats = try await t.load(.formatDescriptions)
        let sub = CMFormatDescriptionGetMediaSubType(formats[0])
        let chars = [
          UInt8((sub >> 24) & 255), UInt8((sub >> 16) & 255), UInt8((sub >> 8) & 255),
          UInt8(sub & 255),
        ]
        let size = try await t.load(.naturalSize)
        rows.append([
          "codec": String(bytes: chars, encoding: .ascii)!,
          "bitrate": try await t.load(.estimatedDataRate),
          "fps": try await t.load(.nominalFrameRate), "width": size.width, "height": size.height,
        ])
      }
      print(
        String(
          data: try JSONSerialization.data(withJSONObject: [
            "file": URL(fileURLWithPath: path).lastPathComponent, "duration": dur,
            "audio_tracks": try await asset.loadTracks(withMediaType: .audio).count, "video": rows,
          ]), encoding: .utf8)!)
    }
  }
}

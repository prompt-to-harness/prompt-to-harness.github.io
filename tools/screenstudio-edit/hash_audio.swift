import AVFoundation
import CoreMedia
import CryptoKit
import Foundation

@main struct HashAudio {
  static func main() async throws {
    var rows: [[String: Any]] = []
    for path in CommandLine.arguments.dropFirst() {
      let asset = AVURLAsset(url: URL(fileURLWithPath: path))
      let tracks = try await asset.loadTracks(withMediaType: .audio)
      guard tracks.count == 1 else { throw NSError(domain: "Expected one audio track", code: 1) }
      let track = tracks[0]
      let reader = try AVAssetReader(asset: asset)
      let out = AVAssetReaderTrackOutput(track: track, outputSettings: nil)
      reader.add(out)
      var hash = SHA256()
      var packets = 0
      var bytes = 0
      guard reader.startReading() else { throw reader.error! }
      while let sample = out.copyNextSampleBuffer() {
        guard let block = CMSampleBufferGetDataBuffer(sample) else { continue }
        let length = CMBlockBufferGetDataLength(block)
        var data = Data(count: length)
        try data.withUnsafeMutableBytes { buf in
          let status = CMBlockBufferCopyDataBytes(
            block, atOffset: 0, dataLength: length, destination: buf.baseAddress!)
          if status != 0 { throw NSError(domain: "CMBlockBuffer", code: Int(status)) }
        }
        hash.update(data: data)
        bytes += length
        packets += CMSampleBufferGetNumSamples(sample)
      }
      guard reader.status == .completed else { throw reader.error! }
      rows.append([
        "file": path, "packets": packets, "bytes": bytes,
        "sha256": hash.finalize().map { String(format: "%02x", $0) }.joined(),
      ])
    }
    print(
      String(
        data: try JSONSerialization.data(withJSONObject: rows, options: .prettyPrinted),
        encoding: .utf8)!)
  }
}

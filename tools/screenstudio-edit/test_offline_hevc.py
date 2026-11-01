import copy
import unittest
from offline_hevc import validate_specs


class DeliverySpecsTests(unittest.TestCase):
    def setUp(self):
        self.source = dict(duration=120, video=[dict(width=1920, height=1080, fps=30, codec='avc1')])
        self.output = copy.deepcopy(self.source)
        self.output['video'][0]['codec'] = 'hvc1'

    def test_hevc_and_small_duration_rounding(self):
        self.output['duration'] += .002
        validate_specs(self.source, self.output)

    def test_reject_h264_renamed_to_h265(self):
        with self.assertRaises(ValueError):
            validate_specs(self.source, self.source)

    def test_reject_duration_drift_and_wrong_fps(self):
        for key, value in [('duration', 121), ('fps', 60), ('width', 1280)]:
            output = copy.deepcopy(self.output)
            if key == 'duration':
                output[key] = value
            else:
                output['video'][0][key] = value
            with self.assertRaises(ValueError):
                validate_specs(self.source, output)

    def test_reject_missing_or_extra_tracks(self):
        for tracks in ([], self.output['video'] * 2):
            with self.assertRaises(ValueError):
                validate_specs(self.source, dict(self.output, video=tracks))


if __name__ == '__main__':
    unittest.main()

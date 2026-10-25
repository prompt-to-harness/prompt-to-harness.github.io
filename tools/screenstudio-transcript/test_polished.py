import unittest
from save_polished import validate, timestamp

class PolishTests(unittest.TestCase):
    def setUp(self):
        self.source = {'segments': [{'id': 'S0001', 'start': 5.22, 'end': 7.81, 'text': '原文'},
                                   {'id': 'S0002', 'start': 10, 'end': 20, 'text': '原文二'}]}
        self.edits = [{'id': 'S0002', 'text': '润色二', 'review_notes': ['待核']},
                      {'id': 'S0001', 'text': '润色一', 'review_notes': []}]
    def test_restore_order_and_copy_timing(self):
        rows = validate(self.source, self.edits)
        self.assertEqual([(r['id'], r['start'], r['end']) for r in rows],
                         [('S0001', 5.22, 7.81), ('S0002', 10, 20)])
        self.assertEqual(rows[0]['original'], '原文')
    def test_missing_duplicate_or_extra_id_rejected(self):
        for bad in [self.edits[:1], self.edits + self.edits[:1],
                    self.edits + [{'id': 'S0003', 'text': 'extra'}]]:
            with self.assertRaises(ValueError): validate(self.source, bad)
    def test_new_timestamps_and_empty_text_rejected(self):
        for patch in [{'start': 0}, {'text': ''}, {'review_notes': 'note'}]:
            bad = [dict(self.edits[0], **patch), self.edits[1]]
            with self.assertRaises(ValueError): validate(self.source, bad)
    def test_time_rounding_carry(self):
        self.assertEqual(timestamp(59.9996), '00:01:00.000')

if __name__ == '__main__': unittest.main()

const test = require('node:test');
const assert = require('node:assert/strict');
const { addMonths, formatRupiah } = require('../lib/domain');

test('addMonths advances by calendar months', () => {
  assert.equal(addMonths('2026-01-15', 1), '2026-02-15');
  assert.equal(addMonths('2026-01-15', 12), '2027-01-15');
});

test('addMonths clamps end-of-month dates safely', () => {
  assert.equal(addMonths('2026-01-31', 1), '2026-02-28');
  assert.equal(addMonths('2024-01-31', 1), '2024-02-29');
  assert.equal(addMonths('2026-01-31', 2), '2026-03-31');
});

test('addMonths rejects invalid month counts and dates', () => {
  assert.throws(() => addMonths('2026-01-01', 0), RangeError);
  assert.throws(() => addMonths('2026-01-01', 13), RangeError);
  assert.throws(() => addMonths('not-a-date', 1), TypeError);
});

test('formatRupiah formats Indonesian currency numbers without a symbol', () => {
  assert.equal(formatRupiah(125000), '125.000');
  assert.equal(formatRupiah(0), '0');
});

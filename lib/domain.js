function addMonths(iso, months) {
  if (!Number.isInteger(months) || months < 1 || months > 12) throw new RangeError('months must be 1..12');
  const d = new Date(iso + 'T12:00:00Z');
  if (Number.isNaN(d.getTime())) throw new TypeError('invalid date');
  const day = d.getUTCDate(); d.setUTCDate(1); d.setUTCMonth(d.getUTCMonth() + months);
  d.setUTCDate(Math.min(day, new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth()+1, 0)).getUTCDate()));
  return d.toISOString().slice(0,10);
}
function formatRupiah(value) { return new Intl.NumberFormat('id-ID').format(Number(value || 0)); }
module.exports = { addMonths, formatRupiah };

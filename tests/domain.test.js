const test=require('node:test'),assert=require('node:assert/strict');
function addMonths(iso,n){let d=new Date(iso+'T12:00:00Z'),day=d.getUTCDate();d.setUTCDate(1);d.setUTCMonth(d.getUTCMonth()+n);d.setUTCDate(Math.min(day,new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+1,0)).getUTCDate()));return d.toISOString().slice(0,10)}
test('tanggal akhir bulan aman',()=>{assert.equal(addMonths('2026-01-31',1),'2026-02-28');assert.equal(addMonths('2024-01-31',1),'2024-02-29')});
test('durasi 1-12 bulan',()=>{for(let n of [1,12])assert.ok(Number.isInteger(n)&&n>=1&&n<=12);for(let n of [0,13,-1])assert.ok(!(Number.isInteger(n)&&n>=1&&n<=12))});
test('format rupiah',()=>assert.equal(new Intl.NumberFormat('id-ID').format(1500000),'1.500.000'));

# Kos Digital

Aplikasi kos untuk pemilik dan penyewa. Frontend HTML/CSS/JS, backend Vercel Node.js Function, database PostgreSQL Neon.

## Fitur
- Login admin dan penyewa memakai cookie HttpOnly, password bcrypt, dan pembatasan percobaan login.
- Dashboard, kelola kamar dan penyewa, tarif sewa awal/bulanan.
- Riwayat pembayaran, keluhan dan tindak lanjut admin.
- Perpanjangan kontrak 1-12 bulan, Midtrans Snap QRIS dan webhook signature.

## Deploy
Import repo Errlangga/kos-system ke Vercel. Framework Preset Other, Root Directory `.`, Build/Output kosong/default. Jalankan npm install lalu deploy. Isi environment dari .env.example.

## Neon
Gunakan pooled connection string Neon pada DATABASE_URL dengan sslmode=require. Untuk database kosong jalankan database/schema.sql. Database kos_digital yang sebelumnya dibuat sudah memiliki tabel inti.

## Admin
Set ADMIN_USERNAME, ADMIN_PASSWORD (password unik kuat), ADMIN_DISPLAY_NAME. Jika belum ada admin, akun pertama dibuat otomatis saat login admin. Segera ganti password sementara.

## Midtrans
Isi MIDTRANS_SERVER_KEY, MIDTRANS_CLIENT_KEY, MIDTRANS_IS_PRODUCTION=false untuk sandbox, APP_URL dengan domain deploy. Atur Payment Notification URL menjadi https://DOMAIN/api/webhook dan aktifkan QRIS. Uji sandbox dan webhook sebelum production. Server Key rahasia dan tidak boleh diletakkan di frontend.

Tes: npm test. Pembayaran riil belum aktif sampai kredensial Midtrans dipasang dan diuji.

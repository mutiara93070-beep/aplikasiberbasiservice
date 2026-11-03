# Program Kalkulator Diskon Belanja

## Deskripsi
Program sederhana berbasis JavaScript yang dijalankan menggunakan Node.js.
Program ini dibuat untuk memenuhi tugas praktik mata kuliah **Aplikasi Berbasis Service**.

## Identitas
- Nama : Mutiara Nurul Humairah
- NIM  : 24260008

## Fitur
- Menyimpan data pelanggan dan data belanja (barang, harga, jumlah) menggunakan variabel
- Menghitung subtotal, diskon, PPN 11%, dan total bayar
- Menentukan persentase diskon dan kategori belanja dengan struktur if-else
- Menentukan status ongkos kirim (gratis atau bayar)
- Memformat angka ke Rupiah menggunakan fungsi

## Ketentuan Diskon
| Subtotal Belanja | Kategori | Diskon |
| --- | --- | --- |
| >= Rp 500.000 | Besar | 20% |
| >= Rp 300.000 | Sedang | 15% |
| >= Rp 100.000 | Kecil | 10% |
| < Rp 100.000 | Reguler | 0% |

Gratis ongkos kirim berlaku untuk subtotal >= Rp 200.000.

## Cara Menjalankan
1. Pastikan Node.js sudah terpasang: `node -v`
2. Buka folder proyek di VS Code
3. Buka terminal (Ctrl + `)
4. Jalankan:
   ```
   node kalkulator-diskon.js
   ```

## Contoh Output
```
==========================================
      PROGRAM KALKULATOR DISKON
               BELANJA
==========================================
Nama          : Mutiara Nurul Humairah
NIM           : 24260008
Mata Kuliah   : Aplikasi Berbasis Service
------------------------------------------
Nama Barang   : Buku Tulis Premium
Harga Satuan  : Rp 75.000
Jumlah Beli   : 4
------------------------------------------
Subtotal      : Rp 300.000
Kategori      : Sedang
Diskon        : 15% (Rp 45.000)
Setelah Diskon: Rp 255.000
PPN 11%       : Rp 28.050
Total Bayar   : Rp 283.050
Ongkos Kirim  : GRATIS ONGKIR
==========================================
```

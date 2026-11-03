// Program Kalkulator Diskon Belanja
// Menggunakan Node.js

console.log("==========================================");
console.log("      PROGRAM KALKULATOR DISKON");
console.log("               BELANJA");
console.log("==========================================");

// Data pelanggan
const nama = "Mutiara Nurul Humairah";
const nim = "24260008";
const mataKuliah = "Aplikasi Berbasis Service";

// Data belanja
const namaBarang = "Buku Tulis Premium";
const hargaSatuan = 75000;
const jumlahBeli = 4;

// Menghitung subtotal
const subtotal = hargaSatuan * jumlahBeli;

// Menentukan persentase diskon dan kategori belanja
// Ketentuan: >= 500.000 (20%), >= 300.000 (15%), >= 100.000 (10%)
let persenDiskon;
let kategori;
if (subtotal >= 500000) {
    persenDiskon = 20;
    kategori = "Besar";
} else if (subtotal >= 300000) {
    persenDiskon = 15;
    kategori = "Sedang";
} else if (subtotal >= 100000) {
    persenDiskon = 10;
    kategori = "Kecil";
} else {
    persenDiskon = 0;
    kategori = "Reguler";
}

// Menghitung diskon, PPN 11%, dan total bayar
const nilaiDiskon = subtotal * persenDiskon / 100;
const setelahDiskon = subtotal - nilaiDiskon;
const ppn = setelahDiskon * 0.11;
const totalBayar = setelahDiskon + ppn;

// Menentukan status ongkos kirim
let ongkir;
if (subtotal >= 200000) {
    ongkir = "GRATIS ONGKIR";
} else {
    ongkir = "BAYAR ONGKIR";
}

// Fungsi bantu untuk format Rupiah
function rupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
}

// Menampilkan hasil
console.log("Nama          : " + nama);
console.log("NIM           : " + nim);
console.log("Mata Kuliah   : " + mataKuliah);
console.log("------------------------------------------");
console.log("Nama Barang   : " + namaBarang);
console.log("Harga Satuan  : " + rupiah(hargaSatuan));
console.log("Jumlah Beli   : " + jumlahBeli);
console.log("------------------------------------------");
console.log("Subtotal      : " + rupiah(subtotal));
console.log("Kategori      : " + kategori);
console.log("Diskon        : " + persenDiskon + "% (" + rupiah(nilaiDiskon) + ")");
console.log("Setelah Diskon: " + rupiah(setelahDiskon));
console.log("PPN 11%       : " + rupiah(ppn));
console.log("Total Bayar   : " + rupiah(totalBayar));
console.log("Ongkos Kirim  : " + ongkir);
console.log("==========================================");

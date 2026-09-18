export interface SectorItem {
  id: string;
  category: string;
  name: string;
  tagline: string;
  desc: string;
  impactMetric: string;
  impactLabel: string;
  usecases: string[];
}

export const sectorsData: SectorItem[] = [
  {
    id: "01",
    category: "Ritel & Pusat Perbelanjaan",
    name: "Ritel & Modern Trade",
    tagline: "Optimasi konversi toko & proteksi kerugian barang",
    desc: "Ubah kamera pengawas toko menjadi data analitik cerdas: ketahui lorong favorit pengunjung, waktu rata-rata kunjungan, dan cegah pencurian barang.",
    impactMetric: "+35%",
    impactLabel: "Akurasi data trafik pengunjung",
    usecases: [
      "Penghitungan Pengunjung Masuk/Keluar",
      "Peta Panas (Heatmap) Lorong Populer",
      "Pemantauan Panjang Antrean Kasir",
      "Pengenalan Wajah Daftar Pelaku Pencurian",
    ],
  },
  {
    id: "02",
    category: "Manufaktur & Kawasan Industri",
    name: "Pabrik & Pergudangan",
    tagline: "Otomasi standar K3 & pencegahan kecelakaan kerja",
    desc: "Tegakkan disiplin keselamatan kerja (K3) 24 jam nonstop tanpa perlu inspektur manual keliling pabrik secara terus-menerus.",
    impactMetric: "99.8%",
    impactLabel: "Kepatuhan pemakaian APD kerja",
    usecases: [
      "Audit Otomatis Helm & Rompi K3",
      "Deteksi Dini Api & Kepulan Asap",
      "Peringatan Pekerja Terjatuh / Pingsan",
      "Perlindungan Batas Perimeter Gudang",
    ],
  },
  {
    id: "03",
    category: "Perbankan & Keuangan",
    name: "Perbankan & Finansial",
    tagline: "Layanan nasabah prioritas & proteksi ruang khazanah",
    desc: "Berikan sambutan istimewa saat nasabah VIP melangkah masuk, sekaligus jaga keamanan ruang brankas dan bilik ATM dari upaya kejahatan.",
    impactMetric: "< 1 dtk",
    impactLabel: "Notifikasi kehadiran nasabah prioritas",
    usecases: [
      "Pengenalan Wajah Nasabah Prioritas / VIP",
      "Deteksi Orang Berlama-lama di Ruang ATM",
      "Deteksi Senjata Tajam & Benda Berbahaya",
      "Anti-Tailgating di Pintu Masuk Server Khazanah",
    ],
  },
  {
    id: "04",
    category: "Pemerintahan & Kawasan",
    name: "Smart City & Properti",
    tagline: "Kelancaran lalu lintas & ketertiban area publik",
    desc: "Pantau arus kendaraan di gerbang kawasan, jalan raya, dan ruang publik untuk mendeteksi kemacetan, pelanggaran arah, dan plat nomor kendaraan.",
    impactMetric: "24/7",
    impactLabel: "Pemantauan otomatis tanpa jeda",
    usecases: [
      "Pembacaan Plat Nomor Otomatis (ANPR)",
      "Deteksi Kendaraan Melawan Arah Jalur",
      "Pemantauan Kepadatan Massa & Kerumunan",
      "Manajemen Ketersediaan Slot Parkir Kawasan",
    ],
  },
];

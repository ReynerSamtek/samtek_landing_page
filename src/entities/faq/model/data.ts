import { FaqItem } from "./types";

export const faqData: FaqItem[] = [
  {
    id: "faq-01",
    question: "Apakah sistem SAMTEK membutuhkan koneksi internet agar bisa bekerja?",
    answer:
      "Sama sekali tidak. Semua pemrosesan AI (pengenalan wajah, plat nomor, APD, anomali) dan penyimpanan video berjalan 100% lokal di server gedung Anda. Saat internet mati, pengawasan tetap berjalan normal tanpa gangguan. Internet hanya opsional jika Anda ingin menerima notifikasi darurat ke ponsel di luar kantor.",
  },
  {
    id: "faq-02",
    question: "Apakah kami harus mengganti kamera CCTV yang sudah terpasang?",
    answer:
      "Tidak perlu mengganti kamera. SAMTEK langsung kompatibel dengan CCTV yang sudah Anda miliki dari brand apapun (Hikvision, Dahua, Axis, Uniview, Bosch, dll) selama mendukung standar RTSP atau ONVIF. Hal ini menghemat biaya investasi ratusan juta rupiah.",
  },
  {
    id: "faq-03",
    question: "Berapa banyak modul AI yang bisa dijalankan secara bersamaan?",
    answer:
      "Tergantung pada kapasitas prosesor/NPU edge server yang dipasang. Anda bebas memilih modul berbeda untuk tiap kamera sesuai kebutuhan lokasi — contohnya kamera gerbang menjalankan deteksi plat nomor & wajah, sedangkan kamera pabrik menjalankan deteksi helm APD & kepulan asap.",
  },
  {
    id: "faq-04",
    question: "Bagaimana skema biaya dan model lisensi SAMTEK?",
    answer:
      "Skema lisensi SAMTEK sangat transparan dan hemat OPEX: lisensi dihitung per kamera dan modul yang Anda aktifkan, tanpa biaya langganan bulanan cloud yang memberatkan dan tanpa biaya konsumsi bandwidth.",
  },
  {
    id: "faq-05",
    question: "Apakah data rekaman kami aman dari kebocoran ke pihak luar?",
    answer:
      "Sangat aman. Data rekaman tidak pernah diunggah ke cloud publik pihak ketiga manapun. Sistem dilengkapi enkripsi AES-256, hak akses bertingkat (RBAC), serta audit log forensik digital yang mencatat setiap aksi operator.",
  },
  {
    id: "faq-06",
    question: "Apakah tersedia bantuan instalasi dan pelatihan untuk staf kami?",
    answer:
      "Ya, tim teknisi PT Safanah Alvan Maksima siap mendampingi mulai dari assessment jaringan CCTV eksisting, instalasi perangkat edge, konfigurasi aturan AI, hingga pelatihan langsung bagi operator keamanan dan tim IT Anda.",
  },
];

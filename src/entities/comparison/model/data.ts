export interface ComparisonRow {
  aspect: string;
  onprem: string;
  onpremHighlight?: boolean;
  cloud: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    aspect: "Biaya Operasional (OPEX)",
    onprem: "0 Rupiah tagihan cloud bulanan. Lisensi transparan.",
    onpremHighlight: true,
    cloud: "Tagihan bulanan membengkak per kamera & biaya storage cloud.",
  },
  {
    aspect: "Konsumsi Bandwidth Internet",
    onprem: "0 MB video keluar. Seluruh komputasi di jaringan LAN lokal.",
    onpremHighlight: true,
    cloud: "Sangat tinggi (10–50 Mbps per kamera), membebani internet kantor.",
  },
  {
    aspect: "Ketergantungan Koneksi Internet",
    onprem: "Sistem tetap aktif 100% normal saat internet gedung terputus.",
    onpremHighlight: true,
    cloud: "AI & perekaman lumpuh total saat koneksi internet mati atau down.",
  },
  {
    aspect: "Keamanan & Kepatuhan Data (UU PDP)",
    onprem: "Data video tidak pernah keluar dari gedung Anda. 100% patuh.",
    onpremHighlight: true,
    cloud: "Video dikirim ke data center pihak ketiga, rawan pelanggaran privasi.",
  },
  {
    aspect: "Kecepatan Respon (Latensi)",
    onprem: "Instan (< 10ms). Aksi gerbang atau alarm merespons seketika.",
    onpremHighlight: true,
    cloud: "Tertunda 1–5 detik karena jeda transmisi data cloud round-trip.",
  },
  {
    aspect: "Investasi Kamera Baru",
    onprem: "Cukup pakai kamera CCTV lama Anda (ONVIF/RTSP compliant).",
    onpremHighlight: true,
    cloud: "Seringkali mewajibkan membeli kamera cloud berharga mahal.",
  },
];

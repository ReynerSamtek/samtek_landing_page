"use client";

import React, { useState } from "react";
import { Button } from "@/shared/ui/button";
import { CheckCircle2, RotateCcw, Send, ShieldAlert } from "lucide-react";

export function DemoRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    cameraCount: "10-30",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      cameraCount: "10-30",
      message: "",
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0D1316] border border-white/15 shadow-2xl flex flex-col gap-4 text-center items-center">
        <div className="w-14 h-14 rounded-full bg-[#121E1A] border border-white/10 flex items-center justify-center text-emerald-400 mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="text-xs font-medium px-3 py-1 rounded-full bg-[#121E1A] text-emerald-400 border border-white/10">
          Permintaan Demo Berhasil Dikirim
        </div>
        <h3 className="text-2xl font-bold text-white">
          Terima kasih, {formData.name || "Bapak/Ibu"}!
        </h3>
        <p className="text-sm text-[#8B9C9B] max-w-md leading-relaxed">
          Tim technical engineer <strong className="text-white">PT Safanah Alvan Maksima</strong> akan menghubungi Anda melalui nomor WhatsApp (
          <span className="text-white font-mono">{formData.phone || formData.email}</span>
          ) dalam waktu 1x24 jam untuk menjadwalkan live assessment on-site.
        </p>

        <div className="mt-4 pt-6 border-t border-white/[0.08] w-full flex justify-center">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={handleReset}
            className="flex items-center gap-2 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Kirim Permintaan Lain
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1316] border border-white/[0.08] shadow-2xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">
          Formulir Pengajuan Demo & POC
        </h3>
        <p className="text-xs sm:text-sm text-[#8B9C9B]">
          Uji coba langsung kemampuan AI di kamera CCTV Anda tanpa komitmen.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
              Nama Lengkap <span className="text-[#B62C2C]">*</span>
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Contoh: Bpk. Bambang Sutrisno"
              required
              className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
              Perusahaan / Instansi <span className="text-[#B62C2C]">*</span>
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Contoh: PT Industri Maju Abadi"
              required
              className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
              Email Kantor (Work Email) <span className="text-[#B62C2C]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@perusahaan.com"
              required
              className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
              Nomor WhatsApp / HP Aktif <span className="text-[#B62C2C]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="081234567890"
              required
              className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
            Estimasi Jumlah Titik Kamera yang Ingin Dianalisis
          </label>
          <select
            name="cameraCount"
            value={formData.cameraCount}
            onChange={handleChange}
            className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white focus:outline-none transition-colors"
          >
            <option value="<10">1 – 10 Titik Kamera (Skala Kecil / Ritel)</option>
            <option value="10-30">10 – 30 Titik Kamera (Gedung Kantor / Gudang)</option>
            <option value="30-100">30 – 100 Titik Kamera (Pabrik / Kawasan)</option>
            <option value=">100">&gt; 100 Titik Kamera (Smart City / Multi-Site)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
            Kebutuhan Spesifik / Masalah yang Ingin Diselesaikan
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Misal: Ingin deteksi helm K3 dan orang tidak berwenang di area gudang bahan peledak..."
            rows={3}
            className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors resize-y"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full font-semibold mt-2"
        >
          {isSubmitting ? (
            <span>Mengirim Data...</span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Kirim Pengajuan Live Demo Sekarang
            </span>
          )}
        </Button>

        <p className="text-[11px] text-[#8B9C9B] text-center mt-3">
          🔒 Data Anda terlindungi dan hanya digunakan untuk keperluan koordinasi demo teknis.
        </p>
      </form>
    </div>
  );
}

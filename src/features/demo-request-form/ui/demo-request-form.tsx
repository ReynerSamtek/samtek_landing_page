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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/send-demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
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
    setErrorMessage(null);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0D1316] border border-white/15 shadow-2xl flex flex-col gap-4 text-center items-center">
        <div className="w-14 h-14 rounded-full bg-[#121E1A] border border-white/10 flex items-center justify-center text-emerald-400 mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="text-xs font-medium px-3 py-1 rounded-full bg-[#121E1A] text-emerald-400 border border-white/10">
          Demo Request Successfully Sent
        </div>
        <h3 className="text-2xl font-bold text-white">
          Thank you, {formData.name || "Valued Partner"}!
        </h3>
        <p className="text-sm text-[#8B9C9B] max-w-md leading-relaxed">
          Our technical engineering team from <strong className="text-white">PT Safanah Alvan Maksima</strong> will contact you via WhatsApp or email (
          <span className="text-white font-mono">{formData.phone || formData.email}</span>
          ) within 24 hours to coordinate your live on-site assessment.
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
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1316] border border-white/[0.08] shadow-2xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">
          Request Live Demo & PoC
        </h3>
        <p className="text-xs sm:text-sm text-[#8B9C9B]">
          Evaluate our edge AI capabilities on your cameras with zero commitment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
              Full Name <span className="text-[#B62C2C]">*</span>
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              required
              className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
              Company / Organization <span className="text-[#B62C2C]">*</span>
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Industrial Corp"
              required
              className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
              Corporate Email <span className="text-[#B62C2C]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
              className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
              WhatsApp / Mobile Number <span className="text-[#B62C2C]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+62 812 3456 7890"
              required
              className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
            Estimated Camera Channels for Analysis
          </label>
          <select
            name="cameraCount"
            value={formData.cameraCount}
            onChange={handleChange}
            className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white focus:outline-none transition-colors"
          >
            <option value="1-8">1 – 8 Camera Channels (Small Site / Pilot)</option>
            <option value="10-30">10 – 30 Camera Channels (Standard Building)</option>
            <option value="30-100">30 – 100 Camera Channels (Industrial Plant / Campus)</option>
            <option value=">100">&gt; 100 Camera Channels (Smart City / Multi-Site)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#C2D1D0] mb-1.5">
            Specific Requirements / Problems to Solve
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. Looking to detect PPE hardhat compliance and unauthorized entry around hazardous chemical storage..."
            rows={3}
            className="w-full bg-[#06090A] border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#8B9C9B]/50 focus:outline-none transition-colors resize-y"
          />
        </div>

        {errorMessage && (
          <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full font-semibold mt-2"
        >
          {isSubmitting ? (
            <span>Submitting Request...</span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Submit Live Demo Application
            </span>
          )}
        </Button>

        <p className="text-[11px] text-[#8B9C9B] text-center mt-3">
          🔒 Your information is confidential and used solely for technical demo scheduling.
        </p>
      </form>
    </div>
  );
}

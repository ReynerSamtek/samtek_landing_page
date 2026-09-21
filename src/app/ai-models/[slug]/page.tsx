import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { aiCapabilities } from "@/entities/capability/model/data";
import { Navbar } from "@/widgets/navbar/ui/navbar";
import { Footer } from "@/widgets/footer/ui/footer";
import { CameraFeedWindow } from "@/features/ai-model-feed/ui/camera-feed-window";
import { ModelWorkflowPipeline } from "@/features/ai-model-feed/ui/model-workflow-pipeline";
import {
  ArrowLeft,
  CheckCircle2,
  Camera,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Layers,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return aiCapabilities.map((capability) => ({
    slug: capability.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = aiCapabilities.find((c) => c.slug === slug);

  if (!capability) {
    return {
      title: "AI Model Not Found — SAMTEK",
    };
  }

  return {
    title: `${capability.name} (${capability.code}) — SAMTEK Edge AI VMS`,
    description: capability.desc,
  };
}

export default async function AiModelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const capability = aiCapabilities.find((c) => c.slug === slug);

  if (!capability) {
    notFound();
  }

  // Related models from the same or other categories
  const relatedCapabilities = aiCapabilities
    .filter((c) => c.slug !== capability.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#06090A] text-[#E6F1F0] selection:bg-[#B62C2C]/30 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#8B9C9B] mb-8 font-mono">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <Link href="/#fitur" className="hover:text-white transition-colors">
            AI Capabilities
          </Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-white font-medium">{capability.name}</span>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/#fitur"
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#8B9C9B] hover:text-white border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All AI Modules</span>
          </Link>
        </div>

        {/* Main Split Showcase Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Model Specifications & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-2.5 py-1 rounded bg-[#B62C2C]/20 border border-[#B62C2C]/40 text-xs font-mono font-semibold text-white uppercase tracking-wider">
                  {capability.category}
                </span>
                <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-xs font-mono text-[#8B9C9B]">
                  ID: {capability.code}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                {capability.name}
              </h1>

              <p className="text-sm sm:text-base text-[#8B9C9B] leading-relaxed mb-6">
                {capability.desc}
              </p>

              {/* Use Cases */}
              {capability.useCaseDetails && capability.useCaseDetails.length > 0 && (
                <div className="space-y-3 mb-6 p-4 rounded-xl bg-[#0B1114] border border-white/[0.08]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-white/80 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Key Operational Use Cases</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-[#8B9C9B]">
                    {capability.useCaseDetails.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hardware Requirements Spec */}
              {capability.recommendedCameras && (
                <div className="p-4 rounded-xl bg-[#090E11] border border-white/[0.08] mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
                    <Camera className="w-3.5 h-3.5" />
                    <span>RECOMMENDED CAMERA SPECIFICATIONS</span>
                  </div>
                  <p className="text-xs text-[#8B9C9B] font-mono">
                    {capability.recommendedCameras}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="/#demo"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B62C2C] hover:bg-[#D33434] text-white text-sm font-semibold shadow-lg shadow-[#B62C2C]/25 transition-all text-center"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/#fitur"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#12191D] hover:bg-[#1A2429] text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-all text-center"
              >
                <Layers className="w-4 h-4 text-[#8B9C9B]" />
                <span>View All 24 Modules</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Simulated / Actual Camera Feed Window */}
          <div className="lg:col-span-7 sticky top-24">
            <CameraFeedWindow capability={capability} />
          </div>
        </section>

        {/* Workflow Pipeline Architecture */}
        <section className="mb-20">
          <ModelWorkflowPipeline capability={capability} />
        </section>

        {/* Related AI Modules Section */}
        <section className="pt-12 border-t border-white/[0.08]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">
                Explore Other AI Capabilities
              </h3>
              <p className="text-xs text-[#8B9C9B]">
                Discover additional computer vision algorithms supported out-of-the-box.
              </p>
            </div>
            <Link
              href="/#fitur"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
            >
              <span>Catalog</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedCapabilities.map((rel) => (
              <Link
                key={rel.id}
                href={`/ai-models/${rel.slug}`}
                className="group p-4 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#8B9C9B] px-2 py-0.5 rounded bg-white/[0.04]">
                    {rel.code}
                  </span>
                  <span className="text-[10px] text-cyan-400 uppercase font-mono">
                    {rel.category}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {rel.name}
                </h4>
                <p className="text-xs text-[#8B9C9B] line-clamp-2">
                  {rel.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


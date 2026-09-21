import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
// @ts-expect-error Next.js processes global CSS imports at build time.
import "./globals.css";
import { siteConfig } from "@/shared/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAMTEK VMS — Landing Page",
  description:
    "Ubah CCTV yang sudah ada menjadi sistem AI cerdas. Pemrosesan video 100% on-premise tanpa biaya cloud bulanan dan tanpa risiko kebocoran data.",
  keywords: [
    "Samtek VMS",
    "Video Management System Indonesia",
    "AI CCTV On-Premise",
    "Smart Surveillance",
    "Face Recognition CCTV",
    "PPE Detection K3",
    "Edge AI Vision",
  ],
  authors: [{ name: siteConfig.company.name }],
  creator: siteConfig.company.name,
  icons: {
    icon: "/picture/512x512.png",
    shortcut: "/picture/512x512.png",
    apple: "/picture/512x512.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#06090A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-[#06090A] text-[#E6F1F0] antialiased selection:bg-[#B62C2C]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

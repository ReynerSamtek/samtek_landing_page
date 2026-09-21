import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
// @ts-expect-error Next.js processes global CSS imports at build time.
import "./globals.css";
import { siteConfig } from "@/shared/config/site";
import { CursorGlow } from "@/shared/ui/cursor-glow";
import { LoadingOverlay } from "@/shared/ui/loading-overlay";

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
  title: "SAMTEK — AI Video Management System (On-Premise Edge AI)",
  description:
    "Transform your existing CCTV into an intelligent AI surveillance system. 100% on-premise edge video analytics with zero recurring cloud fees and zero risk of data exposure.",
  keywords: [
    "SAMTEK VMS",
    "On-Premise Video Management System",
    "Edge AI CCTV",
    "Smart Surveillance System",
    "Face Recognition Access Control",
    "PPE Detection K3",
    "ANPR License Plate Recognition",
    "Zero Cloud Bandwidth CCTV",
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
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ backgroundColor: "#06090A", color: "#E6F1F0" }}
    >
      <head>
        {/* Critical inline CSS preventing Flash of Unstyled Content (FOUC) and white flash */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                background-color: #06090A !important;
                color: #E6F1F0 !important;
                margin: 0;
                padding: 0;
              }
              a {
                color: inherit;
                text-decoration: none;
              }
              header {
                background-color: rgba(6, 9, 10, 0.95);
              }
            `,
          }}
        />
      </head>
      <body className="font-sans bg-[#06090A] text-[#E6F1F0] antialiased selection:bg-[#B62C2C]/30 selection:text-white relative">
        <LoadingOverlay />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

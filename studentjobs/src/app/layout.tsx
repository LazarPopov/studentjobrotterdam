// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Student Jobs Rotterdam",
  description: "Find student jobs in Rotterdam — English-friendly roles, fast apply tips, and real pay ranges.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-svh bg-white text-slate-900 flex flex-col">
        {/* Plausible (optional – remove if you don’t use it) */}
        <Script defer data-domain="studentjobsrotterdam.nl" src="https://plausible.io/js/script.js" />

        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

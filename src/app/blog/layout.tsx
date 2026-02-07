// src/app/blog/layout.tsx
import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

const SITE = "https://studentjobsrotterdam.nl";
const CANONICAL = `${SITE}/blog`;

// Use the real file in /public/blog/
const OG_IMAGE_PATH = "/blog/rotterdam-bridge-photo.jpg";
const OG_IMAGE_URL = `${SITE}${OG_IMAGE_PATH}`;

export const metadata: Metadata = {
  title: "Student Jobs Rotterdam Blog (2026): Pay, English-Friendly Jobs, Weekend and Evening Shifts",
  description:
    "Rotterdam student job guides for 2026: English-friendly part-time jobs, pay ranges, contracts, permits, CV tips, and fast filters to apply quickly.",
  keywords: [
    "student jobs rotterdam",
    "part-time jobs rotterdam students",
    "english speaking student jobs rotterdam",
    "student part-time jobs rotterdam",
    "weekend student jobs rotterdam",
    "evening student jobs rotterdam",
    "no experience student jobs rotterdam",
    "student pay rotterdam",
    "rotterdam vacancies students",
  ],
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Student Jobs Rotterdam Blog (2026)",
    description:
      "Rotterdam student job guides in one place: English-friendly roles, weekend and evening shifts, pay, contracts, permits, and fast apply tactics.",
    url: CANONICAL,
    type: "website",
    locale: "en_NL",
    siteName: "Student Jobs Rotterdam",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Rotterdam Erasmus Bridge and skyline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Jobs Rotterdam Blog (2026)",
    description:
      "Browse Rotterdam student job guides: English-friendly part-time jobs, pay ranges, contracts, permits, and fast apply tips.",
    images: [OG_IMAGE_URL],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 border-b flex items-center justify-between">
        <BackButton />
        <h1 className="text-xl font-bold">Blog</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

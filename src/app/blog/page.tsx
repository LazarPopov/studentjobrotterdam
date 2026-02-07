// src/app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://studentjobsrotterdam.nl";
const CANONICAL = `${SITE}/blog`;

// Real file that exists in /public/blog/
const OG_IMAGE_PATH = "/blog/rotterdam-bridge-photo.jpg";
const OG_IMAGE_URL = `${SITE}${OG_IMAGE_PATH}`;

const POSTS = [
  {
    slug: "studenten-bijbaan-rotterdam",
    title: "Student Part-Time Jobs in Rotterdam (2026): English-Friendly, Weekend, No Experience",
    description:
      "The ultimate guide to part-time student jobs in Rotterdam: evening and weekend shifts, English-friendly roles, no experience options, pay ranges, and quick filters.",
  },
  {
    slug: "student-jobs-rotterdam-complete-guide-2026",
    title: "Student Jobs in Rotterdam: Complete Guide (2026)",
    description:
      "Permits, contracts, pay, neighborhoods, and a step-by-step plan to land a job fast.",
  },
  {
    slug: "english-speaking-student-jobs-rotterdam",
    title: "English-Speaking Student Jobs in Rotterdam (2026)",
    description:
      "Where to find jobs that don’t require Dutch, plus quick-apply tips for international students.",
  },
  {
    slug: "best-paying-student-jobs-rotterdam-2026",
    title: "Best-Paying Student Jobs in Rotterdam (2026)",
    description:
      "Higher-paying categories, shift bonuses, and certifications that increase your hourly rate.",
  },
  {
    slug: "how-to-use-ai-to-find-student-jobs-rotterdam-faster",
    title: "How to Use AI to Find Student Jobs in Rotterdam Faster",
    description:
      "Copy-paste prompts, a 7-day workflow, screening checklist, and application templates to get replies faster.",
  },
];

export const metadata: Metadata = {
  title: "Student Jobs Rotterdam Blog (2026): Pay, English-Friendly Jobs, Weekend and Evening Shifts",
  description:
    "All Rotterdam student job guides in one place: English-friendly part-time jobs, pay ranges, contracts, permits, CV tips, and fast filters to apply quickly.",
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
      "Browse all Rotterdam student job guides: English-friendly roles, weekend and evening shifts, pay, contracts, permits, and quick-apply tactics.",
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
      "Rotterdam student job guides: English-friendly part-time jobs, pay ranges, contracts, permits, and fast apply tips.",
    images: [OG_IMAGE_URL],
  },
};

export default function BlogIndex() {
  return (
    <section className="px-6 py-10 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Blog: Student Jobs in Rotterdam (2026)
          </h1>
          <p className="mt-3 text-slate-700">
            Practical Rotterdam guides for students: English-friendly part-time jobs,
            weekend and evening shifts, pay ranges, contracts, permits, and fast apply tips.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/jobs?city=Rotterdam"
              className="rounded-full border bg-white px-3 py-1 text-sm underline"
            >
              All vacancies
            </Link>
            <Link
              href="/jobs?city=Rotterdam&english=true"
              className="rounded-full border bg-white px-3 py-1 text-sm underline"
            >
              English-friendly
            </Link>
            <Link
              href="/jobs?city=Rotterdam&weekend=true"
              className="rounded-full border bg-white px-3 py-1 text-sm underline"
            >
              Weekend
            </Link>
            <Link
              href="/jobs?city=Rotterdam&evening=true"
              className="rounded-full border bg-white px-3 py-1 text-sm underline"
            >
              Evening
            </Link>
            <Link
              href="/jobs?city=Rotterdam&noExperience=true"
              className="rounded-full border bg-white px-3 py-1 text-sm underline"
            >
              No experience
            </Link>
          </div>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-2xl border bg-white p-5 hover:shadow-md transition"
            >
              <div className="text-lg font-semibold">{p.title}</div>
              <p className="text-gray-600 text-sm mt-2">{p.description}</p>
              <div className="mt-3 text-sm underline">Read more</div>
            </Link>
          ))}
        </div>
      </div>

      {/* JSON-LD: CollectionPage + ItemList + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Student Jobs Rotterdam Blog (2026)",
            description:
              "Rotterdam student job guides: English-friendly part-time jobs, pay ranges, contracts, permits, CV tips, and fast filters to apply quickly.",
            url: CANONICAL,
            inLanguage: "en-NL",
            isPartOf: {
              "@type": "WebSite",
              name: "Student Jobs Rotterdam",
              url: SITE,
            },
            about: [
              { "@type": "Thing", name: "Student jobs in Rotterdam" },
              { "@type": "Thing", name: "English-speaking student jobs in Rotterdam" },
              { "@type": "Thing", name: "Part-time jobs for students in Rotterdam" },
              { "@type": "Thing", name: "Weekend and evening student jobs in Rotterdam" },
            ],
            mainEntity: {
              "@type": "ItemList",
              itemListElement: POSTS.map((p, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                url: `${SITE}/blog/${p.slug}`,
                name: p.title,
              })),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: CANONICAL },
            ],
          }),
        }}
      />
    </section>
  );
}

// src/app/blog/english-speaking-student-jobs-rotterdam/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PUBLISH_DATE = "2025-10-02";
const MODIFIED_DATE = "2025-10-02";
const CANONICAL = "https://studentjobsrotterdam.nl/blog/english-speaking-student-jobs-rotterdam";
const OG_IMAGE =   "https://studentjobsrotterdam.nl/blog/international-students-looking-for-English-speaking-jobs-near-Rotterdams-Erasmus-Bridge.jpg"; // place /public/guides/placeholder.jpg


export const metadata: Metadata = {
  title: "English-Speaking Student Jobs in Rotterdam (2025) — Where to Find Them & How to Stand Out",
  description:
    "A practical guide to English-speaking student jobs in Rotterdam. Best categories, typical pay, quick-apply templates, and where to search — without Dutch.",
  keywords: [
    "English-speaking jobs Rotterdam",
    "student jobs Rotterdam",
    "international student jobs Netherlands",
    "part-time jobs Rotterdam",
    "no Dutch jobs Rotterdam",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "English-Speaking Student Jobs in Rotterdam (2025)",
    description:
      "Find roles that don’t require Dutch: hospitality, events, delivery/logistics, tutoring, and more. Tips, pay ranges, and quick-apply templates.",
    url: CANONICAL,
    type: "article",
    locale: "en_NL",
    siteName: "Student Jobs Rotterdam",
    publishedTime: PUBLISH_DATE,
    modifiedTime: MODIFIED_DATE,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "English-Speaking Student Jobs in Rotterdam (2025)",
    description:
      "Best categories, pay ranges, and quick-apply tips for English-speaking student jobs in Rotterdam.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function GuideEnglish() {
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl">
        <header>
          <h1 className="text-3xl md:text-5xl font-semibold">
            English-Speaking Student Jobs in Rotterdam (2025)
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            By <span className="font-medium">Student Jobs Rotterdam</span> • Updated {new Date(MODIFIED_DATE).toLocaleDateString("en-NL", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-5 rounded-2xl border overflow-hidden">
            <Image
              src="/blog/international-students-looking-for-English-speaking-jobs-near-Rotterdams-Erasmus-Bridge.png"
              alt="International students looking for English-speaking jobs near Rotterdam's Erasmus Bridge"
              width={1280}
              height={720}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </header>

        {/* Table of contents */}
        <nav aria-label="Table of contents" className="mt-6 rounded-2xl border p-4 bg-slate-50">
          <div className="font-semibold">On this page</div>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li><a href="#where-to-look" className="underline">Where to look (fast)</a></li>
            <li><a href="#best-categories" className="underline">Best categories without Dutch</a></li>
            <li><a href="#pay" className="underline">Typical pay & allowances</a></li>
            <li><a href="#apply-fast" className="underline">Apply fast (copy-paste template)</a></li>
            <li><a href="#documents" className="underline">Documents & basics</a></li>
            <li><a href="#faq" className="underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-slate max-w-none mt-8">
          <h2 id="where-to-look">Where to look (fast)</h2>
          <p>
            Start with our live listings and category pages — most roles are English-friendly and actively hiring.
          </p>
          <ul>
            <li>
              <Link href="/jobs?english=true" className="underline">All English-friendly jobs in Rotterdam</Link>
            </li>
            <li>
              Browse by category:{" "}
              <Link href="/categories/hospitality" className="underline">Hospitality</Link>,{" "}
              <Link href="/categories/events" className="underline">Events</Link>,{" "}
              <Link href="/categories/delivery" className="underline">Delivery</Link>,{" "}
              <Link href="/categories/fieldwork" className="underline">Fieldwork</Link>,{" "}
              <Link href="/categories/tutoring" className="underline">Tutoring</Link>,{" "}
              <Link href="/categories/sales" className="underline">Sales</Link>.
            </li>
          </ul>

          <h2 id="best-categories">Best categories without Dutch</h2>
          <p>These categories regularly hire international students and typically operate in English:</p>
          <ul>
            <li><strong>Hospitality & Events</strong>: cafés, bars, event crews, festival staff.</li>
            <li><strong>Delivery & Logistics</strong>: riders, warehouse evening shifts, port-adjacent roles.</li>
            <li><strong>Tutoring</strong>: English-medium courses and private tutoring pay well.</li>
            <li><strong>Sales/Support (international)</strong>: customer success, call/chat teams for EU markets.</li>
          </ul>

          <h2 id="pay">Typical pay & allowances</h2>
          <p>
            Rates vary by age and experience. As a quick orientation, many students earn <strong>€13–€17 per hour</strong> in
            hospitality/logistics and <strong>€15–€18+ per hour</strong> in tutoring. Check listings for evening/night/weekend
            allowances and 8% holiday pay.
          </p>

          <h2 id="apply-fast">Apply fast (copy-paste template)</h2>
          <p>Use this short message in your application notes or first email:</p>
          <blockquote>
            Hi! I’m a student in Rotterdam with availability on weekdays after 16:00 and weekends. I have customer-facing experience and can start immediately. CV attached. Thanks for your time!
          </blockquote>
          <p>
            Tip: apply before 10:00 and follow up the same day. Managers prioritize candidates who respond quickly.
          </p>

          <h2 id="documents">Documents & basics</h2>
          <ul>
            <li><strong>Bring:</strong> ID, BSN (or appointment), IBAN, residence/work permission if applicable.</li>
            <li><strong>Contracts:</strong> part-time, on-call (0-uren), or min-max schedules; confirm guaranteed hours.</li>
            <li><strong>Reliability:</strong> consistent weekly availability will beat a longer CV.</li>
          </ul>

          <div className="mt-8 rounded-2xl border p-5 bg-white">
            <div className="font-semibold text-lg">Ready to find work?</div>
            <p className="mt-1">
              Start here:{" "}
              <Link href="/jobs?english=true" className="underline">Browse English-friendly roles</Link>{" "}
              or{" "}
              <Link href="/categories" className="underline">explore all categories</Link>. Are you hiring?{" "}
              <Link href="/employers" className="underline">Feature your job</Link>.
            </p>
          </div>

          <h2 id="faq">FAQ</h2>
          <h3>Do I need Dutch?</h3>
          <p>No. Many roles are English-friendly (hospitality, events, logistics, tutoring). Basic Dutch helps for retail.</p>

          <h3>How many hours can I work?</h3>
          <p>
            EU students have flexible limits; non-EU students typically have stricter caps during the academic year. Always confirm with your employer.
          </p>

          <h3>What’s a good hourly rate?</h3>
          <p>Often €13–€17/h for hospitality/logistics, €15–€18+/h for tutoring — plus allowances where applicable.</p>
        </div>

        {/* JSON-LD: BlogPosting + BreadcrumbList + FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "English-Speaking Student Jobs in Rotterdam (2025)",
              description:
                "Find English-speaking student jobs in Rotterdam: best categories, pay ranges, quick-apply templates, and where to search.",
              image: OG_IMAGE,
              datePublished: PUBLISH_DATE,
              dateModified: MODIFIED_DATE,
              author: { "@type": "Organization", name: "Student Jobs Rotterdam", url: "https://studentjobsrotterdam.nl/" },
              publisher: { "@type": "Organization", name: "Student Jobs Rotterdam" },
              mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
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
                { "@type": "ListItem", position: 1, name: "Blog", item: "https://studentjobsrotterdam.nl/blog" },
                { "@type": "ListItem", position: 2, name: "English-Speaking Student Jobs in Rotterdam", item: CANONICAL },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do I need Dutch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "No. Many roles are English-friendly in hospitality, events, logistics, and tutoring. Basic Dutch helps for retail.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many hours can I work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "EU students have flexible limits; non-EU students usually have stricter caps during the academic year. Confirm with your employer.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What’s a good hourly rate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Often €13–€17/h for hospitality/logistics and €15–€18+/h for tutoring, with allowances where applicable.",
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}

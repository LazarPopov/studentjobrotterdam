// src/app/guides/best-paying-student-jobs-rotterdam-2026/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PUBLISH_DATE = "2026-01-02";
const MODIFIED_DATE = "2026-01-02";

const CANONICAL =
  "https://studentjobsrotterdam.nl/blog/best-paying-student-jobs-rotterdam-2026";

// Use your real local file (put it in /public/blog/)
const HERO_IMAGE_PATH = "/blog/rotterdam-bridge-photo.jpg";
const OG_IMAGE_URL = `https://studentjobsrotterdam.nl${HERO_IMAGE_PATH}`;

export const metadata: Metadata = {
  title:
    "Best-Paying Student Jobs in Rotterdam (2026) - Shift Bonuses, Categories, Certifications",
  description:
    "Find the best-paying student jobs in Rotterdam in 2026. Compare high-paying categories, shift bonuses (evening/night/weekend), and certifications like BHV, HACCP, VCA and forklift to raise your hourly wage fast.",
  keywords: [
    "best paying student jobs Rotterdam",
    "high paying student jobs Rotterdam",
    "student jobs Rotterdam salary",
    "student wage Rotterdam",
    "evening weekend allowance Rotterdam",
    "forklift certificate Rotterdam",
    "VCA certificate Rotterdam",
    "BHV course Rotterdam",
    "HACCP certificate Rotterdam",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Best-Paying Student Jobs in Rotterdam (2026)",
    description:
      "High-paying categories, shift bonuses, and certifications that increase your hourly rate in Rotterdam.",
    url: CANONICAL,
    type: "article",
    locale: "en_NL",
    siteName: "Student Jobs Rotterdam",
    publishedTime: PUBLISH_DATE,
    modifiedTime: MODIFIED_DATE,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Rotterdam Erasmus Bridge skyline - student jobs guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best-Paying Student Jobs in Rotterdam (2026)",
    description:
      "Which student jobs pay the most in Rotterdam? Use shift bonuses and short certifications to raise your hourly wage fast.",
    images: [OG_IMAGE_URL],
  },
  robots: { index: true, follow: true },
};

export default function BestPayingGuideRotterdam() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Best-Paying Student Jobs in Rotterdam (2026)
          </h1>

          <p className="mt-3 text-sm text-slate-600">
            By <span className="font-medium">Student Jobs Rotterdam</span> •
            Updated{" "}
            {new Date(MODIFIED_DATE).toLocaleDateString("en-NL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-white">
            <Image
              src={HERO_IMAGE_PATH}
              alt="Rotterdam Erasmus Bridge skyline"
              width={1280}
              height={720}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Image credit: amsterdamprivateboat.com
          </p>
        </header>

        {/* CONTENT + TOC */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* TOC */}
          <nav
            aria-label="Table of contents"
            className="
              order-1 lg:order-2
              lg:sticky lg:top-24 h-max
              rounded-2xl border p-4 bg-slate-50
              text-sm text-slate-700
            "
          >
            <div className="font-semibold">On this page</div>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#top-categories" className="underline">
                  Top-paying categories
                </a>
              </li>
              <li>
                <a href="#shift-bonuses" className="underline">
                  Shift bonuses that boost pay
                </a>
              </li>
              <li>
                <a href="#certifications" className="underline">
                  Certifications that add money
                </a>
              </li>
              <li>
                <a href="#quick-wins" className="underline">
                  Quick wins to raise your rate
                </a>
              </li>
              <li>
                <a href="#example-paths" className="underline">
                  Example upgrade paths
                </a>
              </li>
              <li>
                <a href="#apply-now" className="underline">
                  Apply now
                </a>
              </li>
              <li>
                <a href="#faq" className="underline">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* ARTICLE */}
          <article
            className="
              order-2 lg:order-1
              max-w-3xl
              space-y-6
              leading-relaxed text-slate-800
              [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold
              [&_h3]:mt-6  [&_h3]:text-xl  [&_h3]:font-semibold
              [&_p]:mt-3   [&_ul]:mt-3   [&_ol]:mt-3
              [&_ul]:list-disc [&_ul]:pl-6
              [&_ol]:list-decimal [&_ol]:pl-6
              [&_a]:underline [&_a]:text-brand-700 hover:[&_a]:text-brand-600
            "
          >
            <p>
              If you want a higher hourly wage in Rotterdam, the fastest levers
              are: (1) pick categories with higher base pay, (2) work shifts
              with allowances, and (3) get one short certification that unlocks
              better roles.
            </p>

            <h2 id="top-categories">Top-paying categories for students in Rotterdam</h2>
            <p>
              Pay depends on age, experience, and CBA, but these categories are
              often on the higher end in Rotterdam:
            </p>
            <ul>
              <li>
                <strong>Tutoring</strong> (math, programming, languages) tends to
                pay well because it is skill-based. Start here:{" "}
                <Link href="/categories/tutoring">Tutoring jobs</Link>.
              </li>
              <li>
                <strong>Logistics and warehouse roles</strong> around Rotterdam
                hubs can pay more, especially evenings and weekends. See{" "}
                <Link href="/categories/delivery">Delivery</Link> and{" "}
                <Link href="/categories/fieldwork">Fieldwork</Link>.
              </li>
              <li>
                <strong>Events (crew lead, team lead)</strong> pays more when you
                handle responsibility and brief teams. Browse{" "}
                <Link href="/categories/events">Events</Link>.
              </li>
              <li>
                <strong>Sales with commission</strong> can out-earn fixed hourly
                roles when bonuses are real. Check{" "}
                <Link href="/categories/sales">Sales</Link>.
              </li>
              <li>
                <strong>Skilled hospitality</strong> (barista, shift lead) often
                beats entry-level runner roles. Explore{" "}
                <Link href="/categories/hospitality">Hospitality</Link>.
              </li>
            </ul>

            <h2 id="shift-bonuses">Shift bonuses that boost your net hourly rate</h2>
            <p>
              In many Rotterdam student jobs, the schedule is money. Check each
              vacancy for the exact premiums, but these are common:
            </p>
            <ul>
              <li>
                <strong>Evening, night, weekend allowances</strong> (logistics,
                warehouses, events, hospitality).
              </li>
              <li>
                <strong>Holiday pay</strong> (often 8 percent) paid monthly or
                yearly on top of your base wage.
              </li>
              <li>
                <strong>Travel reimbursement</strong> matters if your shifts are
                outside the center.
              </li>
            </ul>

            <h2 id="certifications">Certifications that increase pay in Rotterdam</h2>
            <p>
              A short certificate can move you from entry roles to higher-paying
              tasks, faster than waiting for seniority:
            </p>
            <ul>
              <li>
                <strong>BHV</strong> (emergency response): useful for events and
                hospitality teams.
              </li>
              <li>
                <strong>HACCP</strong> (food safety): helps in kitchens, cafes,
                and catering roles.
              </li>
              <li>
                <strong>VCA</strong> (safety standard): common requirement for
                fieldwork, build-up, and logistics environments.
              </li>
              <li>
                <strong>Forklift (heftruck)</strong>: unlocks better-paid warehouse
                stations and shifts.
              </li>
              <li>
                <strong>Barista training</strong>: quick path to higher paid
                hospitality duties.
              </li>
            </ul>
            <p className="text-sm text-slate-600">
              Tip: ask if the employer reimburses the course after your probation
              period.
            </p>

            <h2 id="quick-wins">Quick wins to raise your rate fast</h2>
            <ul>
              <li>
                Choose <strong>evening and weekend availability</strong> to get
                premium shifts.
              </li>
              <li>
                Lead with reliability: share your schedule in the first message.
              </li>
              <li>
                Apply to fewer roles, but follow up the same day and be ready for
                a trial shift.
              </li>
              <li>
                Learn one certificate in 1 to 2 weeks, then ask for higher duty
                tasks.
              </li>
              <li>
                Add <strong>English plus basic Dutch</strong> on your CV for more
                options.
              </li>
            </ul>

            <h2 id="example-paths">Example upgrade paths</h2>
            <ol>
              <li>
                <strong>Hospitality runner to barista to shift lead</strong>: do a
                short barista training and ask for close shifts.
              </li>
              <li>
                <strong>Warehouse picker to forklift certified</strong>: take a
                short forklift course and move to better paid stations.
              </li>
              <li>
                <strong>Event crew to team lead</strong>: get BHV and volunteer to
                brief teams and handle checklists.
              </li>
              <li>
                <strong>Good grades to tutor</strong>: start general, then
                specialize to increase your hourly rate.
              </li>
            </ol>

            <h2 id="apply-now">Apply now (high-paying filters)</h2>
            <div className="rounded-2xl border p-5 bg-white">
              <div className="font-semibold text-lg">Ready to earn more?</div>
              <p className="mt-1">
                Start here: <Link href="/jobs">see all jobs</Link>,{" "}
                <Link href="/jobs?english=true">English-friendly only</Link>, and{" "}
                <Link href="/categories">browse categories</Link>. Hiring as an
                employer? <Link href="/employers">Feature your job</Link>.
              </p>
            </div>

            <h2 id="faq">FAQ</h2>

            <h3>Which student jobs pay the most in Rotterdam?</h3>
            <p>
              Often tutoring, logistics evening or weekend shifts, event lead
              roles, and sales jobs with commission. Skilled hospitality
              (barista, shift lead) can also pay above entry roles.
            </p>

            <h3>How do I increase my hourly wage quickly?</h3>
            <p>
              Pick shifts with allowances, get a short certification (BHV, VCA,
              forklift, barista), and ask for tasks with responsibility like
              lead duties.
            </p>

            <h3>Do certifications really matter?</h3>
            <p>
              Yes. They signal safety and responsibility and can unlock
              higher-paying tasks and better shifts.
            </p>
          </article>
        </div>

        {/* JSON-LD: Article + Breadcrumb + FAQ + HowTo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Best-Paying Student Jobs in Rotterdam (2026) - Shift Bonuses, Categories, Certifications",
              description:
                "High-paying student job categories in Rotterdam, shift bonuses that boost pay, and short certifications like BHV, HACCP, VCA and forklift.",
              image: OG_IMAGE_URL,
              datePublished: PUBLISH_DATE,
              dateModified: MODIFIED_DATE,
              inLanguage: "en-NL",
              author: {
                "@type": "Organization",
                name: "Student Jobs Rotterdam",
                url: "https://studentjobsrotterdam.nl/",
              },
              publisher: {
                "@type": "Organization",
                name: "Student Jobs Rotterdam",
              },
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
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Blog",
                  item: "https://studentjobsrotterdam.nl/blog",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Best-Paying Student Jobs in Rotterdam (2026)",
                  item: CANONICAL,
                },
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
              "@id": `${CANONICAL}#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Which student jobs pay the most in Rotterdam?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Tutoring, logistics evening/weekend shifts, event lead roles, and sales with commission are often among the best-paying. Skilled hospitality roles like barista or shift lead can also pay above entry level.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I increase my hourly wage quickly?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Choose shifts with allowances, get a short certification (BHV, VCA, forklift, barista), and ask for responsibility-based duties such as team lead tasks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do certifications really matter?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes. Certifications signal safety and responsibility and can unlock better-paid tasks and premium shifts.",
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to boost your student wage in Rotterdam in 2 weeks",
              image: OG_IMAGE_URL,
              totalTime: "P14D",
              supply: [
                { "@type": "HowToSupply", name: "1-page CV (PDF)" },
                { "@type": "HowToSupply", name: "One short certificate (BHV, VCA, forklift, barista)" },
                { "@type": "HowToSupply", name: "Evening/weekend availability plan" },
              ],
              step: [
                {
                  "@type": "HowToStep",
                  name: "Pick a higher-paying category",
                  text:
                    "Choose tutoring, logistics, events lead roles, skilled hospitality, or sales with commission based on your strengths and schedule.",
                },
                {
                  "@type": "HowToStep",
                  name: "Get one quick certification",
                  text:
                    "Complete BHV, VCA, forklift, HACCP, or barista training to unlock better-paid tasks and shifts.",
                },
                {
                  "@type": "HowToStep",
                  name: "Apply with targeted availability",
                  text:
                    "Apply early, highlight evening/weekend availability, and follow up the same day to secure trial shifts faster.",
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}

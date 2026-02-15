// src/app/guides/student-jobs-rotterdam-complete-guide-2026/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://studentjobsrotterdam.nl";

const PUBLISH_DATE = "2026-01-02";
const MODIFIED_DATE = "2026-01-02";

const CANONICAL = `${SITE}/blog/student-jobs-rotterdam-complete-guide-2026`;

// Use your local image from /public/blog/
const HERO_IMAGE_PATH = "/blog/rotterdam-bridge-photo.jpg";
const OG_IMAGE_URL = `${SITE}${HERO_IMAGE_PATH}`;

export const metadata: Metadata = {
 title:
 "Student jobs in Rotterdam (2026): complete guide to permits, pay, contracts, neighborhoods",
 description:
 "Everything you need to get a student job in Rotterdam in 2026: work permits and hours, contracts, pay and allowances, best neighborhoods, English friendly roles, and a fast application checklist.",
 keywords: [
 "student jobs rotterdam",
 "part time jobs rotterdam students",
 "english speaking student jobs rotterdam",
 "student work permit rotterdam",
 "twv work permit student netherlands",
 "rotterdam student wage",
 "rotterdam weekend jobs students",
 "rotterdam evening jobs students",
 "kralingen student jobs",
 "waalhaven logistics student jobs",
 ],
 alternates: { canonical: CANONICAL },
 openGraph: {
 title:
  "Student jobs in Rotterdam (2026): complete guide to permits, pay, contracts, neighborhoods",
 description:
  "Permits, contracts, pay ranges, neighborhoods, and a practical plan to land a student job in Rotterdam fast.",
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
  alt: "Rotterdam Erasmus Bridge and skyline, student jobs complete guide",
  },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: "Student jobs in Rotterdam (2026): complete guide",
 description:
  "A practical guide to working as a student in Rotterdam: pay, contracts, permits, and where to apply.",
 images: [OG_IMAGE_URL],
 },
 robots: { index: true, follow: true },
};

export default function StudentJobsRotterdamCompleteGuide2026() {
 return (
 <section className="section">
  <div className="mx-auto max-w-6xl">
  {/* HEADER */}
  <header className="max-w-3xl">
   <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
   Student jobs in Rotterdam: complete guide (2026)
   </h1>

   <p className="mt-3 text-sm text-slate-600">
   By <span className="font-medium">Student Jobs Rotterdam</span> • Updated{" "}
   {new Date(MODIFIED_DATE).toLocaleDateString("en-NL", {
    year: "numeric",
    month: "long",
    day: "numeric",
   })}
   </p>

   <div className="mt-5 overflow-hidden rounded-2xl border bg-white">
   <Image
    src={HERO_IMAGE_PATH}
    alt="Rotterdam Erasmus Bridge and skyline"
    width={1280}
    height={720}
    priority
    className="w-full h-auto object-cover"
   />
   </div>

   <p className="mt-2 text-xs text-slate-500">
   Image credit: amsterdamprivateboat.com
   </p>

   <p className="mt-5 text-slate-800 leading-relaxed">
   Rotterdam is great for student work because you can match fast with logistics, delivery,
   hospitality, events, retail, tutoring, and customer support. This guide covers the legal basics,
   pay and contracts, neighborhoods that hire a lot, and a simple routine to get replies quickly.
   </p>

   {/* Quick filters */}
   <div className="mt-6 flex flex-wrap gap-2">
   <Link
    href="/jobs?city=Rotterdam"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    All jobs in Rotterdam
   </Link>
   <Link
    href="/jobs?city=Rotterdam&english=true"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    English friendly
   </Link>
   <Link
    href="/jobs?city=Rotterdam&noExperience=true"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    No experience
   </Link>
   <Link
    href="/jobs?city=Rotterdam&evening=true"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    Evening shifts
   </Link>
   <Link
    href="/jobs?city=Rotterdam&weekend=true"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    Weekend shifts
   </Link>
   <Link
    href="/part-time-jobs-rotterdam-students"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    Part time jobs pillar page
   </Link>
   </div>
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
    <a href="#quickstart" className="underline">
     Quick start checklist
    </a>
    </li>
    <li>
    <a href="#permits" className="underline">
     Work permits and hours
    </a>
    </li>
    <li>
    <a href="#contracts-pay" className="underline">
     Contracts, pay, allowances
    </a>
    </li>
    <li>
    <a href="#neighborhoods" className="underline">
     Neighborhoods and commute tips
    </a>
    </li>
    <li>
    <a href="#categories" className="underline">
     Best categories for students
    </a>
    </li>
    <li>
    <a href="#where-to-look" className="underline">
     Where to find jobs fast
    </a>
    </li>
    <li>
    <a href="#templates" className="underline">
     CV and message templates
    </a>
    </li>
    <li>
    <a href="#schedule" className="underline">
     Weekly schedule that works
    </a>
    </li>
    <li>
    <a href="#admin" className="underline">
     BSN, bank, payslips, taxes
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
    [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold
    [&_p]:mt-3 [&_ul]:mt-3 [&_ol]:mt-3
    [&_ul]:list-disc [&_ul]:pl-6
    [&_ol]:list-decimal [&_ol]:pl-6
    [&_a]:underline [&_a]:text-brand-700 hover:[&_a]:text-brand-600
    [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1 [&_code]:py-0.5
   "
   >
   <h2 id="quickstart">Quick start checklist (do this today)</h2>
   <ul>
    <li>
    Make a <strong>1 page CV</strong> and add an availability block (days, hours, start date).
    </li>
    <li>
    Pick <strong>two to three categories</strong> for one week:{" "}
    <Link href="/categories/hospitality">Hospitality</Link>,{" "}
    <Link href="/categories/delivery">Delivery</Link>,{" "}
    <Link href="/categories/events">Events</Link>,{" "}
    <Link href="/categories/tutoring">Tutoring</Link>,{" "}
    <Link href="/categories/support">Customer support</Link>.
    </li>
    <li>
    Apply in the morning and follow up the same day if the listing has contact details.
    </li>
    <li>
    Prepare <strong>ID</strong>, <strong>IBAN</strong>, and your <strong>BSN</strong> (or appointment confirmation).
    </li>
    <li>
    Start here: <Link href="/jobs?city=Rotterdam">all Rotterdam jobs</Link> or{" "}
    <Link href="/jobs?city=Rotterdam&english=true">English friendly only</Link>.
    </li>
   </ul>

   <h2 id="permits">Work permits and hours (EU vs Non EU)</h2>
   <p>
    Rules depend on your nationality, residence status, and enrollment. Keep it simple:
    verify your personal situation before you commit to a schedule.
   </p>
   <ul>
    <li>
    <strong>EU and EEA students</strong>: you can usually work without a work permit under normal Dutch rules.
    </li>
    <li>
    <strong>Non EU students</strong>: employers may need to arrange a permit and many study permits have limits
    during the academic year (often a weekly limit or seasonal full time option).
    </li>
   </ul>
   <p className="text-sm text-slate-600">
    Always confirm with official sources and your employer:{" "}
    <a href="https://ind.nl" target="_blank" rel="noopener noreferrer" className="underline">
    IND
    </a>{" "}
    and{" "}
    <a
    href="https://www.rijksoverheid.nl/onderwerpen/werken-tijdens-studie"
    target="_blank"
    rel="noopener noreferrer"
    className="underline"
    >
    Rijksoverheid
    </a>
    .
   </p>

   <h2 id="contracts-pay">Contracts, pay, and allowances in Rotterdam</h2>
   <p>
    Most student jobs are part time, on call, or agency roles. Pay depends on your age, experience, and the sector agreement.
    Always check the contract and payslip for extras.
   </p>

   <h3>Contract types you will see</h3>
   <ul>
    <li>
    <strong>Part time</strong>: fixed weekly hours, predictable schedule
    </li>
    <li>
    <strong>On call</strong>: flexible shifts, ask about minimum hours and cancellation notice
    </li>
    <li>
    <strong>Agency</strong>: fast onboarding, check travel reimbursement and shift extras
    </li>
   </ul>

   <h3>Typical pay ranges (gross) for students</h3>
   <div className="overflow-x-auto rounded-2xl border bg-white">
    <table className="w-full text-left text-sm">
    <thead className="bg-slate-50">
     <tr>
     <th className="px-4 py-3">Sector</th>
     <th className="px-4 py-3">Hourly gross</th>
     <th className="px-4 py-3">Common extras</th>
     <th className="px-4 py-3">Notes</th>
     </tr>
    </thead>
    <tbody>
     <tr>
     <td className="px-4 py-3">Hospitality</td>
     <td className="px-4 py-3">€13 to €16</td>
     <td className="px-4 py-3">Tips, weekend</td>
     <td className="px-4 py-3">Busy areas hire fast</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Logistics and warehouse</td>
     <td className="px-4 py-3">€14 to €18</td>
     <td className="px-4 py-3">Evening, night, weekend</td>
     <td className="px-4 py-3">Port area roles often pay well</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Delivery</td>
     <td className="px-4 py-3">€13 to €17</td>
     <td className="px-4 py-3">Bonuses</td>
     <td className="px-4 py-3">Fast onboarding</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Events</td>
     <td className="px-4 py-3">€13 to €17 plus</td>
     <td className="px-4 py-3">Weekend, evening</td>
     <td className="px-4 py-3">Lead roles pay more</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Retail</td>
     <td className="px-4 py-3">€13 to €16</td>
     <td className="px-4 py-3">Sunday, holiday</td>
     <td className="px-4 py-3">Stable shifts</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Tutoring</td>
     <td className="px-4 py-3">€15 to €22</td>
     <td className="px-4 py-3">Flexible</td>
     <td className="px-4 py-3">Higher with specialization</td>
     </tr>
    </tbody>
    </table>
   </div>

   <ul>
    <li>
    Many employers add <strong>holiday pay (8%)</strong>.
    </li>
    <li>
    Some roles add premiums for late shifts and weekends.
    </li>
    <li>
    Travel reimbursement matters if you commute to Waalhaven or event locations.
    </li>
   </ul>

   <h2 id="neighborhoods">Neighborhoods and commute tips (match faster)</h2>
   <p>
    Short commutes help you keep a stable schedule. Mention the areas you can reach quickly in your first message.
   </p>
   <ul>
    <li>
    <strong>Centrum</strong>: hospitality, retail, events, busy venues
    </li>
    <li>
    <strong>Kralingen and EUR</strong>: cafés, tutoring, campus related work
    </li>
    <li>
    <strong>Zuid and Zuidplein</strong>: retail, events, good metro links
    </li>
    <li>
    <strong>Waalhaven and port area</strong>: logistics and warehouse shifts, often evenings
    </li>
   </ul>

   <h2 id="categories">Best categories for students in Rotterdam</h2>
   <ul>
    <li>
    <strong>Hospitality</strong>: fast hiring, tips, lots of weekend shifts{" "}
    <Link href="/categories/hospitality">(browse)</Link>
    </li>
    <li>
    <strong>Delivery</strong>: fast onboarding and flexible shifts{" "}
    <Link href="/categories/delivery">(browse)</Link>
    </li>
    <li>
    <strong>Logistics</strong>: structured schedules, often higher pay{" "}
    <Link href="/categories/fieldwork">(browse)</Link>
    </li>
    <li>
    <strong>Events</strong>: short contracts, busy periods{" "}
    <Link href="/categories/events">(browse)</Link>
    </li>
    <li>
    <strong>Tutoring</strong>: high hourly pay if you have strong subjects{" "}
    <Link href="/categories/tutoring">(browse)</Link>
    </li>
   </ul>

   <h2 id="where-to-look">Where to find jobs fast</h2>
   <ul>
    <li>
    <Link href="/jobs?city=Rotterdam">Student Jobs Rotterdam (all listings)</Link>
    </li>
    <li>
    <Link href="/jobs?city=Rotterdam&english=true">English friendly filter</Link>
    </li>
    <li>
    <Link href="/categories">Browse categories</Link>
    </li>
    <li>
    For internships or study related roles, check your university career channels and faculty boards.
    </li>
   </ul>

   <h2 id="templates">CV and message templates (copy paste)</h2>

   <div className="rounded-2xl border p-5 bg-white">
    <div className="font-semibold">Short application message</div>
    <p className="mt-2 text-sm text-slate-700">
    Keep it short. Lead with availability and start date.
    </p>
    <div className="mt-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-800">
    Hi, I am a student in Rotterdam and I am looking for part time work. I can work
    [days] and I am available [hours]. I can start on [date]. I speak [English] and
    [basic Dutch if applicable]. I live near [area] and can commute quickly. Can we
    schedule a short call or a trial shift?
    </div>
    <p className="mt-3 text-sm text-slate-600">
    Add one line on your CV: English C1, Dutch A2, Excel, customer service, barista, drivers license.
    </p>
   </div>

   <h2 id="schedule">Weekly schedule that works with classes</h2>
   <ul>
    <li>
    Two evening shifts on weekdays (logistics, retail, hospitality)
    </li>
    <li>
    One weekend shift (events, café, retail)
    </li>
    <li>
    Keep the same pattern each week, managers reward reliability with better shifts
    </li>
   </ul>

   <h2 id="admin">BSN, bank, payslips, taxes</h2>
   <ul>
    <li>
    <strong>BSN</strong>: needed for payroll, keep your appointment confirmation if you are waiting
    </li>
    <li>
    <strong>IBAN</strong>: Dutch bank account helps you get paid smoothly
    </li>
    <li>
    <strong>Payslips</strong>: check hours, gross, net, and extras each month
    </li>
    <li>
    <strong>Taxes</strong>: keep year statements, students often have refunds depending on income
    </li>
   </ul>

   <div className="rounded-2xl border p-5 bg-white">
    <div className="font-semibold text-lg">Apply now</div>
    <p className="mt-1">
    Start with <Link href="/jobs?city=Rotterdam">all Rotterdam jobs</Link>, then refine with{" "}
    <Link href="/jobs?city=Rotterdam&english=true">English friendly</Link>,{" "}
    <Link href="/jobs?city=Rotterdam&evening=true">evening</Link>, and{" "}
    <Link href="/jobs?city=Rotterdam&weekend=true">weekend</Link>.
    </p>
   </div>

   <h2 id="faq">FAQ</h2>

   <h3>Is Dutch required for student jobs in Rotterdam?</h3>
   <p>
    Not always. Many roles in hospitality, logistics, delivery, events, and tutoring can be English friendly.
    Retail often prefers basic Dutch.
   </p>

   <h3>How many hours can students work?</h3>
   <p>
    Many students target 8 to 20 hours per week. Extra limits can apply for Non EU students depending on residence status.
   </p>

   <h3>What is a good starting wage in Rotterdam?</h3>
   <p>
    Many student roles sit around €13 to €17 per hour gross, and tutoring can be €15 to €22. Extras and tips can increase your effective rate.
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
    "Student jobs in Rotterdam (2026): complete guide to permits, pay, contracts, neighborhoods",
    description:
    "Permits, contracts, pay ranges, neighborhoods, and a practical plan to land a student job in Rotterdam fast.",
    image: OG_IMAGE_URL,
    datePublished: PUBLISH_DATE,
    dateModified: MODIFIED_DATE,
    inLanguage: "en-NL",
    isAccessibleForFree: true,
    author: {
    "@type": "Organization",
    name: "Student Jobs Rotterdam",
    url: SITE,
    },
    publisher: {
    "@type": "Organization",
    name: "Student Jobs Rotterdam",
    url: SITE,
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
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: SITE + "/blog" },
    {
     "@type": "ListItem",
     position: 3,
     name: "Student jobs in Rotterdam: complete guide (2026)",
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
     name: "Is Dutch required for student jobs in Rotterdam?",
     acceptedAnswer: {
     "@type": "Answer",
     text:
      "Not always. Many roles in hospitality, logistics, delivery, events, and tutoring can be English friendly. Retail often prefers basic Dutch.",
     },
    },
    {
     "@type": "Question",
     name: "How many hours can students work?",
     acceptedAnswer: {
     "@type": "Answer",
     text:
      "Many students target 8 to 20 hours per week. Extra limits can apply for Non EU students depending on residence status.",
     },
    },
    {
     "@type": "Question",
     name: "What is a good starting wage in Rotterdam?",
     acceptedAnswer: {
     "@type": "Answer",
     text:
      "Many student roles sit around €13 to €17 per hour gross, and tutoring can be €15 to €22. Extras and tips can increase your effective rate.",
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
    name: "How to get a student job in Rotterdam fast",
    image: OG_IMAGE_URL,
    totalTime: "P7D",
    supply: [
    { "@type": "HowToSupply", name: "1 page CV (PDF)" },
    { "@type": "HowToSupply", name: "Availability summary" },
    { "@type": "HowToSupply", name: "ID, BSN, IBAN" },
    ],
    step: [
    {
     "@type": "HowToStep",
     name: "Pick categories",
     text:
     "Choose two or three categories that match your schedule and language, then focus for one week.",
    },
    {
     "@type": "HowToStep",
     name: "Apply daily",
     text:
     "Apply to real openings every day and keep your message short with availability and start date.",
    },
    {
     "@type": "HowToStep",
     name: "Follow up and stabilize your schedule",
     text:
     "Follow up the same day when possible and keep a consistent weekly pattern so managers can rely on you.",
    },
    ],
   }),
   }}
  />
  </div>
 </section>
 );
}

// src/app/part-time-jobs-rotterdam-students/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PUBLISH_DATE = "2026-02-02";
const MODIFIED_DATE = "2026-02-02";
const CANONICAL =
 "https://studentjobsrotterdam.nl/part-time-jobs-rotterdam-students";

// Use your local image from /public/blog/
const HERO_IMAGE_PATH = "/blog/rotterdam-bridge-photo.jpg";
const OG_IMAGE_URL = `https://studentjobsrotterdam.nl${HERO_IMAGE_PATH}`;

export const metadata: Metadata = {
 title:
 "Student part time jobs in Rotterdam (2026): well paid, English friendly, weekend shifts",
 description:
 "Find student part time jobs in Rotterdam fast. English friendly roles, evening and weekend shifts, no experience options, pay ranges, contract types, and quick filters to apply today.",
 keywords: [
 "student part time jobs rotterdam",
 "student jobs rotterdam",
 "part time jobs rotterdam students",
 "english speaking student jobs rotterdam",
 "weekend jobs rotterdam students",
 "evening jobs rotterdam students",
 "bijbaan rotterdam",
 ],
 alternates: {
 canonical: CANONICAL,
 languages: {
  "nl-NL": "https://studentjobsrotterdam.nl/studenten-bijbaan-rotterdam",
  "en-NL": CANONICAL,
 },
 },
 openGraph: {
 title:
  "Student part time jobs in Rotterdam (2026): well paid, English friendly, weekend shifts",
 description:
  "A practical guide with quick filters, pay ranges by sector, contract types, and live vacancies for students in Rotterdam.",
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
  alt: "Rotterdam Erasmus Bridge and skyline, student part time jobs guide",
  },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title:
  "Student part time jobs in Rotterdam (2026): well paid, English friendly, weekend shifts",
 description:
  "Quick filters, pay ranges, and live vacancies for student jobs in Rotterdam.",
 images: [OG_IMAGE_URL],
 },
 robots: { index: true, follow: true },
};

export default function PartTimeJobsRotterdamStudents() {
 return (
 <section className="section">
  <div className="mx-auto max-w-6xl">
  {/* HEADER */}
  <header className="max-w-3xl">
   <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
   Student part time jobs in Rotterdam: the practical guide (2026)
   </h1>

   <p className="mt-3 text-sm text-slate-600">
   By <span className="font-medium">Student Jobs Rotterdam</span> • Updated{" "}
   {new Date(MODIFIED_DATE).toLocaleDateString("en-NL", {
    year: "numeric",
    month: "long",
    day: "numeric",
   })}
   </p>

   {/* Language toggle */}
   <div className="mt-3">
   <Link
    href="/studenten-bijbaan-rotterdam"
    className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm underline hover:no-underline"
    aria-label="Lees in het Nederlands"
    data-ab="dutch-cta"
   >
    Lees in het Nederlands →
   </Link>
   </div>

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
   Rotterdam is one of the easiest Dutch cities to combine study and work. You can
   find English friendly part time jobs in hospitality, delivery, logistics, events,
   retail, tutoring, and customer support. Use the filters below to see live vacancies
   and apply fast.
   </p>

   {/* Quick filters */}
   <div className="mt-6 flex flex-wrap gap-2">
   <Link
    href="/jobs?city=Rotterdam&evening=true"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    Evening
   </Link>
   <Link
    href="/jobs?city=Rotterdam&weekend=true"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    Weekend
   </Link>
   <Link
    href="/jobs?city=Rotterdam&noExperience=true"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    No experience
   </Link>
   <Link
    href="/jobs?city=Rotterdam&english=true"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    English friendly
   </Link>
   <Link
    href="/jobs?city=Rotterdam"
    className="rounded-full border px-3 py-1 text-sm underline"
   >
    All vacancies in Rotterdam
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
    <a href="#where-to-find" className="underline">
     Where to find jobs fast
    </a>
    </li>
    <li>
    <a href="#english" className="underline">
     English speaking jobs
    </a>
    </li>
    <li>
    <a href="#best-categories" className="underline">
     Best categories for students
    </a>
    </li>
    <li>
    <a href="#schedules" className="underline">
     Weekend and evening schedules
    </a>
    </li>
    <li>
    <a href="#no-experience" className="underline">
     No experience roles
    </a>
    </li>
    <li>
    <a href="#pay" className="underline">
     Pay ranges table
    </a>
    </li>
    <li>
    <a href="#contracts" className="underline">
     Contract types
    </a>
    </li>
    <li>
    <a href="#non-eu" className="underline">
     Non EU students
    </a>
    </li>
    <li>
    <a href="#apply" className="underline">
     Application tips and CV
    </a>
    </li>
    <li>
    <a href="#live" className="underline">
     Live vacancies
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
    [&_a]:underline hover:[&_a]:no-underline
   "
   >
   <h2 id="where-to-find">
    Where to find student part time jobs fast in Rotterdam (areas that hire a lot)
   </h2>
   <p>
    You usually get hired faster when you can start nearby and show stable availability.
    Start with <Link href="/jobs?city=Rotterdam">all vacancies</Link> and focus on areas you can reach quickly by bike or metro.
   </p>
   <ul>
    <li>
    <strong>Kralingen and EUR</strong>: cafés, tutoring, campus related roles, barista shifts
    </li>
    <li>
    <strong>Centrum (Blaak, Beurs, Witte de With)</strong>: hospitality, retail, events, busy venues
    </li>
    <li>
    <strong>Zuid and Zuidplein</strong>: retail, customer support, weekend shifts
    </li>
    <li>
    <strong>Waalhaven and port area</strong>: logistics and warehouse roles, often evening shifts with extras
    </li>
   </ul>

   <h2 id="english">English speaking student jobs in Rotterdam</h2>
   <p>
    Rotterdam has many international teams. The easiest English friendly routes are delivery, logistics, hospitality, events, and some support roles.
    Start here:{" "}
    <Link href="/jobs?city=Rotterdam&english=true">English friendly vacancies</Link>.
   </p>

   <h2 id="best-categories">Best categories for students in Rotterdam</h2>
   <p>
    If you want fast replies, pick two or three categories and apply daily. These are popular choices for students:
   </p>
   <ul>
    <li>
    <strong>Delivery</strong>: fast onboarding and lots of shifts
    </li>
    <li>
    <strong>Hospitality</strong>: evenings and weekends, good for tips
    </li>
    <li>
    <strong>Logistics</strong>: structured schedules and steady pay
    </li>
    <li>
    <strong>Events</strong>: short contracts, busy periods, weekend work
    </li>
    <li>
    <strong>Retail</strong>: stable shifts, many locations
    </li>
    <li>
    <strong>Tutoring</strong>: higher pay if you have strong subjects
    </li>
   </ul>
   <p className="text-sm text-slate-600">
    Browse: <Link href="/categories">all categories</Link>
   </p>

   <h2 id="schedules">Weekend and evening schedules that fit classes</h2>
   <ul>
    <li>
    <strong>Evening shifts</strong> after 17:00 are common in logistics, events, and hospitality
    </li>
    <li>
    <strong>Weekend shifts</strong> help you work more hours without class conflicts
    </li>
    <li>
    Many employers add <strong>holiday pay (8%)</strong> and sometimes extras for late or weekend work
    </li>
   </ul>

   <h2 id="no-experience">No experience: 10 entry level student roles</h2>
   <ul>
    <li>Shelf stocker</li>
    <li>Dishwasher or kitchen helper</li>
    <li>Courier on bike or car</li>
    <li>Host or hostess</li>
    <li>Promo and flyer work</li>
    <li>Runner and service assistant</li>
    <li>Warehouse associate</li>
    <li>Cashier</li>
    <li>Data labeling remote</li>
    <li>Cleaning</li>
   </ul>

   <h2 id="pay">Hourly pay and tips: realistic ranges per sector (2026)</h2>
   <div className="overflow-x-auto rounded-2xl border bg-white">
    <table className="w-full text-left text-sm">
    <thead className="bg-slate-50">
     <tr>
     <th className="px-4 py-3">Sector</th>
     <th className="px-4 py-3">Hourly gross</th>
     <th className="px-4 py-3">Common extras</th>
     <th className="px-4 py-3">Tips or bonus</th>
     </tr>
    </thead>
    <tbody>
     <tr>
     <td className="px-4 py-3">Hospitality (barista, service)</td>
     <td className="px-4 py-3">€13 to €16</td>
     <td className="px-4 py-3">Weekend, evening</td>
     <td className="px-4 py-3">Often tips</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Logistics and warehouse</td>
     <td className="px-4 py-3">€14 to €18</td>
     <td className="px-4 py-3">Evening, night, weekend</td>
     <td className="px-4 py-3">Sometimes bonus</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Delivery</td>
     <td className="px-4 py-3">€13 to €17</td>
     <td className="px-4 py-3">Weekend, weather incentives</td>
     <td className="px-4 py-3">Per ride or bonus</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Events</td>
     <td className="px-4 py-3">€13 to €17 plus</td>
     <td className="px-4 py-3">Weekend, evening</td>
     <td className="px-4 py-3">Lead premium</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Retail</td>
     <td className="px-4 py-3">€13 to €16</td>
     <td className="px-4 py-3">Sunday, holiday</td>
     <td className="px-4 py-3">Staff discount</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Customer support</td>
     <td className="px-4 py-3">€14 to €17</td>
     <td className="px-4 py-3">Evening, weekend</td>
     <td className="px-4 py-3">KPI bonus</td>
     </tr>
     <tr>
     <td className="px-4 py-3">Tutoring</td>
     <td className="px-4 py-3">€15 to €22</td>
     <td className="px-4 py-3">Often flexible</td>
     <td className="px-4 py-3">Higher with specialization</td>
     </tr>
    </tbody>
    </table>
   </div>
   <p className="text-sm text-slate-600">
    Pay depends on age, experience, and collective agreements. Check your payslip for extras and holiday pay.
   </p>

   <h2 id="contracts">Contract types that students see most</h2>
   <ul>
    <li>
    <strong>Part time contract</strong>: fixed weekly hours, predictable schedule
    </li>
    <li>
    <strong>On call contract</strong>: flexible scheduling, ask about minimum hours and notice period
    </li>
    <li>
    <strong>Agency contract</strong>: quick start, check travel reimbursement and pay extras
    </li>
   </ul>

   <h2 id="non-eu">Non EU students: hours limits and work permission</h2>
   <p>
    Non EU students may have limits during the academic year and may need a work permit arranged by the employer or agency.
    Always confirm your personal situation and the latest rules at{" "}
    <a
    href="https://ind.nl"
    target="_blank"
    rel="noopener noreferrer"
    className="underline"
    >
    IND
    </a>{" "}
    or{" "}
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

   <h2 id="apply">Application tips and free CV template</h2>
   <ul>
    <li>
    Keep your CV to <strong>one page</strong> and add an availability block
    </li>
    <li>
    Apply <strong>in the morning</strong> and follow up the same day
    </li>
    <li>
    Mention areas you can reach quickly: Centrum, Kralingen, Zuid, Waalhaven
    </li>
   </ul>

   <div className="rounded-2xl border p-5 bg-white">
    <div className="font-semibold text-lg">Ready to apply?</div>
    <p className="mt-1">
    See <Link href="/jobs?city=Rotterdam">all vacancies</Link>,{" "}
    <Link href="/jobs?city=Rotterdam&english=true">English friendly</Link>, or{" "}
    <Link href="/categories">browse categories</Link>. Hiring?{" "}
    <Link href="/employers">Feature your job</Link>.
    </p>
    <p className="mt-2 text-sm">
    Free CV template: <Link href="/assets/cv-template-student.pdf">download here</Link>.
    </p>
   </div>

   <h2 id="live">Live vacancies in Rotterdam</h2>
   <p className="text-sm text-slate-600">
    Use filters:{" "}
    <Link href="/jobs?city=Rotterdam&evening=true">evening</Link>,{" "}
    <Link href="/jobs?city=Rotterdam&weekend=true">weekend</Link>,{" "}
    <Link href="/jobs?city=Rotterdam&noExperience=true">no experience</Link>,{" "}
    <Link href="/jobs?city=Rotterdam&english=true">English friendly</Link>.
   </p>
   <div className="rounded-2xl border bg-white p-4">
    <Link href="/jobs?city=Rotterdam" className="underline">
    Open live vacancies for Rotterdam
    </Link>
    <div className="mt-3 flex flex-wrap gap-2">
    <Link
     href="/categories/hospitality"
     className="rounded-full border px-3 py-1 text-sm underline"
    >
     Hospitality
    </Link>
    <Link
     href="/categories/delivery"
     className="rounded-full border px-3 py-1 text-sm underline"
    >
     Delivery and logistics
    </Link>
    <Link
     href="/categories/retail"
     className="rounded-full border px-3 py-1 text-sm underline"
    >
     Retail
    </Link>
    <Link
     href="/categories/events"
     className="rounded-full border px-3 py-1 text-sm underline"
    >
     Events
    </Link>
    <Link
     href="/categories/support"
     className="rounded-full border px-3 py-1 text-sm underline"
    >
     Customer support
    </Link>
    <Link
     href="/categories/tutoring"
     className="rounded-full border px-3 py-1 text-sm underline"
    >
     Tutoring
    </Link>
    </div>
   </div>

   <h2 id="faq">FAQ</h2>
   <h3>Are there English speaking part time jobs in Rotterdam?</h3>
   <p>
    Yes. Delivery, logistics, hospitality, events, and some support roles are often English friendly.
    Start with <Link href="/jobs?city=Rotterdam&english=true">English friendly vacancies</Link>.
   </p>

   <h3>How much can a student earn per hour in 2026?</h3>
   <p>
    Many roles sit around <strong>€13 to €17 per hour</strong> and tutoring can be <strong>€15 to €22</strong>.
    Tips and extras can increase your hourly rate.
   </p>

   <h3>Which areas are easiest for students?</h3>
   <p>
    Kralingen and EUR, Centrum, Zuid, and Waalhaven are practical because you can commute fast and there are many employers.
   </p>
   </article>
  </div>

  {/* JSON-LD: Article + Breadcrumb + FAQ */}
  <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{
   __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
    "Student part time jobs in Rotterdam (2026): well paid, English friendly, weekend shifts",
    description:
    "A practical guide to student part time jobs in Rotterdam with quick filters, pay ranges, contract types, and live vacancies.",
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
    url: "https://studentjobsrotterdam.nl/",
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
     name: "Home",
     item: "https://studentjobsrotterdam.nl/",
    },
    {
     "@type": "ListItem",
     position: 2,
     name: "Student part time jobs in Rotterdam",
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
     name: "Are there English speaking part time jobs in Rotterdam?",
     acceptedAnswer: {
     "@type": "Answer",
     text:
      "Yes. Delivery, logistics, hospitality, events, and some support roles are often English friendly. Use an English friendly filter to match faster.",
     },
    },
    {
     "@type": "Question",
     name: "How much can a student earn per hour in 2026?",
     acceptedAnswer: {
     "@type": "Answer",
     text:
      "Many student roles are around €13 to €17 per hour and tutoring can be €15 to €22. Tips and extras can increase the hourly rate.",
     },
    },
    {
     "@type": "Question",
     name: "Which areas are easiest for students?",
     acceptedAnswer: {
     "@type": "Answer",
     text:
      "Kralingen and EUR, Centrum, Zuid, and Waalhaven are practical because commutes are fast and there are many employers.",
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

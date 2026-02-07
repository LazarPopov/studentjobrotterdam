// src/app/studenten-bijbaan-rotterdam/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://studentjobsrotterdam.nl";

const PUBLISH_DATE = "2026-10-02";
const MODIFIED_DATE = "2026-10-02";
const CANONICAL = `${SITE}/studenten-bijbaan-rotterdam`;

// Use your real local file in /public/blog/
const HERO_IMAGE_PATH = "/blog/rotterdam-bridge-photo.jpg";
const OG_IMAGE_URL = `${SITE}${HERO_IMAGE_PATH}`;

export const metadata: Metadata = {
  title: "Studenten bijbaan Rotterdam (2026): vacatures, uurloon, tips, weekend en avond",
  description:
    "Vind snel een studenten bijbaan in Rotterdam in 2026. Filters voor avond en weekend, Engelstalige jobs, zonder ervaring, uurloon per sector, contracten en live vacatures.",
  keywords: [
    "studenten bijbaan rotterdam",
    "bijbaan rotterdam",
    "bijbaantje rotterdam",
    "studentenbaan rotterdam",
    "bijbaan rotterdam engels",
    "engels bijbaan rotterdam",
    "weekend bijbaan rotterdam",
    "avond bijbaan rotterdam",
    "bijbaan zonder ervaring rotterdam",
    "parttime vacatures rotterdam",
    "student jobs rotterdam",
    "bijbaan kralingen",
    "bijbaan centrum rotterdam",
    "bijbaan zuidplein",
    "bijbaan waalhaven",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Studenten bijbaan Rotterdam (2026): vacatures, uurloon, tips, weekend en avond",
    description:
      "Complete gids voor studenten bijbanen in Rotterdam met snelle filters, uurloon tabel, contractvormen en live vacatures.",
    url: CANONICAL,
    type: "article",
    locale: "nl_NL",
    siteName: "Student Jobs Rotterdam",
    publishedTime: PUBLISH_DATE,
    modifiedTime: MODIFIED_DATE,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Rotterdam Erasmusbrug en skyline, studenten bijbaan gids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studenten bijbaan Rotterdam (2026): vacatures, uurloon, tips",
    description:
      "Waar vind je snel een bijbaan in Rotterdam? Bekijk filters, uurloon tabel en live vacatures.",
    images: [OG_IMAGE_URL],
  },
  robots: { index: true, follow: true },
};

export default function StudentenBijbaanRotterdam() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Studenten bijbaan in Rotterdam: de ultieme gids (2026)
          </h1>

          <p className="mt-3 text-sm text-slate-600">
            Door <span className="font-medium">Student Jobs Rotterdam</span> • Bijgewerkt{" "}
            {new Date(MODIFIED_DATE).toLocaleDateString("nl-NL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Language toggle */}
          <div className="mt-3">
            <Link
              href="/blog/student-jobs-rotterdam-complete-guide-2026"
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm underline hover:no-underline"
              aria-label="Read in English"
              data-ab="english-cta"
            >
              Read in English →
            </Link>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-white">
            <Image
              src={HERO_IMAGE_PATH}
              alt="Studenten bij de Erasmusbrug in Rotterdam op zoek naar een bijbaan"
              width={1280}
              height={720}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Quick filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/jobs?city=Rotterdam&evening=true"
              className="rounded-full border px-3 py-1 text-sm underline"
            >
              Avond
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
              Zonder ervaring
            </Link>
            <Link
              href="/jobs?city=Rotterdam&english=true"
              className="rounded-full border px-3 py-1 text-sm underline"
            >
              Engels
            </Link>
            <Link
              href="/jobs?city=Rotterdam"
              className="rounded-full border px-3 py-1 text-sm underline"
            >
              Alle vacatures (Rotterdam)
            </Link>
          </div>

          <p className="mt-5 text-slate-800 leading-relaxed">
            Wil je snel een bijbaan vinden in Rotterdam? De meeste studenten matchen het snelst wanneer ze
            duidelijk zijn over (1) beschikbaarheid, (2) taal, en (3) hoe snel ze op locatie kunnen zijn.
            Hieronder vind je een praktische aanpak met wijken, sectoren, uurloon, contracten en live filters.
          </p>
        </header>

        {/* CONTENT + TOC */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* TOC */}
          <nav
            aria-label="Inhoud"
            className="
              order-1 lg:order-2
              lg:sticky lg:top-24 h-max
              rounded-2xl border p-4 bg-slate-50
              text-sm text-slate-700
            "
          >
            <div className="font-semibold">Op deze pagina</div>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#waar-vinden" className="underline">
                  Waar vind je snel een bijbaan (wijken)
                </a>
              </li>
              <li>
                <a href="#engels" className="underline">
                  Engelstalige bijbanen
                </a>
              </li>
              <li>
                <a href="#roosters" className="underline">
                  Weekend en avond
                </a>
              </li>
              <li>
                <a href="#zonder-ervaring" className="underline">
                  Zonder ervaring: 10 instapfuncties
                </a>
              </li>
              <li>
                <a href="#uurloon" className="underline">
                  Uurloon en fooi (tabel)
                </a>
              </li>
              <li>
                <a href="#contracten" className="underline">
                  Contractvormen
                </a>
              </li>
              <li>
                <a href="#non-eu" className="underline">
                  Non EU studenten
                </a>
              </li>
              <li>
                <a href="#sollicitatie" className="underline">
                  Sollicitatietips en gratis CV
                </a>
              </li>
              <li>
                <a href="#live-vacatures" className="underline">
                  Live vacatures (Rotterdam)
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
              [&_a]:underline hover:[&_a]:no-underline
            "
          >
            <h2 id="waar-vinden">
              Waar vind je snel een bijbaan in Rotterdam (Kralingen, Centrum, Zuidplein, Waalhaven)
            </h2>
            <p>
              Je matcht sneller wanneer je dichtbij kunt werken. Begin met{" "}
              <Link href="/jobs?city=Rotterdam">alle vacatures</Link> en kies een wijk of cluster:
            </p>
            <ul>
              <li>
                <strong>Kralingen en EUR</strong>: cafés, barista, bijles, campus nabij.
              </li>
              <li>
                <strong>Centrum</strong>: horeca, retail, events, veel doorloop en veel shifts.
              </li>
              <li>
                <strong>Zuidplein en Zuid</strong>: retail, events, klantenservice, goede metro verbinding.
              </li>
              <li>
                <strong>Waalhaven en havengebied</strong>: logistiek, magazijn, vaak avond en nachtdiensten.
              </li>
            </ul>

            <h2 id="engels">Engelstalige bijbanen in Rotterdam</h2>
            <p>
              In Rotterdam zijn veel teams Engelstalig, vooral in horeca, bezorging, logistiek,
              internationale retail en customer support. Start met{" "}
              <Link href="/jobs?city=Rotterdam&english=true">Engels vriendelijke vacatures</Link>.
            </p>
            <p className="text-sm text-slate-600">
              Tip: als je ook basis Nederlands hebt, zet het op je CV (A2). Dat opent extra retail en balie functies.
            </p>

            <h2 id="roosters">Weekend en avond: het makkelijkste rooster naast je studie</h2>
            <ul>
              <li>
                <strong>Avondshifts</strong> (na 17:00) in logistiek, horeca en events.
              </li>
              <li>
                <strong>Weekend</strong> is ideaal als je doordeweeks college hebt.
              </li>
              <li>
                Let op <strong>toeslagen</strong> (avond, nacht, weekend) en <strong>vakantiegeld (8%)</strong>.
              </li>
            </ul>

            <h2 id="zonder-ervaring">Zonder ervaring: 10 instapfuncties die snel aannemen</h2>
            <ul>
              <li>Vakkenvuller</li>
              <li>Afwas en keukenhulp</li>
              <li>Bezorger (fiets of auto)</li>
              <li>Host of hostess</li>
              <li>Promotie en flyerwerk</li>
              <li>Runner en bediening</li>
              <li>Magazijnmedewerker</li>
              <li>Kassamedewerker</li>
              <li>Schoonmaak</li>
              <li>Data labeling (remote, als je dat soort werk zoekt)</li>
            </ul>
            <p>
              Filter meteen:{" "}
              <Link href="/jobs?city=Rotterdam&noExperience=true">bijbaan zonder ervaring</Link>.
            </p>

            <h2 id="uurloon">Uurloon in Rotterdam (indicatie) en fooi</h2>
            <div className="overflow-x-auto rounded-2xl border bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Sector</th>
                    <th className="px-4 py-3">Uurloon bruto</th>
                    <th className="px-4 py-3">Toeslagen</th>
                    <th className="px-4 py-3">Fooi of bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3">Horeca (barista, bediening)</td>
                    <td className="px-4 py-3">€13 tot €16</td>
                    <td className="px-4 py-3">Weekend en avond</td>
                    <td className="px-4 py-3">Fooi (wisselend)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Logistiek en magazijn</td>
                    <td className="px-4 py-3">€14 tot €18</td>
                    <td className="px-4 py-3">Avond, nacht, weekend</td>
                    <td className="px-4 py-3">Soms bonus</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Bezorging</td>
                    <td className="px-4 py-3">€13 tot €17</td>
                    <td className="px-4 py-3">Weekend, weer</td>
                    <td className="px-4 py-3">Per rit of bonus</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Events</td>
                    <td className="px-4 py-3">€13 tot €17 plus</td>
                    <td className="px-4 py-3">Weekend en avond</td>
                    <td className="px-4 py-3">Lead toeslag</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Retail</td>
                    <td className="px-4 py-3">€13 tot €16</td>
                    <td className="px-4 py-3">Zondag, feestdagen</td>
                    <td className="px-4 py-3">Personeelskorting</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Klantenservice</td>
                    <td className="px-4 py-3">€14 tot €17</td>
                    <td className="px-4 py-3">Avond en weekend</td>
                    <td className="px-4 py-3">KPI bonus</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Bijles</td>
                    <td className="px-4 py-3">€15 tot €22</td>
                    <td className="px-4 py-3">Geen</td>
                    <td className="px-4 py-3">Meer bij specialisatie</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              Indicatief. Exacte bedragen verschillen per leeftijd, ervaring, cao en toeslagen.
            </p>

            <h2 id="contracten">Contractvormen: part time, oproep, min max, uitzend</h2>
            <ul>
              <li>
                <strong>Part time</strong>: vaste uren per week, voorspelbaar.
              </li>
              <li>
                <strong>Oproep of min max</strong>: flexibeler, vraag naar minimumuren en hoe laat shifts worden gepland.
              </li>
              <li>
                <strong>Uitzend</strong>: vaak snel starten, check reiskosten en toeslagen.
              </li>
            </ul>

            <h2 id="non-eu">Non EU studenten: uren en TWV</h2>
            <p>
              Non EU studenten hebben vaak extra regels rond uren en een TWV via werkgever of uitzendbureau.
              Check altijd de actuele regels bij{" "}
              <a href="https://ind.nl" target="_blank" rel="noopener noreferrer" className="underline">
                IND
              </a>{" "}
              en{" "}
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

            <h2 id="sollicitatie">Sollicitatietips (sneller reply) en gratis CV template</h2>
            <ul>
              <li>
                Zet je <strong>beschikbaarheid</strong> in de eerste zin en noem je <strong>startdatum</strong>.
              </li>
              <li>
                Noem de <strong>wijken</strong> die je snel bereikt (bijvoorbeeld Kralingen, Centrum, Zuidplein).
              </li>
              <li>
                Houd je CV op <strong>1 pagina</strong> met een korte skills regel (Engels, Nederlands niveau, barista, Excel).
              </li>
            </ul>

            <div className="rounded-2xl border p-5 bg-white">
              <div className="font-semibold text-lg">Klaar om te solliciteren?</div>
              <p className="mt-1">
                Ga naar <Link href="/jobs?city=Rotterdam">alle vacatures</Link>,{" "}
                <Link href="/jobs?city=Rotterdam&english=true">Engels vriendelijk</Link>, of{" "}
                <Link href="/categories">categorieën</Link>. Werkgever?{" "}
                <Link href="/employers">Adverteer je vacature</Link>.
              </p>
              <p className="mt-2 text-sm">
                Gratis CV template: <Link href="/assets/cv-template-student.pdf">download hier</Link>.
              </p>
            </div>

            <h2 id="live-vacatures">Live vacatures in Rotterdam</h2>
            <p className="text-sm text-slate-600">
              Snelle filters:{" "}
              <Link href="/jobs?city=Rotterdam&evening=true">avond</Link>,{" "}
              <Link href="/jobs?city=Rotterdam&weekend=true">weekend</Link>,{" "}
              <Link href="/jobs?city=Rotterdam&noExperience=true">zonder ervaring</Link>,{" "}
              <Link href="/jobs?city=Rotterdam&english=true">Engels</Link>.
            </p>

            <div className="rounded-2xl border bg-white p-4">
              <Link href="/jobs?city=Rotterdam" className="underline">
                Open live vacatures voor Rotterdam
              </Link>

              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href="/categories/hospitality"
                  className="rounded-full border px-3 py-1 text-sm underline"
                >
                  Horeca
                </Link>
                <Link
                  href="/categories/delivery"
                  className="rounded-full border px-3 py-1 text-sm underline"
                >
                  Bezorging
                </Link>
                <Link
                  href="/categories/events"
                  className="rounded-full border px-3 py-1 text-sm underline"
                >
                  Events
                </Link>
                <Link
                  href="/categories/retail"
                  className="rounded-full border px-3 py-1 text-sm underline"
                >
                  Retail
                </Link>
                <Link
                  href="/categories/support"
                  className="rounded-full border px-3 py-1 text-sm underline"
                >
                  Klantenservice
                </Link>
                <Link
                  href="/categories/tutoring"
                  className="rounded-full border px-3 py-1 text-sm underline"
                >
                  Bijles
                </Link>
              </div>
            </div>

            <h2 id="faq">FAQ</h2>

            <h3>Hoeveel uur werken studenten gemiddeld?</h3>
            <p>
              Veel studenten werken 8 tot 20 uur per week. Dat is meestal haalbaar naast college.
              Voor Non EU studenten kunnen extra beperkingen gelden.
            </p>

            <h3>Zijn er genoeg Engelstalige bijbanen in Rotterdam?</h3>
            <p>
              Ja. Vooral in horeca, delivery, logistiek, events en klantenservice. Start met{" "}
              <Link href="/jobs?city=Rotterdam&english=true">Engels vriendelijke vacatures</Link>.
            </p>

            <h3>Wat is een realistisch uurloon?</h3>
            <p>
              Vaak €13 tot €17 per uur bruto in horeca, retail en logistiek. Bijles kan hoger uitvallen.
              Toeslagen en fooi kunnen je effectieve uurloon verhogen.
            </p>

            <h3>Welke wijken zijn handig voor snelle shifts?</h3>
            <p>
              Kralingen en EUR, Centrum, Zuidplein en het havengebied rond Waalhaven (logistiek).
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
                "Studenten bijbaan Rotterdam (2026): vacatures, uurloon, tips, weekend en avond",
              description:
                "Complete gids voor een studenten bijbaan in Rotterdam met snelle filters, uurloon tabel, contractvormen en live vacatures.",
              image: OG_IMAGE_URL,
              datePublished: PUBLISH_DATE,
              dateModified: MODIFIED_DATE,
              inLanguage: "nl-NL",
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
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Studenten bijbaan Rotterdam",
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
                  name: "Hoeveel uur werken studenten gemiddeld?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Veel studenten werken 8 tot 20 uur per week. Voor Non EU studenten kunnen extra beperkingen gelden afhankelijk van verblijfsstatus.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Zijn er genoeg Engelstalige bijbanen in Rotterdam?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja. Vooral in horeca, bezorging, logistiek, events en klantenservice. Filter op Engels vriendelijke vacatures om sneller te matchen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wat is een realistisch uurloon voor een bijbaan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Vaak €13 tot €17 per uur bruto in horeca, retail en logistiek. Bijles kan hoger uitvallen. Toeslagen en fooi kunnen je effectieve uurloon verhogen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welke wijken zijn handig voor snelle shifts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Kralingen en EUR, Centrum, Zuidplein en het havengebied rond Waalhaven (logistiek) zijn populair omdat er veel banen zijn en je vaak snel kunt starten.",
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

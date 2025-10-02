// src/app/employers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton"; 

export const metadata: Metadata = {
  title: "Are you a business? Feature your job | Student Jobs Rotterdam",
  description:
    "Hire students in Rotterdam. Feature your job on the homepage, category pages, and our weekly newsletter.",
  alternates: { canonical: "https://studentjobsrotterdam.nl/employers" },
};

const CATEGORIES = [
  { key: "hospitality", label: "Hospitality" },
  { key: "retail", label: "Retail" },
  { key: "delivery", label: "Delivery" },
  { key: "logistics", label: "Logistics" },
  { key: "tutoring", label: "Tutoring" },
  { key: "events", label: "Events" },
  { key: "sales", label: "Sales" },
  { key: "fieldwork", label: "Fieldwork" },
];

const EMPLOYMENT = [
  "PART_TIME",
  "FULL_TIME",
  "CONTRACTOR",
  "TEMPORARY",
  "INTERN",
  "VOLUNTEER",
] as const;

export default function EmployersPage() {
  return (
    <>
      {/* JSON-LD: Organization + ContactPoint */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Student Jobs Rotterdam",
            url: "https://studentjobsrotterdam.nl/",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "info@studentjobsrotterdam.nl",
              areaServed: "NL",
              availableLanguage: ["en", "nl"],
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="section">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Are you a business? Feature your job
            </h1>
            <BackButton /> {/* ← back button */}
          </div>
          <p className="mt-3 text-lg text-slate-700">
            Reach active students in Rotterdam. Get qualified applicants fast via homepage & category placement, plus our weekly newsletter.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#submit" className="btn btn-primary">List a job</a>
          </div>
        </div>
      </section>

      {/* Why list */}
      <section className="section-alt">
        <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-3">
          <div className="card">
            <div className="text-lg font-semibold">Rotterdam-only audience</div>
            <p className="mt-2 text-slate-700">Local students searching by neighborhood & category.</p>
          </div>
          <div className="card">
            <div className="text-lg font-semibold">Featured placements</div>
            <p className="mt-2 text-slate-700">Homepage + category highlights for maximum visibility.</p>
          </div>
          <div className="card">
            <div className="text-lg font-semibold">Fast applications</div>
            <p className="mt-2 text-slate-700">Direct apply or link out to your ATS/website.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-3">
          <div className="card">
            <div className="text-sm text-slate-600">Basic</div>
            <div className="mt-1 text-2xl font-semibold">Free</div>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              <li>• Standard listing for 30 days</li>
              <li>• Appears in category & search</li>
            </ul>
          </div>
          <div className="card border-brand-600">
            <div className="text-sm text-slate-600">Featured</div>
            <div className="mt-1 text-2xl font-semibold">Contact</div>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              <li>• Homepage featured slot</li>
              <li>• Newsletter inclusion</li>
              <li>• Priority moderation</li>
            </ul>
          </div>
          <div className="card">
            <div className="text-sm text-slate-600">Bulk</div>
            <div className="mt-1 text-2xl font-semibold">Custom</div>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              <li>• Multiple roles</li>
              <li>• Monthly invoicing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Submit form */}
      <section id="submit" className="section-alt">
        <div className="mx-auto max-w-3xl card">
          <h2 className="text-2xl md:text-3xl font-semibold">Submit your job</h2>
          <p className="mt-2 text-slate-700 text-sm">
            We review every role before it goes live (usually same day).
          </p>

          <form action="/api/employer-lead" method="POST" className="mt-6 grid gap-4">
            {/* spam honeypot */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Company</label>
                <input name="company" required className="border rounded-xl px-4 py-3" placeholder="Your company" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Contact name</label>
                <input name="name" required className="border rounded-xl px-4 py-3" placeholder="Full name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Email</label>
                <input name="email" type="email" required className="border rounded-xl px-4 py-3" placeholder="you@company.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Phone (optional)</label>
                <input name="phone" className="border rounded-xl px-4 py-3" placeholder="+31 ..." />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Job title</label>
                <input name="title" required className="border rounded-xl px-4 py-3" placeholder="e.g., Barista (Part-Time)" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Employment type</label>
                <select name="employmentType" required className="border rounded-xl px-4 py-3">
                  {EMPLOYMENT.map((e) => (
                    <option key={e} value={e}>{e.replaceAll("_", " ")}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Category</label>
                <select name="category" required className="border rounded-xl px-4 py-3">
                  {CATEGORIES.map((c) => (
                    <option key={c.key} value={c.key}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">City</label>
                <input name="city" defaultValue="Rotterdam" className="border rounded-xl px-4 py-3" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Area / neighborhood (optional)</label>
                <input name="area" className="border rounded-xl px-4 py-3" placeholder="Kralingen, Centrum, ..." />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Pay (min €/h)</label>
                <input name="baseSalaryMin" type="number" step="0.01" className="border rounded-xl px-4 py-3" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Pay (max €/h)</label>
                <input name="baseSalaryMax" type="number" step="0.01" className="border rounded-xl px-4 py-3" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">External apply URL (optional)</label>
                <input name="externalUrl" className="border rounded-xl px-4 py-3" placeholder="https://…" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Logo URL (optional)</label>
                <input name="logoUrl" className="border rounded-xl px-4 py-3" placeholder="/logos/company.png or https://…" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Logo alt text</label>
                <input name="logoAlt" className="border rounded-xl px-4 py-3" placeholder="Company logo" />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Job description</label>
              <textarea
                name="description"
                required
                rows={6}
                className="border rounded-xl px-4 py-3"
                placeholder="Responsibilities, hours, requirements, how to apply…"
              />
              <p className="text-xs text-slate-500">
                You can paste plain text. We’ll format it when publishing.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input id="englishFriendly" type="checkbox" name="englishFriendly" className="h-4 w-4" />
              <label htmlFor="englishFriendly" className="text-sm">English-friendly role</label>
            </div>

            <div className="mt-2">
              <button className="btn btn-primary" type="submit">Submit job</button>
              <span className="ml-3 text-xs text-slate-500">
                By submitting you agree to our publishing guidelines.
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ for employers</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="card">
              <div className="font-semibold">How fast will my job go live?</div>
              <p className="mt-2 text-sm text-slate-700">Most roles are reviewed same day. Featured listings are prioritized.</p>
            </div>
            <div className="card">
              <div className="font-semibold">Can I link to my own site?</div>
              <p className="mt-2 text-sm text-slate-700">Yes. Add an external apply URL and candidates will go directly to your website or ATS.</p>
            </div>
            <div className="card">
              <div className="font-semibold">Do you screen candidates?</div>
              <p className="mt-2 text-sm text-slate-700">We publish the role and route applications to you. On request we can pre-filter basic criteria.</p>
            </div>
            <div className="card">
              <div className="font-semibold">How long does a listing run?</div>
              <p className="mt-2 text-sm text-slate-700">Standard listings run 30 days. You can request an extension anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// src/app/employers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import EmployerForm from "./EmployerForm";

export const metadata: Metadata = {
  title: "Are you a business? Feature your job | Student Jobs Rotterdam",
  description:
    "Hire students in Rotterdam. Feature your job on the homepage, category pages, and our weekly newsletter.",
  alternates: { canonical: "https://studentjobsrotterdam.nl/employers" },
};

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
          <EmployerForm />
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

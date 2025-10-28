// src/components/FeaturedJobsAccordion.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

type Job = {
  slug: string;
  externalUrl?: string;
  logoUrl?: string;
  logoAlt?: string;
  orgName?: string;
  title: string;
  shortDescrition?: string; // (keep your original key)
  descriptionHtml?: string; // long HTML shown when expanded
  area?: string;
  englishFriendly?: boolean;
  DUO?: boolean;
};

export default function FeaturedJobsAccordion({ featuredJobs }: { featuredJobs: Job[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const uid = useId();

  const handleToggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
    // Smoothly bring the opened panel into view on small screens
    if (openSlug !== slug && typeof window !== "undefined") {
      const el = document.getElementById(`${uid}-${slug}-panel`);
      setTimeout(() => el?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
    }
  };

  return (
    // Mobile: single column grid.
    // md+ : masonry via CSS columns so expanded cards don't stretch siblings.
    <div className="mt-4 md:mt-6 grid grid-cols-1 gap-4 md:block md:columns-2 lg:columns-3 md:[column-gap:1rem] lg:[column-gap:1.25rem]">
      {featuredJobs.map((job) => {
        const isOpen = openSlug === job.slug;
        const panelId = `${uid}-${job.slug}-panel`;

        return (
          <div
            key={job.slug}
            className={`mb-4 break-inside-avoid rounded-2xl bg-white/95 backdrop-blur border border-white/40 p-5 shadow-sm transition ${
              isOpen ? "shadow-md" : "hover:shadow-md"
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative h-10 w-10 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0">
                  {job.logoUrl ? (
                    <Image
                      src={job.logoUrl}
                      alt={job.logoAlt || `${job.orgName ?? "Company"} logo`}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-xs text-slate-500">
                      {job.orgName?.[0] ?? "•"}
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-lg font-semibold truncate">{job.title}</div>
                  <div className="text-slate-600 truncate">{job.orgName}</div>
                </div>
              </div>
              <div className="text-xs font-medium text-emerald-700 shrink-0">Hiring now</div>
            </div>

            {/* Always-visible short description */}
            {job.shortDescrition && (
              <p className="mt-3 text-sm text-slate-700 line-clamp-2">{job.shortDescrition}</p>
            )}

            {/* Meta chips */}
            <div className="mt-3 text-xs text-slate-700 flex flex-wrap items-center gap-2">
              {job.area && <span>{job.area}</span>}
              {job.englishFriendly && (
                <span className="inline-flex items-center rounded-full border px-2 py-0.5">
                  English-friendly
                </span>
              )}
            {job.DUO && (
                <span className="inline-flex items-center rounded-full border px-2 py-0.5">
                  Works with DUO
                </span>
              )}
            </div>

            {/* Toggle */}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => handleToggle(job.slug)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="text-sm underline underline-offset-2"
              >
                {isOpen ? "Hide details" : "Learn more"}
              </button>
            </div>

            {/* Expanded panel */}
            {isOpen && (
              <div id={panelId} role="region" className="mt-4">
                <hr className="border-slate-200 mb-3" />
                {job.descriptionHtml ? (
                  <div
                    className="prose prose-sm max-w-none text-slate-800"
                    dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
                  />
                ) : null}

                {/* Sticky apply for long content */}
                <div className="sticky bottom-0 mt-4 pt-3 bg-white/90 backdrop-blur">
                  {job.externalUrl ? (
                    <a
                      href={job.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2 border bg-black text-white text-sm"
                    >
                      Apply
                    </a>
                  ) : (
                    <Link
                      href={`/jobs/${job.slug}`}
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2 border bg-black text-white text-sm"
                    >
                      Apply
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

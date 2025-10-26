// src/components/JobPostingJsonLd.tsx
import React from "react";
import type { JobRecord } from "@/data/jobs";

function asText(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function salaryBlock(job: JobRecord) {
  if (!job.currency || (!job.baseSalaryMin && !job.baseSalaryMax)) return undefined;
  const value: Record<string, any> = { "@type": "QuantitativeValue", unitText: job.payUnit || "HOUR" };
  if (typeof job.baseSalaryMin === "number") value.minValue = job.baseSalaryMin;
  if (typeof job.baseSalaryMax === "number") value.maxValue = job.baseSalaryMax;
  if (!value.minValue && value.maxValue) value.value = value.maxValue; // single value fallback
  return { "@type": "MonetaryAmount", currency: job.currency, value };
}

export default function JobPostingJsonLd({
  job,
  canonicalUrl,
}: {
  job: JobRecord;
  canonicalUrl: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: asText(job.descriptionHtml || ""),
    datePosted: job.datePosted,
    ...(job.validThrough ? { validThrough: job.validThrough } : {}),
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: job.orgName,
      ...(job.logoUrl ? { logo: new URL(job.logoUrl, canonicalUrl).toString() } : {}),
      sameAs: canonicalUrl.replace(/\/jobs\/.*$/, ""),
    },
    identifier: {
      "@type": "PropertyValue",
      name: job.orgName,
      value: job.slug,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.addressLocality,
        ...(job.addressRegion ? { addressRegion: job.addressRegion } : { addressRegion: "ZH" }),
        ...(job.postalCode ? { postalCode: job.postalCode } : {}),
        ...(job.streetAddress ? { streetAddress: job.streetAddress } : {}),
        addressCountry: "NL",
      },
    },
    ...(salaryBlock(job) ? { baseSalary: salaryBlock(job) } : {}),
    ...(job.workHours ? { workHours: job.workHours } : {}),
    ...(job.externalUrl ? { hiringOrganizationUrl: job.externalUrl } : {}),
    directApply: !!job.externalUrl,
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify once; no pretty-print (smaller HTML)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

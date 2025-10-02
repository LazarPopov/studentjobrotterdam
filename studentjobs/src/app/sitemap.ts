// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { JOBS } from "@/data/jobs";

const BASE = "https://studentjobsrotterdam.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = ["/", "/jobs", "/categories", "/blog", "/employers"].map(
    (p) => ({ url: `${BASE}${p}` })
  );

  const blogUrls = [
    "english-speaking-student-jobs-rotterdam",
    "student-jobs-rotterdam-complete-guide-2025",
    "best-paying-student-jobs-rotterdam-2025",
  ].map((slug) => ({ url: `${BASE}/blog/${slug}` }));

  const categoryUrls = [
    "hospitality",
    "retail",
    "delivery",
    "logistics",
    "tutoring",
    "events",
    "sales",
    "fieldwork",
  ].map((c) => ({ url: `${BASE}/categories/${c}` }));

  const jobUrls = JOBS.map((j) => ({
    url: `${BASE}/jobs/${j.slug}`,
    lastModified: j.datePosted,
  }));

  return [...staticUrls, ...blogUrls, ...categoryUrls, ...jobUrls];
}

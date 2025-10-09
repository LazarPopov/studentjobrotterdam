// src/app/sitemap.ts
import { listJobs } from "@/data/jobs";

export default function sitemap() {
  const base = "https://studentjobsrotterdam.nl";

  const staticUrls = [
    { url: `${base}/`, changefreq: "daily", priority: 1.0 },
    { url: `${base}/jobs`, changefreq: "daily", priority: 0.8 },
    { url: `${base}/categories`, changefreq: "weekly", priority: 0.6 },
    { url: `${base}/blog`, changefreq: "weekly", priority: 0.6 },
    { url: `${base}/employers`, changefreq: "monthly", priority: 0.6 },
  ];

  const categories = [
    "hospitality",
    "retail",
    "delivery",
    "logistics",
    "tutoring",
    "events",
    "sales",
    "fieldwork",
  ].map((c) => ({ url: `${base}/categories/${c}`, changefreq: "weekly", priority: 0.5 }));

  const jobs = listJobs().map((j) => ({
    url: `${base}/jobs/${j.slug}`,
    changefreq: "daily",
    priority: j.featured ? 0.8 : 0.6,
  }));

  const blog = [
    "english-speaking-student-jobs-rotterdam",
    "student-jobs-rotterdam-complete-guide-2025",
    "best-paying-student-jobs-rotterdam-2025",
  ].map((slug) => ({
    url: `${base}/blog/${slug}`,
    changefreq: "monthly",
    priority: 0.6,
  }));

  return [...staticUrls, ...categories, ...jobs, ...blog];
}

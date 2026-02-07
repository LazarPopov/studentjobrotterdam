// src/app/blog/rss.xml/route.ts
import { NextResponse } from "next/server";

const site = "https://studentjobsrotterdam.nl";

const channelTitle = "Student Jobs Rotterdam Blog";
const channelDescription =
  "Rotterdam student job guides: English-friendly part-time jobs, permits, contracts, pay, and fast apply tips.";

const posts = [
  {
    slug: "english-speaking-student-jobs-rotterdam",
    title: "English-Speaking Student Jobs in Rotterdam (2026)",
    description:
      "Where to find roles that don’t require Dutch, plus quick apply tips for international students.",
    // Optional but recommended: keep dates for better feed freshness signals
    // published: "2026-01-02",
    // modified: "2026-10-02",
  },
  {
    slug: "student-jobs-rotterdam-complete-guide-2026",
    title: "Student Jobs in Rotterdam: Complete Guide (2026)",
    description:
      "Permits, contracts, pay, neighborhoods, and a step-by-step plan to land a job fast.",
  },
  {
    slug: "best-paying-student-jobs-rotterdam-2026",
    title: "Best-Paying Student Jobs in Rotterdam (2026)",
    description:
      "Shift bonuses, higher-paying categories, and certifications that increase your hourly rate.",
  },
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc2822Date(date: Date) {
  return date.toUTCString();
}

export async function GET() {
  const now = new Date();
  const feedUrl = `${site}/blog/rss.xml`;
  const channelUrl = `${site}/blog`;

  const items = posts
    .map((p) => {
      const url = `${site}/blog/${p.slug}`;

      // If you later add published/modified, use:
      // const pub = p.published ? rfc2822Date(new Date(p.published)) : rfc2822Date(now);

      return `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(p.description)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${channelUrl}</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(channelDescription)}</description>
    <language>en-NL</language>
    <lastBuildDate>${rfc2822Date(now)}</lastBuildDate>

    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

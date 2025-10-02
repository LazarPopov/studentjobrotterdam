// src/app/jobs/page.tsx
import Image from "next/image";
import Link from "next/link";
import { listJobs } from "@/data/jobs";

export const metadata = {
  title: "Jobs in Rotterdam | Student Jobs Rotterdam",
  description: "All current student jobs in Rotterdam.",
  alternates: { canonical: "https://studentjobsrotterdam.nl/jobs" },
};

function RowLink({
  job,
  className,
  children,
}: {
  job: { slug: string; externalUrl?: string };
  className?: string;
  children: React.ReactNode;
}) {
  return job.externalUrl ? (
    <a href={job.externalUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={`/jobs/${job.slug}`} className={className}>
      {children}
    </Link>
  );
}

export default function JobsIndex() {
  const jobs = listJobs();

  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-semibold">All Jobs in Rotterdam</h1>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {jobs.map((j) => (
            <RowLink key={j.slug} job={j} className="card hover:shadow-md transition">
              {/* Header: logo + title/org */}
              <div className="flex items-start gap-3">
                <div className="relative h-10 w-10 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0">
                  {j.logoUrl ? (
                    <Image
                      src={j.logoUrl}
                      alt={j.logoAlt || `${j.orgName} logo`}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-xs text-slate-500">
                      {j.orgName?.[0] ?? "•"}
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-lg font-semibold">{j.title}</div>
                  <div className="text-slate-700">{j.orgName}</div>
                </div>
              </div>

              {/* Short description (includes per gig/sale) */}
              {j.shortDescrition && (
                <p className="mt-3 text-sm text-slate-700">{j.shortDescrition}</p>
              )}

              {/* Meta row */}
              <div className="mt-3 text-sm text-slate-700">
                {j.baseSalaryMin
                  ? `€${j.baseSalaryMin}${j.baseSalaryMax ? `–€${j.baseSalaryMax}` : ""}/${j.payUnit?.toLowerCase()}`
                  : "Pay: N/A"}
                {" • "}
                {j.workHours ?? "Hours: N/A"}
                {j.area ? ` • ${j.area}` : ""}
                {" • "}
                {j.englishFriendly ? "English-friendly" : "Dutch required"}
              </div>
            </RowLink>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/data/jobs.ts
// Central job data + helpers (Rotterdam). Auto-builds `shortDescrition` to include per-gig/per-sale amount + a concise text from `descriptionHtml`.
// Also adds a place for a per-listing logo (logoUrl/logoAlt).

// src/data/jobs.ts — add an external URL for outbound clicks
export type Employment =
  | "PART_TIME"
  | "FULL_TIME"
  | "CONTRACTOR"
  | "TEMPORARY"
  | "INTERN"
  | "VOLUNTEER";

export type JobRecord = {
  slug: string;
  title: string;
  orgName: string;
  descriptionHtml: string;
  shortDescrition: string;
  employmentType: Employment;
  baseSalaryMin?: number;
  baseSalaryMax?: number;
  currency?: "EUR";
  payUnit?: "HOUR" | "MONTH";
  addressLocality: "Rotterdam";
  addressRegion?: string;
  postalCode?: string;
  streetAddress?: string;
  area?: string;
  englishFriendly?: boolean;
  workHours?: string;
  datePosted: string;
  validThrough?: string;
  categories: ("delivery" | "sales" | "hospitality" | "retail" | "tutoring" | "events" | "fieldwork")[];
  featured?: boolean;

  // NEW: clicking the card can go to this website if provided
  externalUrl?: string;

  // existing logo fields (already added earlier)
  perGigAmount?: number;
  perSaleAmount?: number;
  perGigAmountText?: string;
  perSaleAmountText?: string;
  logoUrl?: string;
  logoAlt?: string;
};

// ---- helpers to build shortDescrition from descriptionHtml + amounts ----
function stripHtml(html: string): string {
  // quick HTML -> text (collapse whitespace)
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstSentence(text: string, maxLen = 180): string {
  const dot = text.indexOf(".");
  if (dot !== -1 && dot < maxLen) return text.slice(0, dot + 1);
  return text.length > maxLen ? text.slice(0, maxLen - 1) + "…" : text;
}

function money(n?: number) {
  return typeof n === "number" && n > 0 ? `€${n.toString()}` : null;
}

function makeShortDescription(job: Partial<JobRecord>): string {
  const parts: string[] = [];

  // Prefer numeric amounts; fall back to text labels if provided.
  if (typeof job.perGigAmount === "number" && job.perGigAmount > 0) {
    parts.push(`${money(job.perGigAmount)} per gig`);
  } else if (job.perGigAmountText) {
    parts.push(`${job.perGigAmountText}`);
  }

  if (typeof job.perSaleAmount === "number" && job.perSaleAmount > 0) {
    parts.push(`${money(job.perSaleAmount)} per sale`);
  } else if (job.perSaleAmountText) {
    parts.push(`${job.perSaleAmountText}`);
  }

  const desc = firstSentence(stripHtml(job.descriptionHtml || ""));
  if (desc) parts.push(desc);

  return parts.join(" — ");
}

// ---- Define raw jobs (without shortDescrition), then map to final JOBS with computed shortDescrition ----
type RawJob = Omit<JobRecord, "shortDescrition">;

const RAW_JOBS: RawJob[] = [
  {
    slug: "domakin-viewing-agent-rotterdam",
    title: "Domakin Viewing Agent (Remote Viewings)",
    orgName: "Domakin",
    descriptionHtml:
      "<p>Visit properties on behalf of students, stream live video, and complete a short checklist (condition, noise, registration, landlord details). Flexible shifts; training provided.</p><ul><li>Equipment: smartphone with data</li><li>Each viewing ~30–45 minutes</li><li>Bonus for fast response times</li></ul>",
    employmentType: "PART_TIME",
    baseSalaryMin: 15,
    baseSalaryMax: 22,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Citywide",
    englishFriendly: true,
    workHours: "4–16 h/week, flexible",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["fieldwork", "events"],
    featured: true,
    // amounts for short description
    perGigAmount: 20,                              // €20 per gig
    // logo
    logoUrl: "/logos/domakin.png",
    logoAlt: "Domakin logo",
    externalUrl: "https://www.domakin.nl/contact"
  },
  {
    slug: "domakin-room-finder-rotterdam",
    title: "Domakin Room Finder (Student Housing Sourcing)",
    orgName: "Domakin",
    descriptionHtml:
      "<p>Source rooms and apartments compatible with student registration, verify details with landlords, and upload to our platform. Commission per successful listing and placement.</p><ul><li>Outbound messages & calls</li><li>Quality checks: registration, price, location</li><li>Great for social, persistent students</li></ul>",
    employmentType: "PART_TIME",
    baseSalaryMin: 12,
    baseSalaryMax: 18,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Citywide",
    englishFriendly: true,
    workHours: "6–20 h/week, flexible",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["sales"],
    featured: true,
    // amounts for short description
    perSaleAmount: 200,                            // €200 per successful listing/placement
    logoUrl: "/logos/domakin.png",
    logoAlt: "Domakin logo",
    externalUrl: "https://www.domakin.nl/services/add-listing",
  },
  {
    slug: "rentswap-room-finder-rotterdam",
    title: "RentSwap Room Finder (Outgoing Tenant Network)",
    orgName: "RentSwap",
    descriptionHtml:
      "<p>Work with leaving tenants to identify upcoming rooms, coordinate one-candidate viewings, and ensure smooth handovers. Training on scripts & verification provided.</p><ul><li>Lead tracking in CRM</li><li>Coordinate with landlords/tenants</li><li>Performance bonuses</li></ul>",
    employmentType: "PART_TIME",
    baseSalaryMin: 12,
    baseSalaryMax: 18,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Citywide",
    englishFriendly: true,
    workHours: "8–16 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["sales"],
    featured: true,
    // amounts for short description
    perSaleAmount: 200,                            // €200 per successful handover
    logoUrl: "/logos/rentswap.png",
    logoAlt: "RentSwap logo",
    externalUrl:"https://www.rentswap.nl/",
  },
  {
    slug: "pepperminds-door-to-door-sales-rotterdam",
    title: "Pepperminds Door-to-Door Sales (Student Friendly)",
    orgName: "Pepperminds",
    descriptionHtml:
      "<p>Join a dynamic field team to represent brands and charities across Rotterdam. Training, daily briefings, and performance-based bonuses.</p><ul><li>Travel between neighborhoods</li><li>Team-based shifts</li><li>Commission on results</li></ul>",
    employmentType: "PART_TIME",
    baseSalaryMin: 12,
    baseSalaryMax: 20,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Various districts",
    englishFriendly: true,
    workHours: "10–20 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["sales", "fieldwork"],
    featured: true,
    // unknown numeric commission -> use text fallback
    perSaleAmountText: "150 еuros per shift",
    logoUrl: "/logos/pepperminds.jpeg",
    logoAlt: "Pepperminds logo",
    externalUrl: "https://www.pepperminds.nl/makeithappen/?mkt=LZ",
  },
];
// Paste into src/data/jobs.ts (after RAW_JOBS is defined)
// Add these external jobs (none featured), then push into RAW_JOBS.

const NEW_JOBS: RawJob[] = [
  {
    slug: "hellofresh-delivery-driver-rotterdam",
    title: "HelloFresh Delivery Driver (Rotterdam)",
    orgName: "HelloFresh",
    descriptionHtml:
      "<p>Deliver meal boxes in Rotterdam; fixed shifts, paid mileage; uniform & equipment provided.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 14.5,
    baseSalaryMax: 15.5,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "Fixed shifts",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["delivery"],
    externalUrl: "https://www.studentjob.nl/vacatures/2964353-hello-fresh-bezorger-rotterdam",
  },
  {
    slug: "coolblue-bezorger-delivery-driver-rotterdam",
    title: "Coolblue Bezorger (Delivery Driver)",
    orgName: "Coolblue",
    descriptionHtml:
      "<p>Deliver large/small electronics in the Rotterdam region; employee contract with benefits.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 17.64,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "Rotterdam region",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["delivery"],
    externalUrl: "https://nl.indeed.com/q-coolblue-l-rotterdam-vacatures.html",
  },
  {
    slug: "postnl-night-postsorteerder-rotterdam",
    title: "PostNL Night Postsorteerder (Rotterdam)",
    orgName: "PostNL",
    descriptionHtml:
      "<p>Night mail sorting in Rotterdam; shift allowances increase evening/night pay.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 13.68,
    baseSalaryMax: 19.15,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "Evenings/Nights",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["fieldwork"],
    externalUrl:
      "https://www.studentjob.nl/vacatures/3399225-parttime-postsorteerder-in-de-avond-bij-postnl-in-rotterdam",
  },
  {
    slug: "lidl-store-assistant-zuidplein",
    title: "Lidl Store Assistant – Zuidplein",
    orgName: "Lidl",
    descriptionHtml:
      "<p>Supermarket retail shifts (2–12 hrs/week); flexible scheduling; age-based all-in pay.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 14.94,
    baseSalaryMax: 20.0,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Zuidplein",
    workHours: "2–12 h/week, flexible",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["retail"],
    externalUrl: "https://nl.indeed.com/q-vakkenvuller-l-rotterdam-vacatures.html",
  },
  {
    slug: "catering-medewerker-hogeschool-rotterdam-spot-on",
    title: "Catering Medewerker – Hogeschool Rotterdam (Spot On)",
    orgName: "Spot On",
    descriptionHtml:
      "<p>On-campus catering service; daytime Mon–Fri; flexible hours.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 14.5,
    baseSalaryMax: 16.5,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "Daytime (Mon–Fri)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://nl.indeed.com/q-catering-medewerker-bij-l-rotterdam-vacatures.html",
  },
  {
    slug: "festival-horeca-crew-local-heroes-rotterdam",
    title: "Festival/Horeca Crew – Local Heroes (Rotterdam)",
    orgName: "Local Heroes",
    descriptionHtml:
      "<p>Events & festival shifts; English-friendly; pay varies by age/experience.</p>",
    employmentType: "TEMPORARY",
    baseSalaryMin: 14.39,
    baseSalaryMax: 15.41,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "Event-based shifts",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["events", "hospitality"],
    externalUrl:
      "https://thelocalheroes.nl/horeca-vacatures/festival-medewerker-indeed-rotterdam/",
  },
  {
    slug: "erasmus-university-tutor-academy-tutor-student-assistant",
    title: "Erasmus University Tutor Academy – Tutor/Student Assistant",
    orgName: "Erasmus University Rotterdam",
    descriptionHtml:
      "<p>Paid tutoring/assisting for EUR courses; on-campus roles for students.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 15.87,
    baseSalaryMax: 17.28,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "On-campus; variable",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["tutoring"],
    externalUrl: "https://www.eur.nl/en/education/tutor-academy",
  },
  {
    slug: "studentsplus-bijlesdocent-rotterdam",
    title: "StudentsPlus – Bijlesdocent (Rotterdam)",
    orgName: "StudentsPlus",
    descriptionHtml:
      "<p>1-on-1 tutoring; you set your schedule; CV-friendly student job.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 15.0,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "Flexible",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["tutoring"],
    externalUrl: "https://www.studentsplus.nl/bijles-geven/rotterdam",
  },
  {
    slug: "studyworks-bijlescoach",
    title: "StudyWorks – Bijlescoach",
    orgName: "StudyWorks",
    descriptionHtml:
      "<p>In-person or online tutoring; training provided; age-based rate.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 13.0,
    baseSalaryMax: 14.4,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "Flexible",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["tutoring"],
    externalUrl: "https://werkenbijstudyworks.nl/bijles-geven/",
  },
  {
    slug: "call-center-agent-we-say-so",
    title: "Call Center Agent (We Say So)",
    orgName: "We Say So",
    descriptionHtml:
      "<p>Phone outreach/support; base pay + bonuses; on-site/remote mix.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 15.0,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "Varies",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["sales"],
    externalUrl:
      "https://www.studentjob.nl/vacatures/3626861-callcenter-medewerkers-gezocht-met-een-uurloon-van-15-excl-bonussen-ongeacht-jouw-leeftijd-fulltime-maar-ook-als-bijbaan-in-rotterdam",
  },
  {
    slug: "coolblue-klantenservice-rotterdam",
    title: "Coolblue Klantenservice – Rotterdam",
    orgName: "Coolblue",
    descriptionHtml:
      "<p>Phone/chat support for orders & deliveries; training included.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 14.45,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "24–40 h (varies)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["sales"],
    externalUrl: "https://www.coolblue.nl/vacatures/klantenservice-medewerker",
  },
  {
    slug: "enqueteur-rotterdam-jobbird",
    title: "Enquêteur (Rotterdam) – Jobbird",
    orgName: "Jobbird",
    descriptionHtml:
      "<p>Street/phone surveying; flexible 6–24 hrs/week; no sales.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 13.16,
    baseSalaryMax: 16.45,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    workHours: "6–24 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2025-12-31",
    categories: ["fieldwork"],
    externalUrl:
      "https://www.jobbird.com/nl/vacature/23005421-flexibele-bijbaan-callcenter-medewerker-als-enqueteur-in-rotterdam",
  },
];

RAW_JOBS.push(...NEW_JOBS);


export const JOBS: JobRecord[] = RAW_JOBS.map((j) => ({
  ...j,
  shortDescrition: makeShortDescription(j),
}));

// helper lookups
export function getJobBySlug(slug: string) {
  return JOBS.find((j) => j.slug === slug) || null;
}
export function listJobs() {
  return JOBS;
}
export function listFeaturedJobs() {
  return JOBS.filter((j) => j.featured);
}



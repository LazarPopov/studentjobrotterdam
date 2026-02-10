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
  DUO?: boolean;
  workHours?: string;
  datePosted: string;
  validThrough?: string;
  categories: ("delivery" | "sales" | "hospitality" | "retail" | "tutoring" | "events" | "fieldwork")[];
  featured?: boolean;

  externalUrl?: string;

  perGigAmount?: number;
  perSaleAmount?: number;
  perGigAmountText?: string;
  perSaleAmountText?: string;
  logoUrl?: string;
  logoAlt?: string;
  heroImageUrl?: string; // example: "/blog/some-image.jpg" or "/jobs/pepperminds.jpg"
  heroImageAlt?: string;
  brandColor?: string; // example: "#E11D48" (remove it and the site uses default styling)
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
  slug: "domakin-agent-rotterdam",
  title: "Domakin Student Agent",
  orgName: "Domakin",
  descriptionHtml:
    "<p><strong>Domakin helps students in the Netherlands find housing.</strong> If you want a flexible role that makes a visible impact, and teaches you real communication and sales skills, this is it.</p>" +
    "<p>As a <strong>Domakin Agent</strong>, you combine two core missions:</p>" +
    "<ul>" +
    "<li><strong>Viewing Agent</strong>: attend property viewings on behalf of students who cannot be present, and report back with clear notes and photos.</li>" +
    "<li><strong>Property Seeker</strong>: help students find accommodation by sourcing rooms and studios, verifying the details, and guiding them through the process.</li>" +
    "</ul>" +
    "<h3>What you will do</h3>" +
    "<ul>" +
    "<li><strong>Remote viewings</strong>: go to properties in your area, take photos, check key points (registration, condition, neighborhood), and send a structured summary to the student.</li>" +
    "<li><strong>Property sourcing</strong>: find rooms and apartments, message or call landlords, confirm registration possibility, price, availability, and upload verified options to our system.</li>" +
    "<li><strong>Student support</strong>: help students move fast, make informed decisions, and avoid scams.</li>" +
    "<li><strong>Sales training</strong>: we train you to confidently pitch our process to landlords and students, including how we handle room listings and successful takeovers.</li>" +
    "</ul>" +
    "<h3>Time and compensation</h3>" +
    "<ul>" +
    "<li><strong>Per viewing</strong>: typically <strong>€20 to €40</strong>, and most viewings take <strong>up to 30 minutes</strong> on site (plus travel).</li>" +
    "<li><strong>Per room result</strong>: <strong>€200</strong> flat per room listing or match, with opportunities <strong>up to €300</strong> for a successful takeover, depending on the deal.</li>" +
    "<li><strong>Flexible schedule</strong>: take tasks when you want, scale up during busy periods.</li>" +
    "</ul>" +
    "<h3>Who this is for</h3>" +
    "<ul>" +
    "<li>Proactive and social people who can follow up consistently</li>" +
    "<li>Comfortable walking into viewings and asking direct questions</li>" +
    "<li>English friendly, international students welcome</li>" +
    "</ul>" +
    "<p><strong>How to apply:</strong> Send a message via the contact form on our website. Write <strong>“Domakin for the win”</strong> and include your email. We will reach out to schedule a short interview.</p>" +
    "<p><strong>Do work that matters.</strong> Every viewing and every verified room can be the difference between a student having a home, or being stuck for months.</p>",
  employmentType: "PART_TIME",
  currency: "EUR",
  addressLocality: "Rotterdam",
  area: "All around the Netherlands",
  englishFriendly: true,
  workHours: "6 to 20 h/week, flexible",
  datePosted: new Date().toISOString().slice(0, 10),
  validThrough: "2026-12-31",
  categories: ["sales", "fieldwork"],
  featured: true,

  // Commission style fields (clearer than hourly for this role)
  perGigAmount: 30,
  perGigAmountText: "€20 to €40 per remote viewing (avg. up to 30 min on site)",
  perSaleAmount: 200,
  perSaleAmountText: "€200 per room listing or match, up to €300 for a successful takeover",

  logoUrl: "/logos/domakin.png",
  logoAlt: "Domakin logo",
  // externalUrl: "https://www.domakin.nl/careers",
},
{
  slug: "ib-tutor",
  title: "IB Tutor (Online)",
  orgName: "AcademiaAI",

  descriptionHtml:
    "<p><strong>Earn well per hour</strong> while working flexibly as an IB tutor with AcademiaAI. You can start with as little as <strong>1 hour per week</strong>, or scale up and earn a substantial monthly income.</p>" +
    "<br>"+
    "<p>At AcademiaAI, you tutor only within your <strong>area of expertise</strong>. For example, an IB graduate who scored a 6 or 7 in Math AA HL and is studying or has completed a related university degree can tutor DP Math, but not DP Biology. This ensures <strong>high-quality lessons</strong>, which our students truly value.</p>" +
    "<br>"+
    "<p>We hire IB graduate tutors throughout the year. Once accepted, you can start tutoring quickly.</p>" +  
    "<br>"+
    "<p>When you apply please let us know: </p>"+
    "<p><strong>City of residence</strong></p>" +
    "<p><strong>Country of residence</strong></p>" +
    "<p><strong>Did you graduate from IB?</strong></p>" +
    "<p><strong>Have you graduated from the International Baccalaureate Diploma Programme (IB DP)?</strong></p>" +
    "<p><strong>Current and completed university studies</strong></p>" +
    "<br>"+
    "<p>Interested? Apply now and start tutoring with AcademiaAI!</p>",



  baseSalaryMin: 20,
  baseSalaryMax: 40,
  employmentType: "PART_TIME",
  DUO: true,
  currency: "EUR",
  payUnit: "HOUR",
  addressLocality: "Rotterdam",
  area: "Online tutoring",
  englishFriendly: true,
  workHours: "1–20 h/week",
  datePosted: new Date().toISOString().slice(0, 10),
  validThrough: "2026-12-31",
  categories: ["tutoring"],
  featured: true,
  perSaleAmountText: "High hourly pay depending on subject and experience",
  logoUrl: "/logos/academiaAI.png",
  logoAlt: "AcademiaAI logo",
},
  {
  slug: "thuisbezorgd-takeaway-courier-netherlands",
  title: "Food Delivery",
  orgName: "Thuisbezorgd.nl",
descriptionHtml: "<p><strong>Are you tired of endless study sessions and sitting behind your laptop all day?</strong> This job is your perfect excuse to get outside, stay active, and earn solid money while exploring your city! Join <strong>Thuisbezorgd.nl</strong> as a Food Delivery Courier — hop on your bike, scooter, or car, and deliver happiness (and food) straight to hungry customers.</p><ul><li><strong>Flexible schedule</strong> — choose your own working hours so you can balance lectures, gym time, and parties 🍕🚴‍♂️</li><li><strong>Reliable income</strong> — hourly pay + tips + bonuses (and yes, rainy-day deliveries pay even better 😉)</li><li><strong>DUO-friendly</strong> — work enough hours and you can qualify for <strong>study financing (DUO)</strong> while keeping your freedom!</li><li><strong>Requirements</strong> — smartphone with data and your own bike, scooter, or car</li><li><strong>Perfect for students</strong> — stay fit, meet people, and make money on your own schedule</li></ul><p>Ready to swap your desk for the open road? <strong>Join Thuisbezorgd.nl and start earning this week!</strong></p>",  employmentType: "PART_TIME",
  baseSalaryMin: 12,
  baseSalaryMax: 15,
  DUO: true,
  currency: "EUR",
  payUnit: "HOUR",
  addressLocality: "Rotterdam",
  area: "Citywide / Multiple cities",
  englishFriendly: true,
  workHours: "Flexible shifts, 6–30 h/week",
  datePosted: new Date().toISOString().slice(0, 10),
  validThrough: "2026-12-31",
  categories: ["delivery", "fieldwork"],
  featured: true,
  perSaleAmountText: "14 euros per hour",
  logoUrl: "/logos/thuisbezorgd.png",
  logoAlt: "Thuisbezorgd.nl logo",
  externalUrl: "http://short.takeaway.com/nl355999758"
},


  //   {
  //   slug: "pepperminds-door-to-door-sales-rotterdam",
  //   title: "Door-to-Door Sales",
  //   orgName: "Pepperminds",
  
  //   descriptionHtml:
  //    "<p><strong> Earn €150 per shift</strong> as part of <a href=\"https://www.pepperminds.nl/makeithappen/?mkt=4930&recruitmentsource=Through_pepper\" target=\"_blank\" rel=\"noopener noreferrer\">Pepperminds’ door-to-door team</a> door-to-door team in Rotterdam. We mix the <em>personal touch in a digital era</em> with energy, coaching, and paid training so you can grow fast and earn even faster.</p><ul><li><strong> Dutch is not required</strong>, and you can even receive DUO… if you work enough hours of course 😉</li><li><strong>The better you are, the more you earn!</strong> You start as a rookie, grow into a promoter, and can become a captain — with performance bonuses reaching up to <strong>€500 a day!</strong></li><li><strong>Learn real sales</strong> — your colleagues are students from all kinds of backgrounds, and together you’ll master the most versatile skill out there: sales!</li><li><strong>Challenge yourself</strong> — every day is different, full of teamwork, laughter, and growth.</li><li><strong>After work culture</strong> — we even have our own bar where the team celebrates wins and unwinds together!</li></ul><p>Ready to test your limits, make friends, and earn like a pro? <strong>Join the crew and start this week!</strong></p>",    baseSalaryMin: 12,
  //   employmentType: "PART_TIME",
  //   baseSalaryMax: 20,
  //   DUO: true,
  //   currency: "EUR",
  //   payUnit: "HOUR",
  //   addressLocality: "Rotterdam",
  //   area: "Various districts",
  //   englishFriendly: false,
  //   workHours: "10–20 h/week",
  //   datePosted: new Date().toISOString().slice(0, 10),
  //   validThrough: "2026-12-31",
  //   categories: ["sales", "fieldwork"],
  //   featured: false,
  //   // unknown numeric commission -> use text fallback
  //   perSaleAmountText: "150 еuros per shift",
  //   logoUrl: "/logos/pepperminds.jpeg",
  //   logoAlt: "Pepperminds logo",
  // },


  {
  slug: "pepperminds-door-to-door-sales-rotterdam-nl",
  title: "Door-to-Door Sales",
  orgName: "Pepperminds",

  descriptionHtml:
   "<p><strong>Verdien €150 per shift</strong> als onderdeel van het <a href=\"https://www.pepperminds.nl/makeithappen/?mkt=4930&recruitmentsource=Through_pepper\" target=\"_blank\" rel=\"noopener noreferrer\">Pepperminds door-to-door team</a> in Rotterdam. Wij combineren de <em>persoonlijke touch in een digitaal tijdperk</em> met energie, coaching en betaalde trainingen zodat jij snel kunt groeien én snel kunt verdienen.</p><ul><li>, en je kunt zelfs DUO ontvangen als je genoeg uren werkt 😉</li><li><strong>Hoe beter je presteert, hoe meer je verdient!</strong> Je start als rookie, groeit door tot promoter en kunt captain worden met bonussen tot <strong>€500 per dag!</strong></li><li><strong>Leer echte sales</strong> samen met ambitieuze studenten uit allerlei achtergronden.</li><li><strong>Daag jezelf uit</strong> elke werkdag is anders, vol teamwork en groei.</li><li><strong>After work cultuur</strong> we hebben zelfs een eigen bar om successen te vieren.</li></ul><p>Klaar om je grenzen te verleggen, vrienden te maken en goed te verdienen? <strong>Start deze week nog!</strong></p>",
  baseSalaryMin: 12,
  employmentType: "PART_TIME",
  baseSalaryMax: 20,
  DUO: true,
  currency: "EUR",
  payUnit: "HOUR",
  addressLocality: "Rotterdam",
  area: "Verschillende wijken",
  englishFriendly: false,
  workHours: "10–20 uur per week",
  datePosted: new Date().toISOString().slice(0, 10),
  validThrough: "2026-12-31",
  categories: ["sales", "fieldwork"],
  featured: true,
  perSaleAmountText: "€150 per shift",
  logoUrl: "/logos/pepperminds.jpeg",
  logoAlt: "Pepperminds logo",
},


  {
slug: "uber-eats-courier-rotterdam",
title: "Uber Eats Courier",
orgName: "Uber",
descriptionHtml:
"<p><strong>Earn on your own schedule</strong> delivering with the Uber app in Rotterdam. Be your own boss, choose when you work, and track your earnings in real time.</p><p><strong>Limited-time promo:</strong> <strong>Receive an extra €750</strong> after you sign up and complete <strong>50 trips within 90 days</strong>. *Eligibility applies; see additional terms on Uber’s site.</p><ul><li><strong>Flexible hours</strong> — ride when it suits you (great alongside studies or another job).</li><li><strong>Fast onboarding</strong> — easy sign-up and start delivering once you’re approved.</li><li><strong>Real-time earnings</strong> — see trip totals live and cash out with available payout options.</li><li><strong>Multiple modes</strong> — deliver by bike, scooter, or car (requirements vary by city).</li><li><strong>Refer & earn</strong> — invite friends to drive or deliver and earn once they complete trips.</li></ul><p><strong>Join today</strong> and start delivering in Rotterdam — the city’s always moving.</p>",
baseSalaryMin: 12,
employmentType: "PART_TIME",
baseSalaryMax: 25,
DUO: true,
currency: "EUR",
payUnit: "HOUR",
addressLocality: "Rotterdam",
area: "Rotterdam & nearby districts",
englishFriendly: true,
workHours: "Flexible — you choose",
datePosted: new Date().toISOString().slice(0, 10),
validThrough: "2026-12-31",
categories: ["delivery"],
featured: false,
perSaleAmountText: "€750 sign-up reward after 50 trips (within 90 days; terms apply)",
logoUrl: "/logos/uber.png",
logoAlt: "Uber logo",
// externalUrl: "https://www.uber.com/signup/drive/deliver/?invite_code=a6cpc37",
},

];
// Paste into src/data/jobs.ts (after RAW_JOBS is defined)
// Add these external jobs (none featured), then push into RAW_JOBS.
const NEW_JOBS: RawJob[] = [
 
  {
    slug: "picnic-delivery-driver-rotterdam-english",
    title: "Picnic Delivery Driver (Rotterdam, English-friendly)",
    orgName: "Picnic",
    descriptionHtml:
      "<p>Deliver groceries from a Picnic hub in Rotterdam. Roles are advertised as English-friendly (no Dutch required).</p>",
    employmentType: "PART_TIME",
    baseSalaryMax: 15.96,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "Shift-based; part-time options",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["delivery"],
    externalUrl: "https://www.picnic.app/careers",
  },

  {
    slug: "hellofresh-courier-rotterdam-schiedam-youngcapital",
    title: "HelloFresh Courier (Rotterdam-Schiedam)",
    orgName: "HelloFresh (via YoungCapital)",
    descriptionHtml:
      "<p>Deliver meal boxes in the Rotterdam-Schiedam area. YoungCapital lists multiple courier vacancies with an English filter available.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 14.9,
    baseSalaryMax: 16.9,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Schiedam (Rotterdam region)",
    englishFriendly: true,
    workHours: "14–40 h/week depending on vacancy",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["delivery"],
    externalUrl: "https://www.youngcapital.nl/werken-bij/hellofresh-vacatures/bezorger",
  },

  {
    slug: "flink-rider-rotterdam-apply",
    title: "Flink Rider (Rotterdam)",
    orgName: "Flink",
    descriptionHtml:
      "<p>Grocery delivery rider role. Flink accepts English or Dutch speaking applicants and offers contracts (including options for non-EU students).</p>",
    employmentType: "PART_TIME",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "Flexible shifts (city-based)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["delivery"],
    externalUrl: "https://riders.goflink.com/nl_en",
  },

  {
    slug: "flink-picker-rotterdam-ops-associate",
    title: "Flink Warehouse Picker (Rotterdam area)",
    orgName: "Flink",
    descriptionHtml:
      "<p>Pick and pack customer orders, restock shelves, and prepare deliveries. Apply via Flink’s picker/ops associate portal.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "Flexible schedule (12–32 h/week typical)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["fieldwork"],
    externalUrl: "https://pickers.goflink.com/nl-en",
  },

  {
    slug: "rotterdam-ahoy-catering-and-event-staff-english",
    title: "Rotterdam Ahoy Catering and Event Staff (English-speaking openings)",
    orgName: "Rotterdam Ahoy",
    descriptionHtml:
      "<p>Work during concerts, sports events, and fairs. Ahoy states they regularly have job openings for English-speaking colleagues in public catering and related roles.</p>",
    employmentType: "TEMPORARY",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "On-call / event-based shifts",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["events", "hospitality"],
    externalUrl: "https://www.ahoy.nl/en/information/jobs",
  },

  {
    slug: "hotel-pincoffs-housekeeping-rotterdam",
    title: "Housekeeping / Hotel Support (Rotterdam)",
    orgName: "Hotel Pincoffs",
    descriptionHtml:
      "<p>Hotel roles in Rotterdam. Hotel Pincoffs notes they prefer candidates who speak Dutch or English.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "Shift-based; part-time options",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl: "https://www.hotelpincoffs.nl/en/vacancies/",
  },

  {
    slug: "hotel-pincoffs-night-porter-rotterdam",
    title: "Night Porter (Rotterdam)",
    orgName: "Hotel Pincoffs",
    descriptionHtml:
      "<p>Night shift hotel role in Rotterdam. Hotel Pincoffs indicates Dutch or English is preferred.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "Night shifts (schedule varies)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl: "https://www.hotelpincoffs.nl/en/vacancies/",
  },

  {
    slug: "room-attendant-ibis-styles-rotterdam-ahoy-viku",
    title: "Room Attendant (Ibis Styles Rotterdam Ahoy)",
    orgName: "Viku (Ibis Styles Rotterdam Ahoy)",
    descriptionHtml:
      "<p>Room attendant cleaning role at Ibis Styles Rotterdam Ahoy. Listing mentions Dutch and/or English speaking candidates.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 15.52,
    baseSalaryMax: 17.05,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "Part-time or full-time options depending on schedule",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://viku.booston.io/en/jobs/68/via-viku-working-at-hotel-ibis-style-ahoy-rotterdam-as-a-room-attendant",
  },

  {
    slug: "erasmus-university-tutor-academy-rotterdam",
    title: "Erasmus University Tutor Academy (Tutor / Student Assistant)",
    orgName: "Erasmus University Rotterdam",
    descriptionHtml:
      "<p>Join the EUR Tutor Academy pool for tutoring and student assistant roles. Pay is listed via student assistant scales (hourly rates shown on the Tutor Academy page).</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 17.24,
    baseSalaryMax: 17.28,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "On-campus; variable (depends on course/assignment)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["tutoring"],
    externalUrl: "https://www.eur.nl/en/education/tutor-academy",
  },

  {
    slug: "erasmus-university-student-assistant-career-pathways-rotterdam",
    title: "Student Assistant (Erasmus University Rotterdam)",
    orgName: "Erasmus University Rotterdam",
    descriptionHtml:
      "<p>Student assistant role at EUR with hourly rates listed (Bachelor and Master rates shown on the vacancy). Great CV builder in an international environment.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 17.97,
    baseSalaryMax: 19.18,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "0.1–0.4 FTE depending on role",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["tutoring"],
    externalUrl: "https://www.eur.nl/en/working-at-eur/vacancies",
  },

  {
    slug: "temper-flexible-gigs-rotterdam",
    title: "Flexible Shifts (Rotterdam) - Temper",
    orgName: "Temper",
    descriptionHtml:
      "<p>Pick flexible shifts around Rotterdam in hospitality, events, logistics, and retail. Temper markets average earnings around €20 per hour (gross), depending on the shift.</p>",
    employmentType: "CONTRACTOR",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "Gig-based; you choose shifts",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["events", "hospitality", "retail", "fieldwork"],
    externalUrl: "https://temper.works/en",
  },
];

RAW_JOBS.push(...NEW_JOBS);
const NEW_JOBS_2: RawJob[] = [
  {
    slug: "starbucks-barista-rotterdam-english",
    title: "Starbucks Barista (Rotterdam, English speaking)",
    orgName: "Starbucks Netherlands",
    descriptionHtml:
      "<p>Barista role in Rotterdam. Fluent English is enough (Dutch is a plus, not required). Training provided, flexible shifts, and partner perks.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 15.18,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "16–24 h/week (flexible shifts)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.goingabroad.nl/jobs/international-student-job-as-a-barista-in-rotterdam/",
  },

  {
    slug: "postnl-delivery-postman-rotterdam-english",
    title: "PostNL Delivery (Postman or Postwoman, Rotterdam, English)",
    orgName: "PostNL",
    descriptionHtml:
      "<p>Deliver mail in your own neighbourhood. Excellent communication in English. Flexible schedule (deliver before evening), active outdoor work.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 14.71,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "10–20 h/week (2–4 days, at least 3h/day)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["delivery"],
    externalUrl: "https://www.goingabroad.nl/jobs/postman-job-netherlands-rotterdam/",
  },

  {
    slug: "ice-cream-shop-ice-making-rotterdam-centre",
    title: "Ice Cream Shop Staff (Ice making, Rotterdam Centre)",
    orgName: "Ice-cream Shop",
    descriptionHtml:
      "<p>Serve and help prepare ice cream in Rotterdam city centre. English or Dutch is fine. Day and evening shifts available, fun seasonal vibe.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 7.0,
    baseSalaryMax: 12.4,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Centrum",
    englishFriendly: true,
    workHours: "2–3 shifts/week (day or evening shifts)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.goingabroad.nl/jobs/student-job-at-an-ice-cream-shop-part-time-in-the-city-centre-of-rotterdam/",
  },

  {
    slug: "streetfood-restaurant-kitchen-rotterdam-english",
    title: "All-round Kitchen Staff (Streetfood Restaurant, Rotterdam, English)",
    orgName: "A Streetfood Restaurant",
    descriptionHtml:
      "<p>Kitchen role in a streetfood restaurant. Dutch is not required, English is sufficient. Training provided, 7 days open, growth into a kitchen lead role.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 8.75,
    baseSalaryMax: 13.0,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "24–40 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.goingabroad.nl/jobs/all-round-part-time-kitchen-job-at-a-streetfood-restaurant-in-rotterdam/",
  },

  {
    slug: "restaurant-cocktailbar-kitchen-help-rotterdam-centraal",
    title: "Kitchen Help (Restaurant and Cocktail Bar near Rotterdam Central)",
    orgName: "Restaurant & Cocktailbar",
    descriptionHtml:
      "<p>Evening shifts (roughly 18:00–23:30). Help with prep, plating, cleaning, and receiving orders. Pay plus tips.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 10.0,
    baseSalaryMax: 12.5,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Near Rotterdam Centraal",
    englishFriendly: true,
    workHours: "12–24 h/week (2 shifts/week)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.goingabroad.nl/jobs/part-time-kitchen-help-at-a-restaurant-and-cocktail-bar-in-rotterdam/",
  },

  {
    slug: "restaurant-cocktailbar-waiter-runner-rotterdam-centraal",
    title: "Waiter or Runner (Restaurant and Cocktail Bar near Rotterdam Central)",
    orgName: "Restaurant & Cocktailbar",
    descriptionHtml:
      "<p>Hospitality floor role. Evening shifts, pay plus tips. Great if you want high energy service work in an international vibe.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 12.8,
    baseSalaryMax: 15.2,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Near Rotterdam Centraal",
    englishFriendly: true,
    workHours: "8–16 h/week (2 shifts/week)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.goingabroad.nl/jobs/part-time-waiter-runner-at-a-restaurant-and-cocktail-bar-in-rotterdam/",
  },

  {
    slug: "italian-american-restaurant-waiter-rotterdam-english",
    title: "Waiter or Waitress (Italian/American Restaurant, Rotterdam, English)",
    orgName: "Italian/American Restaurant",
    descriptionHtml:
      "<p>Part-time waiter or waitress role in Rotterdam. Guest service, events support, and teamwork in a casual restaurant and bar setting.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "8–24 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality", "events"],
    externalUrl:
      "https://www.goingabroad.nl/jobs/part-time-waiter-waitress-at-an-italian-american-restaurant-in-rotterdam/",
  },

  {
    slug: "german-speaking-customer-service-rotterdam",
    title: "German-speaking Customer Service Representative (Rotterdam)",
    orgName: "International Company (via GoingAbroad)",
    descriptionHtml:
      "<p>Full-time customer support role. Fluent German and good English required. Base salary plus potential performance bonuses.</p>",
    employmentType: "FULL_TIME",
    baseSalaryMin: 2600,
    baseSalaryMax: 3000,
    currency: "EUR",
    payUnit: "MONTH",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "32–40 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["sales"],
    externalUrl:
      "https://www.goingabroad.nl/jobs/german-speaking-customer-service-representative-in-rotterdam/",
  },

  {
    slug: "hotel-the-james-housekeeping-supervisor-internship-rotterdam",
    title: "Housekeeping Supervisor Internship (Hotel The James, Rotterdam)",
    orgName: "Hotel The James Rotterdam",
    descriptionHtml:
      "<p>Internship in housekeeping supervision. Language listed as NL/EN. Practical learning role in a hotel environment.</p>",
    employmentType: "INTERN",
    baseSalaryMin: 600,
    currency: "EUR",
    payUnit: "MONTH",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "20–30 h/week (18–22 weeks)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.hotelprofessionals.nl/en/job/housekeeping-supervisor-internship-rotterdam-171161",
  },

  {
    slug: "postillion-wtc-rotterdam-fb-supervisor",
    title: "F&B Supervisor (Postillion Convention Centre WTC Rotterdam)",
    orgName: "Postillion Convention Centre WTC Rotterdam",
    descriptionHtml:
      "<p>Full-time F&B supervisor role. Language listed as NL/EN. Manage service operations in a convention centre setting.</p>",
    employmentType: "FULL_TIME",
    addressLocality: "Rotterdam",
    englishFriendly: true,
    workHours: "38 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality", "events"],
    externalUrl:
      "https://www.hotelprofessionals.nl/en/job/fandb-supervisor-rotterdam-173897",
  },

  {
    slug: "motel-one-rotterdam-housekeeping-beercoo",
    title: "Housekeeping Medewerker (Motel One Rotterdam, via Beercoo)",
    orgName: "Beercoo (Motel One Rotterdam)",
    descriptionHtml:
      "<p>Housekeeping shifts in Rotterdam centrum. Part-time role with 10–30 hours per week. Suitable for internationals with basic communication skills.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 15.0,
    baseSalaryMax: 16.0,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Rotterdam Centrum",
    englishFriendly: true,
    workHours: "10–30 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.hotelprofessionals.nl/vacature/housekeeping-medewerker-hotel-rotterdam-rotterdam-165982",
  },

  {
    slug: "tempo-team-assembly-worker-english-rotterdam-region",
    title: "Assembly Worker (English, Rotterdam region)",
    orgName: "Tempo-Team",
    descriptionHtml:
      "<p>Assembly work where English is accepted. Good option if you want hands-on work in the wider Rotterdam region.</p>",
    employmentType: "FULL_TIME",
    baseSalaryMin: 14.06,
    baseSalaryMax: 15.45,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Rotterdam region",
    englishFriendly: true,
    workHours: "Full-time",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["fieldwork"],
    externalUrl:
      "https://www.tempo-team.nl/vacatures/assembly-worker-%28english%29-honselersdijk/580574",
  },

  {
    slug: "tempo-team-orderpicker-english-rotterdam-region",
    title: "Orderpicker (English, Rotterdam region)",
    orgName: "Tempo-Team",
    descriptionHtml:
      "<p>Order picking role where English is accepted. Fast paced warehouse work with flexible shifts depending on the site.</p>",
    employmentType: "FULL_TIME",
    baseSalaryMin: 14.06,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Rotterdam",
    area: "Rotterdam region",
    englishFriendly: true,
    workHours: "Full-time",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["fieldwork"],
    externalUrl:
      "https://www.tempo-team.nl/vacatures/orderpicker-%28english%29-bleiswijk/580587",
  },
];
RAW_JOBS.push(...NEW_JOBS_2);



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



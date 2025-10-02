// src/app/api/employer-lead/route.ts (call email after building payload)
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get("website")) return NextResponse.redirect(new URL("/employers/thank-you", req.url), { status: 303 });

  const payload = {
    company: String(form.get("company") || ""),
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    phone: String(form.get("phone") || ""),
    title: String(form.get("title") || ""),
    employmentType: String(form.get("employmentType") || ""),
    category: String(form.get("category") || ""),
    city: String(form.get("city") || "Rotterdam"),
    area: String(form.get("area") || ""),
    baseSalaryMin: form.get("baseSalaryMin") ? Number(form.get("baseSalaryMin")) : undefined,
    baseSalaryMax: form.get("baseSalaryMax") ? Number(form.get("baseSalaryMax")) : undefined,
    externalUrl: String(form.get("externalUrl") || ""),
    logoUrl: String(form.get("logoUrl") || ""),
    logoAlt: String(form.get("logoAlt") || ""),
    englishFriendly: form.get("englishFriendly") === "on",
    description: String(form.get("description") || ""),
    submittedAt: new Date().toISOString(),
  };

  console.log("[EMPLOYER_LEAD]", payload);

  await sendLeadEmail(
    `New employer lead: ${payload.company} — ${payload.title}`,
    process.env.LEADS_TO_EMAIL || "",
    `<pre>${JSON.stringify(payload, null, 2)}</pre>`
  );

  return NextResponse.redirect(new URL("/employers/thank-you", req.url), { status: 303 });
}

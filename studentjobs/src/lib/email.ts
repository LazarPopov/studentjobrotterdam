// src/lib/email.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendLeadEmail(subject: string, to: string, html: string) {
  if (!process.env.RESEND_API_KEY || !to) return;
  await resend.emails.send({ from: "Leads <noreply@domakin.nl>", to, subject, html });
}

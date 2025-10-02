// src/app/api/lead/route.ts
export async function POST(req: Request) {
  const data = await req.formData();
  // Honeypot (ignore bots)
  if ((data.get("website") as string)?.length) {
    return new Response("ok", { status: 200 });
  }
  // TODO: send to your CRM/email/DB
  console.log("NEWSLETTER_LEAD", Object.fromEntries(data.entries()));
  return Response.redirect(new URL("/thank-you?type=newsletter", req.url), 303);
}

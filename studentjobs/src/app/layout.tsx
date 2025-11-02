// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Student Jobs Rotterdam",
  description:
    "Find student jobs in Rotterdam — English-friendly roles, fast apply tips, and real pay ranges.",
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-WT8SB7T6";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* GTM loader (head) */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Click delegation for simple data-attributes based tracking */}
        <Script id="gtm-delegation" strategy="afterInteractive">
          {`
            (function () {
              const getExtra = (el) =>
                Object.fromEntries(
                  Object.entries(el.dataset)
                    .filter(([k]) => k.startsWith("gtmProp"))
                    .map(([k, v]) => [k.replace(/^gtmProp/, "").replace(/[A-Z]/g, m => "_"+m.toLowerCase()).replace(/^_/, ""), v])
                );

              document.addEventListener("click", function (e) {
                const target = (e.target as HTMLElement).closest("[data-gtm-event]");
                if (!target) return;

                const event = (target as HTMLElement).dataset.gtmEvent!;
                const label = (target as HTMLElement).dataset.gtmLabel;
                const value = (target as HTMLElement).dataset.gtmValue;

                // Optionally collect values from inputs when specified
                let collected = {};
                const collect = (target as HTMLElement).dataset.gtmCollect;
                if (collect) {
                  try {
                    collected = collect.split(",").reduce((acc, pair) => {
                      const [key, selector] = pair.split(":").map(s => s.trim());
                      const el = document.querySelector(selector) as HTMLInputElement | HTMLSelectElement | null;
                      acc[key] = el ? (("value" in el && el.value) || el.textContent || "") : "";
                      return acc;
                    }, {} as Record<string, any>);
                  } catch {}
                }

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event,
                  event_label: label,
                  event_value: value ? Number(value) : undefined,
                  ...getExtra(target as HTMLElement),
                  ...collected,
                });
              }, { capture: true });
            })();
          `}
        </Script>
      </head>

      <body className="min-h-svh bg-white text-slate-900 flex flex-col">
        {/* GTM noscript (body top) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Plausible (optional) */}
        <Script
          defer
          data-domain="studentjobsrotterdam.nl"
          src="https://plausible.io/js/script.js"
        />

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="50xDoV1Gr1jgFxRU/Tgzsw"
          strategy="afterInteractive"
        />

        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

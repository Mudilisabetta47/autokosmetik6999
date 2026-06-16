import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://autokosmetik-lilienthal.de";

interface SitemapImage {
  loc: string;
  title?: string;
  caption?: string;
}

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  images?: SitemapImage[];
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);

        const entries: SitemapEntry[] = [
          {
            path: "/",
            changefreq: "daily",
            priority: "1.0",
            images: [
              {
                loc: `${BASE_URL}/og.jpg`,
                title: "Autokosmetik Lilienthal – KFZ-Aufbereitung Bremen & Osterholz",
                caption: "Professionelle Fahrzeugaufbereitung in Lilienthal, Bremen und Umgebung",
              },
            ],
          },
          {
            path: "/galerie",
            changefreq: "weekly",
            priority: "0.8",
            images: [
              {
                loc: `${BASE_URL}/og.jpg`,
                title: "Galerie – Autokosmetik Lilienthal",
                caption: "Ergebnisse aus Lackaufbereitung, Versiegelung und Innenpflege",
              },
            ],
          },
          { path: "/impressum", changefreq: "yearly", priority: "0.2" },
          { path: "/datenschutz", changefreq: "yearly", priority: "0.2" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            ...(e.images?.flatMap((img) => [
              `    <image:image>`,
              `      <image:loc>${img.loc}</image:loc>`,
              img.title ? `      <image:title>${img.title}</image:title>` : null,
              img.caption ? `      <image:caption>${img.caption}</image:caption>` : null,
              `    </image:image>`,
            ]) ?? []),
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

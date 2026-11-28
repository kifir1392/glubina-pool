import type { Metadata, Viewport } from "next";
import { Golos_Text, Unbounded } from "next/font/google";
import "./globals.css";

// Самохостинг шрифтов через next/font: без запросов к Google из браузера
const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-golos",
});
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  // КРИТИЧНО: базовый URL для абсолютных ссылок в og:image
  metadataBase: new URL("https://glubina-pool.ru"),
  title: "Глубина — Строительство бассейнов под ключ в Краснодаре",
  description:
    "Проектирование и строительство бассейнов в Краснодаре и на юге России. Инженерный подход, точные расчёты, гарантия до 5 лет. 12 лет опыта, 150+ реализованных объектов.",
  keywords: [
    "строительство бассейнов Краснодар",
    "бассейны под ключ",
    "проектирование бассейнов",
    "инженерные системы бассейнов",
    "бетонные бассейны",
    "бассейны на юге России",
    "Glubina Pool",
    "Глубина бассейны",
  ],
  authors: [{ name: "Глубина", url: "https://glubina-pool.ru" }],
  creator: "Глубина",
  publisher: "Глубина",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://glubina-pool.ru",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://glubina-pool.ru",
    siteName: "Глубина",
    title: "Глубина — Строительство бассейнов под ключ в Краснодаре",
    description:
      "Инженерный подход к каждому проекту. Точные расчёты, проверенное оборудование, гарантия до 5 лет.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Глубина — строительство бассейнов под ключ в Краснодаре",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Глубина — Строительство бассейнов под ключ",
    description: "Инженерный подход, гарантия до 5 лет. Краснодар и юг России.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    yandex: "9e1ea5e5647779fc",
    google: "f0vbT6kolj9iH2HRG7Mwkkx-iSXbd8pzOyH985uZvPM",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050914",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://glubina-pool.ru/#organization",
  name: "Глубина",
  alternateName: "Glubina Pool",
  description:
    "Проектирование и строительство бассейнов под ключ в Краснодаре и на юге России. Инженерный подход, точные расчёты, гарантия до 5 лет.",
  url: "https://glubina-pool.ru",
  telephone: "+7 (918) 933 20 53",
  email: "info@glubina-pool.ru",
  image: "https://glubina-pool.ru/og-image.jpg",
  logo: "https://glubina-pool.ru/favicon.ico",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Краснодар",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.0355,
    longitude: 38.9753,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "19:00",
  },
  priceRange: "₽₽₽",
  foundingDate: "2014",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 45.0355,
      longitude: 38.9753,
    },
    geoRadius: "500 км",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${golos.variable} ${unbounded.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD разметка */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Яндекс.Метрика — счётчик 114646906 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(114646906, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/114646906"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
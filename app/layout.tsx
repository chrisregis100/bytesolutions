import type { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { montserrat } from "./fonts";
import "./globals.css";

const SITE_NAME = "byteSolutions";
const SITE_TAGLINE = "Solutions digitales pensées pour les humains";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Agence digitale basée à Cotonou qui conçoit des sites vitrine, applications web, expériences UX premium et intégrations IA accessibles et performantes.",
  url: "https://www.bytesolutions.bj",
  telephone: "+22900000000",
  email: "contact@bytesolutions.bj",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  areaServed: "Worldwide",
  sameAs: ["https://linkedin.com", "https://twitter.com"],
  slogan: SITE_TAGLINE,
  image: "https://www.bytesolutions.bj/logo-bytesolutions.svg",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bytesolutions.bj"),
  title: {
    default: `${SITE_NAME} · ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Agence digitale basée à Cotonou qui conçoit des sites vitrine, applications web, expériences UX premium et intégrations IA accessibles et performantes.",
  keywords: [
    "byteSolutions",
    "Agence digitale Bénin",
    "Sites vitrine",
    "Applications web sur mesure",
    "Intégration IA",
    "UX UI premium",
  ],
  authors: [{ name: SITE_NAME, url: "https://www.bytesolutions.bj" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.bytesolutions.bj",
    siteName: SITE_NAME,
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description:
      "Solutions digitales humaines et performantes pour les PME du monde entier, depuis Cotonou.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description:
      "Sites vitrine, applications sur mesure, IA et UX premium pour vos projets digitaux.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="bytesolutions">
      <body
        className={` ${montserrat.variable}  antialiased bg-(--light) text-(--dark)`}
      >
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:rounded-full focus:bg-secondary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu
        </a>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main id="contenu-principal" className="pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

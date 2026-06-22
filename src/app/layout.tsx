import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { site } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.sankarchessacademy.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sankar Chess Academy — Chess Coaching in Visakhapatnam",
    template: "%s | Sankar Chess Academy",
  },
  description:
    "FIDE-rated chess coaching in Visakhapatnam for ages 5–18. Sankar Balaga, 5+ years coaching experience, students rated by FIDE and winning district & state tournaments. Book a free demo class today.",
  keywords: [
    "Chess Academy Vizag",
    "Chess Coaching Visakhapatnam",
    "FIDE Chess Training Vizag",
    "Chess Classes Near Me",
    "Online Chess Coaching India",
    "Best Chess Academy in Vizag",
  ],
  authors: [{ name: site.founder }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.name,
    title: "Sankar Chess Academy — Master the Game. Master Your Mind.",
    description:
      "FIDE-rated chess coaching in Visakhapatnam for ages 5–18. Book a free demo class.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankar Chess Academy — Visakhapatnam",
    description: "FIDE-rated chess coaching for ages 5–18. Book a free demo class.",
  },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  founder: { "@type": "Person", name: site.founder, jobTitle: "FIDE-Rated Chess Coach" },
  description:
    "FIDE-rated chess coaching academy in Visakhapatnam offering beginner to elite chess training for ages 5-18.",
  url: siteUrl,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  areaServed: "Visakhapatnam",
  sameAs: [site.instagram, site.youtube],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-onyx text-ivory antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

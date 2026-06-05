import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Federico Hach \u2014 Zero Trust & Cybersecurity Architect | CCIE Security #57675",
  description:
    "Senior cybersecurity architect with 60+ enterprise deployments across LATAM. Zero Trust, PCI-DSS, AI-driven security automation. CCIE Security #57675 \u00B7 CISSP \u00B7 MBA.",
  keywords: [
    "Security Architect",
    "Zero Trust",
    "Cisco Secure Workload",
    "Microsegmentation",
    "PCI-DSS",
    "CCIE Security",
    "CISSP",
    "Python",
    "AI Automation",
    "Cybersecurity",
    "LATAM",
  ],
  openGraph: {
    title: "Federico Hach \u2014 Cybersecurity Architect",
    description:
      "60+ enterprise Zero Trust and PCI-DSS deployments across LATAM. Available for senior architect roles and consulting engagements.",
    type: "website",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Federico Hach",
  jobTitle: "Zero Trust & Cybersecurity Architect",
  description:
    "Senior cybersecurity architect with 60+ enterprise deployments across LATAM. CCIE Security #57675 · CISSP · MBA.",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/federico-miguel-hach-saval-1458a114/",
  ],
  knowsAbout: [
    "Zero Trust Architecture",
    "Microsegmentation",
    "PCI-DSS",
    "Cisco Secure Workload",
    "CISSP",
    "Security Automation",
    "AI Security",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

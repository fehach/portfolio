import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
  },
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

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
  title: "Federico Hach | Security Architect & Zero Trust Portfolio",
  description:
    "Portfolio of Federico Miguel Hach Saval — Cybersecurity and Zero Trust Architect with 16+ years of experience. AI-driven automation, microsegmentation, and Cisco Security solutions.",
  keywords: [
    "Security Architect",
    "Zero Trust",
    "Cisco Secure Workload",
    "Microsegmentation",
    "Python",
    "AI Automation",
    "Cybersecurity",
  ],
  openGraph: {
    title: "Federico Hach | Security Architect",
    description:
      "Cybersecurity and Zero Trust Architect — AI-driven automation & enterprise security solutions.",
    type: "website",
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

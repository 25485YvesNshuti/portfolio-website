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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Nshuti Yves | Junior Developer & Software Tester",
  description:
    "Portfolio of Nshuti Yves, a junior developer and software tester in Kigali, Rwanda, working with Java, Spring Boot, React, and secure APIs.",
  keywords: [
    "Nshuti Yves",
    "Junior Developer",
    "Software Tester",
    "Spring Boot",
    "React",
    "Kigali",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nshuti Yves | Junior Developer & Software Tester",
    description:
      "Building reliable web applications and secure APIs in Kigali, Rwanda.",
    siteName: "Nshuti Yves Portfolio",
    url: "/",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nshuti Yves profile preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nshuti Yves | Junior Developer & Software Tester",
    description:
      "Building reliable web applications and secure APIs in Kigali, Rwanda.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

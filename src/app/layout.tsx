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
  metadataBase: new URL("https://geocarve.et"),
  title: "GeoCarve | Heavy Machinery Import & Sales Ethiopia",
  description:
    "GeoCarve connects Ethiopia's construction, mining, road infrastructure, and industrial sectors with world-class heavy machinery from leading international manufacturers. Let's carve our future together.",
  keywords: [
    "GeoCarve",
    "Heavy Machinery Ethiopia",
    "Excavator import Ethiopia",
    "Ethiopia road construction equipment",
    "Wheel Loader Addis Ababa",
    "Mobile Crane Ethiopia",
    "Mining dump trucks Ethiopia",
    "Modjo dry port machinery clearance",
    "CAT Komatsu SANY Ethiopia",
    "Ethiopian heavy equipment sales"
  ],
  authors: [{ name: "GeoCarve Ethiopia" }],
  openGraph: {
    title: "GeoCarve | Heavy Machinery Import & Sales",
    description: "Let's carve our future together. Connecting Ethiopia's growth with international machinery.",
    url: "https://geocarve.et",
    siteName: "GeoCarve Ethiopia",
    images: [
      {
        url: "/images/hero-geocarve.jpg",
        width: 1200,
        height: 630,
        alt: "GeoCarve Heavy Machinery Ethiopia"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col">
        {children}
      </body>
    </html>
  );
}

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
  title: {
    default: "PB + Ocuaman Construction",
    template: "%s | PB + Ocuaman Construction",
  },
  description:
    "PB + Ocuaman Construction offers high-quality construction services in the Philippines including residential, commercial, and structural solutions.",
  keywords: [
    "construction Philippines",
    "contractor QC",
    "PB Ocuaman Construction",
    "building services",
  ],
  metadataBase: new URL("https://pbocuamanconstruction.com/"),
  openGraph: {
    title: "PB + Ocuaman Construction",
    description:
      "Your trusted partner for construction services in the Philippines.",
    url: "https://pbocuamanconstruction.com/",
    siteName: "PB + Ocuaman Construction",
    images: ["/pb-ocuaman-logo.png"],
    locale: "en_PH",
    type: "website",
  },
  icons: {
    icon: "/pb-ocuaman-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ScheduleButton } from "@/components/ScheduleButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

// --- SITE-WIDE METADATA ---
export const metadata: Metadata = {
  title: {
    default: "PB + Ocuaman Construction",
    template: "%s | PB + Ocuaman Construction",
  },
  description:
    "PB + Ocuaman Construction offers high-quality residential, commercial, and structural construction services in Quezon City, Philippines.",
  keywords: [
    "construction Quezon City",
    "contractor QC",
    "PB Ocuaman Construction",
    "building services QC",
    "residential construction QC",
    "commercial construction QC",
    "construction company QC",
    "general contractor Quezon City",
    "design and build QC",
    "house renovation QC",
    "home builder Quezon City",
    "fit-out contractor QC",
    "interior renovation QC",
    "structural contractor QC",
    "construction near me",
  ],
  metadataBase: new URL("https://pbocuamanconstruction.com/"),

  // --- OPEN GRAPH (SOCIAL SHARING) ---
  openGraph: {
    title: "PB + Ocuaman Construction",
    description:
      "Your trusted partner for construction services in Quezon City.",
    url: "https://pbocuamanconstruction.com/",
    siteName: "PB + Ocuaman Construction",
    images: [
      {
        url: "/pb-ocuaman-logo.png", // LOCAL PATH — faster and crawlable
        width: 512,
        height: 512,
        alt: "PB Ocuaman Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },

  // --- FAVICON (SITE ICON, GOOGLE & BROWSER) ---
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Primary, Google & legacy browsers
      { url: "/favicon.svg", type: "image/svg+xml" }, // Modern browsers
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }, // fallback
    ],
    apple: "/apple-touch-icon.png", // iOS / Safari
  },

  // --- PWA / theme color ---
  manifest: "/site.webmanifest",
  themeColor: "#8B8B6F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="grow">
          {children}
          <div className="fixed bottom-2 left-2 md:bottom-5 md:left-5 z-100">
            <ScheduleButton />
          </div>
        </main>
        <Toaster richColors position="top-center" />
        <Footer />
      </body>
    </html>
  );
}

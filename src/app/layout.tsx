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
    images: [
      {
        // Open Graph requires an absolute URL so social cards and scrapers can fetch it
        url: "https://pbocuamanconstruction.com/pb-ocuaman-logo.png",
        width: 512,
        height: 512,
        alt: "PB Ocuaman Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  // Keep this simple: use the PNG in /public as the site icon
  icons: {
    icon: "/pb-ocuaman-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Simple explicit favicon link — this is enough for most browsers */}
        <link rel="icon" href="/pb-ocuaman-logo.png" type="image/png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${montserrat.variable} antialiased min-h-[200vh] flex flex-col`}
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

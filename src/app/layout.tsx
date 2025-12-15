import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script"; 

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // select the weights you need
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
        className={`${montserrat.variable} antialiased min-h-[200vh] flex flex-col`}
      >
        <Header />
        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

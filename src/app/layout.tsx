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

// Updated metadata for local SEO (Quezon City instead of broader Philippines)
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
    "construction Quezon City Philippines",
    "commercial renovation QC",
    "office construction QC",
    "retail construction QC",
    "condo fit out Quezon City",
    "home improvement QC",
    "QC contractor",
    "Quezon City builder",
    "QC construction firm",
    "QC building contractor",
    "estimate construction QC",
    "reliable contractor QC",
    "top construction QC",
    "turnkey construction QC",
  ],
  metadataBase: new URL("https://pbocuamanconstruction.com/"),
  openGraph: {
    title: "PB + Ocuaman Construction",
    description:
      "Your trusted partner for construction services in Quezon City.",
    url: "https://pbocuamanconstruction.com/",
    siteName: "PB + Ocuaman Construction",
    images: [
      {
        url: "https://pbocuamanconstruction.com/pb-ocuaman-logo.png",
        width: 512,
        height: 512,
        alt: "PB Ocuaman Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  icons: {
    icon: "/pb-ocuaman-logo.png",
    apple: "/pb-ocuaman-logo.png",
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
        {/* Favicon for browsers and mobile platforms */}
        <link
          rel="icon"
          href="/pb-ocuaman-logo.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/pb-ocuaman-logo.png" />
        <meta name="theme-color" content="#8B8B6F" />

        {/* Organization schema for Google local/business knowledge panel & SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PB + Ocuaman Construction",
              url: "https://pbocuamanconstruction.com",
              logo: "https://pbocuamanconstruction.com/pb-ocuaman-logo.png",
              sameAs: [
                "https://www.facebook.com/pbocuamanconstruction",
                "https://www.instagram.com/pbocuamanconstruction/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+63 927 654 3210",
                  contactType: "customer service",
                  areaServed: "Quezon City",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 3F, 135 Kamias Road, Diliman",
                addressLocality: "Quezon City",
                addressRegion: "Metro Manila",
                postalCode: "1101",
                addressCountry: "PH",
              },
            }),
          }}
        />
      </head>
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

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceBenefits } from "@/components/ServiceBenefits";
import { FAQ } from "@/components/FAQ";
import ServicesCarousel from "@/components/ServicesCarousel";
import { ServiceDetails } from "@/components/ServiceDetails";
import ScrollToServiceDetails from "@/components/ScrollToServiceDetails";
import { servicesData } from "@/data/servicesData";
import { Metadata } from "next";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// --- SEO metadata for App Router, with explicit type for consistency ---
export const metadata: Metadata = {
  title: "Construction Services in Quezon City | PB + Ocuaman Construction",
  description:
    "PB + Ocuaman specializes in residential, commercial, and renovation construction services across Quezon City. Discover building, fit-out, and more in QC.",
  openGraph: {
    title: "Construction Services in Quezon City",
    description:
      "Quezon City's trusted partner for home, condo, commercial and renovation services.",
    url: "https://pbocuamanconstruction.com/services",
    images: [
      {
        url: "https://pbocuamanconstruction.com/pb-ocuaman-logo.png",
        width: 512,
        height: 512,
        alt: "Construction Services in Quezon City",
      },
    ],
  },
};

// --- Your logic and component ---
function getServiceFromParams(params: {
  [key: string]: string | string[] | undefined;
}) {
  const serviceId = params.service as string | undefined;
  if (serviceId) {
    const found = servicesData.find((s) => s.id === serviceId);
    if (found) return found;
  }
  return servicesData[0];
}

interface ServicesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const params = await searchParams;
  const activeService = getServiceFromParams(params);

  return (
    <section className="flex flex-col mb-10 gap-10">
      {/* --- SEO ONLY: sr-only for index/sitelink — real heading stays in design --- */}
      <h1 className="sr-only">
        Construction Services in Quezon City — PB + Ocuaman Construction
      </h1>
      <p className="sr-only">
        Specialist in residential, commercial, and renovation contracting for
        QC. Explore home building, renovation, condo fit-out, commercial
        construction and more.
      </p>
      {/* Auto-scroll to ServiceDetails when service param exists */}
      <ScrollToServiceDetails />

      {/* Banner Section (visual/design heading etc) */}
      <div className="grid grid-cols-2 gap-2 h-[80vh] md:h-[90vh] md:grid-cols-[35%_21%_21%_21%]">
        <div className="border h-full w-full col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-1">
          <div className="relative full ">
            <Image
              src="https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347325/services-hero-1_xk7y74.jpg"
              alt="Teamwork Image"
              fill
              className="object-cover"
              loading="lazy"
              unoptimized
            />

            <div className="absolute inset-0 bg-black/60 z-10"></div>
            {/* Breadcrumbs */}
            <Breadcrumb className="p-8 absolute top-0 left-0 text-white z-20">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="text-white">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[#D29E34]">
                    Services
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat flex flex-col justify-center md:items-center p-5">
            {/* Visible main heading for design/UI, not for SEO index */}
            <h1 className="text-2xl md:text-3xl mb-4 text-center">
              What We <span className="text-yellow-500">Offer</span>
            </h1>
            <p className="text-sm md:text-base max-w-80 text-center">
              Whether you&apos;re building, upgrading, or renovating, we&apos;re
              here to guide you.
            </p>
          </div>
        </div>
        <div className="border h-full w-full relative">
          <Image
            src="https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347323/services-hero-2_jqorbz.png"
            alt="Teamwork Image"
            fill
            className="object-cover"
            loading="lazy"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <p className="absolute bottom-0 text-center md:text-left text-white mb-3 md:mb-0 z-20 text-xs md:text-base w-full md:p-5">
            PLANNING AND DESIGNING
          </p>
        </div>
        <div className="border h-full w-full relative">
          <Image
            src="https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347315/services-hero-3_lxa5iz.png"
            alt="Services Hero"
            fill
            className="object-cover"
            loading="lazy"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <p className="absolute bottom-0 text-center md:text-left mb-2 text-white z-20 text-xs md:text-base w-full md:p-3">
            CONSTRUCTION PROJECT MANAGEMENT
          </p>
        </div>

        <div className="border h-full w-full col-span-2 md:col-span-1 relative">
          <Image
            src="https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347313/services-hero-4_pdhpou.png"
            alt="Teamwork Image"
            fill
            className="object-cover"
            loading="lazy"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <p className="absolute bottom-0 text-center md:text-left mb-2 text-white z-20 text-xs md:text-base w-full md:p-3">
            RENOVATION AND FIT-OUT SERVICES
          </p>
        </div>
      </div>
      <ServiceBenefits />
      <ServiceDetails data={activeService} />
      <ServicesCarousel />
      <FAQ />
    </section>
  );
}

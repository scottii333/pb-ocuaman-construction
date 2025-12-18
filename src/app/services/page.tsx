import React from "react";
import Image from "next/image";
import { ServiceBenefits } from "@/components/ServiceBenefits";
import { FAQ } from "@/components/FAQ";
import ServicesCarousel from "@/components/ServicesCarousel";
import { ServiceDetails } from "@/components/ServiceDetails";
import ScrollToServiceDetails from "@/components/ScrollToServiceDetails";
import { servicesData } from "@/data/servicesData";

// Get service from URL search params
async function getServiceFromParams(
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
) {
  const params = await searchParams;
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
  const activeService = await getServiceFromParams(searchParams);

  return (
    <section className="flex flex-col mb-10 gap-10">
      {/* Auto-scroll to ServiceDetails when service param exists */}
      <ScrollToServiceDetails />

      {/* Banner Section */}
      <div className="grid grid-cols-2 gap-2 h-160 md:grid-cols-[35%_21%_21%_21%]">
        <div className="border h-full w-full col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-1">
          <div className="relative full ">
            <Image
              src="/sample/sample.jpg"
              alt="Teamwork Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>
          <div className="bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat flex flex-col justify-center md:items-center p-5">
            <h1 className="text-2xl md:text-4xl mb-4 md:text-center">
              What We <span className="text-yellow-500">Offer</span>
            </h1>
            <p className="text-sm md:text-xl max-w-80 md:text-center">
              Whether you&apos;re building, upgrading, or renovating, we&apos;re
              here to guide you.
            </p>
          </div>
        </div>

        <div className="border h-full w-full relative">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <p
            className="
    absolute bottom-0
    left-1/2 -translate-x-1/2 text-center
    md:left-4 md:translate-x-0 md:text-left
    mb-2 text-white z-20 text-xs md:text-lg md:p-3
  "
          >
            PLANNING AND DESIGNING
          </p>
        </div>
        <div className="border h-full w-full relative">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <p
            className="
    absolute bottom-0
    left-1/2 -translate-x-1/2 text-center
    md:left-4 md:translate-x-0 md:text-left
    mb-2 text-white z-20 text-xs md:text-lg md:p-3
  "
          >
            CONSTRUCTION PROJECT MANAGEMENT
          </p>
        </div>

        <div className="border h-full w-full col-span-2 md:col-span-1 relative">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <p
            className="
    absolute bottom-0
    left-1/2 -translate-x-1/2 text-center
    md:left-4 md:translate-x-0 md:text-left
    mb-2 text-white z-20 text-xs md:text-lg md:p-3
  "
          >
            RENOVATION AND FIT-OUT SERVICES
          </p>
        </div>
      </div>

      <ServiceBenefits />

      {/* Pass the active service to details as a Server Component */}
      <ServiceDetails data={activeService} />

      {/* Carousel is still a Client Component but doesn't manage state */}
      <ServicesCarousel />

      <FAQ />
    </section>
  );
}

import React from "react";
import Image from "next/image";
import { JoinOurTeam } from "@/components/JoinOurTeam";
import { ApplyForJob } from "@/components/ApplyForJob";
import { FAQ } from "@/components/FAQ";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { OurTeam } from "@/components/OurTeam";
import { Metadata } from "next";

// Type-safe Next.js metadata for App Router!
export const metadata: Metadata = {
  title: "Careers at PB + Ocuaman Construction in Quezon City",
  description:
    "Join PB + Ocuaman Construction — explore job openings and construction career opportunities in Quezon City. Engineers, builders, and workers welcome!",
  openGraph: {
    title: "Careers at PB + Ocuaman Construction in QC",
    description:
      "Apply for careers at QC's trusted construction company. See open jobs, our team, and growth opportunities in construction.",
    url: "https://pbocuamanconstruction.com/careers",
    images: [
      {
        url: "https://pbocuamanconstruction.com/pb-ocuaman-logo.png",
        width: 512,
        height: 512,
        alt: "Careers at PB Ocuaman Construction",
      },
    ],
  },
};

export default function Careers() {
  return (
    <section className="flex flex-col">
      {/* SEO: Hidden heading/intro for Google/local SEO */}
      <h1 className="sr-only">
        Careers at PB + Ocuaman Construction in Quezon City
      </h1>
      <p className="sr-only">
        Build your career at PB + Ocuaman Construction! Find job openings and
        opportunities for skilled workers and professionals in QC.
      </p>

      {/* Banner Image */}
      <div className="relative w-full h-[80vh] lg:h-[90vh]">
        <Image
          src="https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766348350/careers-hero_dhpwgc.png"
          alt="Project page banner image"
          fill
          className="object-cover"
          priority
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
                Careers
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="p-8 absolute inset-0 flex flex-col items-center justify-end text-white z-10">
          <div className="text-2xl md:text-3xl">
            START BUILDING WITH <span className="text-[#D29E34]">US</span>
          </div>
          <div className="text-sm md:text-base text-center">
            Explore career opportunities in our
            <br className="md:hidden" /> construction team.
          </div>
        </div>
      </div>
      <JoinOurTeam />
      <OurTeam />
      <ApplyForJob />
      <FAQ />
    </section>
  );
}

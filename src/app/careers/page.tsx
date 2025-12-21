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

export default function careers() {
  return (
    <section className="flex flex-col gap-10">
      {" "}
      {/* Banner Image */}
      <div className=" relative w-full h-[80vh] lg:h-[90vh]">
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
            JOIN OUR <span className="text-[#D29E34]">TEAM</span>
          </div>
          <div className="text-sm md:text-base max-w-115 text-center">
            Be part of a growing construction team where your skills are valued,
            and your work makes an impact.
          </div>
        </div>
      </div>
      <JoinOurTeam />
      <ApplyForJob />
      <FAQ />
    </section>
  );
}

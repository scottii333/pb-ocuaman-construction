import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";

export default function services() {
  return (
    <section className="flex flex-col mb-10">
      <div className="grid grid-cols-2 gap-1 h-160 md:grid-cols-[35%_21%_21%_21%]">
        {/* First row full width */}
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
          <div className="bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat  flex flex-col justify-center md:items-center  p-5">
            <h1 className="text-2xl md:text-4xl mb-4 md:text-center">
              What We <span className="text-yellow-500">Offer</span>
            </h1>
            <p className="text-sm md:text-xl max-w-80 md:text-center">
              Whether you’re building, upgrading, or renovating, we’re here to
              guide you.
            </p>
          </div>
        </div>

        {/* Second row two columns */}
        <div className="border h-full w-full relative">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        <div className="border h-full w-full relative">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        {/* Third row full width */}
        <div className="border h-full w-full col-span-2 md:col-span-1 relative">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
      </div>
    </section>
  );
}

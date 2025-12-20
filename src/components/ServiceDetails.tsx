"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { ServiceData } from "@/data/servicesData";

interface ServiceDetailsProps {
  data: ServiceData;
}

export const ServiceDetails = ({ data }: ServiceDetailsProps) => {
  // Combine coverImage + thumbnails for gallery
  const allImages = [data.coverImage, ...data.thumbnails];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle next image
  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  // Handle previous image
  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section
      id="service-details-section"
      className="flex flex-col p-5 scroll-mt-20 bg-white py-10 w-[95%] md:w-[90%] mx-auto"
    >
      <div className="grid gap-4 md:grid-rows-[auto auto] md:grid-cols-2 md:grid-flow-row md:gap-6">
        {/* Main Image */}
        <div className="relative w-full h-64 md:h-110 order-1 md:order-1">
          <Image
            src="/sample/sample.jpg"
            alt="Main"
            fill
            className="object-cover"
          />

          {/* Main Image Display */}
          <div className="relative w-full h-64 md:h-110 order-1 md:order-1">
            <Image
              src={allImages[currentImageIndex]}
              alt={data.heading}
              fill
              className="object-cover"
            />
            {/* Left soft shadow overlay button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute inset-y-0 left-0 w-[60px] z-20 flex items-center justify-center
             bg-linear-to-r from-black/20 to-transparent
             hover:from-black/30 hover:to-transparent
             text-white  transition-colors cursor-pointer select-none
             outline-none focus:outline-none active:outline-none ring-0 focus:ring-0"
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-3xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
              />
            </button>

            {/* Right soft shadow overlay button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute inset-y-0 right-0 w-[60px] z-20 flex items-center justify-center
             bg-linear-to-l from-black/20 to-transparent
             hover:from-black/30 hover:to-transparent
             text-white  transition-colors cursor-pointer select-none
             outline-none focus:outline-none active:outline-none ring-0 focus:ring-0"
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-3xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
              />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto order-2 md:order-3 md:col-span-2 pb-5 no-scrollbar">
          {allImages.map((img, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0 cursor-pointer transition-all ${
                currentImageIndex === index ? "ring-2 ring-yellow-500" : ""
              }`}
            >
              <Image
                src={img}
                alt={`Thumb${index}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="order-3 md:order-2 md:col-span-1 mt-5">
          <h2 className="text-xl md:text-2xl font-medium mb-5 text-[#232b5f] uppercase">
            {data.heading}
          </h2>

          <ScrollArea className="md:h-75 h-auto w-full p-1">
            <p className="pr-5 text-gray-700">{data.description}</p>

            <Accordion type="single" collapsible className="w-full pr-5 mt-4">
              <AccordionItem value="how-it-works">
                <AccordionTrigger>How it works</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {data.accordion.howItWorks}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="estimated-timeline">
                <AccordionTrigger>Estimated timeline</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {data.accordion.timeline}
                  <p className="text-sm text-muted-foreground">
                    Note: Timelines vary by scope, jurisdiction, and site
                    conditions. We&apos;ll confirm a detailed schedule after the
                    design phase.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="starting-price">
                <AccordionTrigger>
                  Starting price & price guide
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {data.accordion.pricing}
                  <p className="text-sm text-muted-foreground">
                    Looking for a ballpark? We&apos;ll share a tailored range
                    after we review your plans, site, and priorities.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>

          <button className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat px-4 py-3 rounded text-white hover:bg-[#6e6e52] transition cursor-pointer w-full">
            REQUEST A FREE QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

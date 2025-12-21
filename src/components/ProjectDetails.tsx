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
import { ProjectData } from "@/data/projectsData";
import { FreeQuoteButton } from "./FreeQuoteButton";

interface ProjectDetailsProps {
  data: ProjectData;
}

export const ProjectDetails = ({ data }: ProjectDetailsProps) => {
  const allImages = [data.mainImage, ...data.galleryImages];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const isActive = (index: number) => currentImageIndex === index;

  return (
    <section
      id="project-details-section"
      className="flex flex-col p-5 scroll-mt-20 w-[95%] md:w-[90%] mx-auto"
    >
      <div className="grid gap-4 md:grid-rows-[auto auto] md:grid-cols-2 md:grid-flow-row md:gap-6">
        {/* Main Image */}
        <div className="relative w-full h-64 md:h-103 order-1 md:order-1">
          <Image
            src={allImages[currentImageIndex]}
            alt={data.title}
            fill
            className="object-cover"
          />

          {/* Left Navigation Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute inset-y-0 left-0 w-[60px] z-20 flex items-center justify-center bg-linear-to-r from-black/30 to-transparent hover:from-black/50 hover:to-transparent text-white transition-colors cursor-pointer select-none outline-none"
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-3xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
            />
          </button>

          {/* Right Navigation Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute inset-y-0 right-0 w-[60px] z-20 flex items-center justify-center bg-linear-to-l from-black/30 to-transparent hover:from-black/50 hover:to-transparent text-white transition-colors cursor-pointer select-none outline-none"
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-3xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
            />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto order-2 md:order-3 md:col-span-2 pb-5 no-scrollbar">
          {allImages.map((img, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0 cursor-pointer transition-all ${
                isActive(index) ? "ring-2 ring-yellow-500" : ""
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="order-3 md:order-2 md:col-span-1 my-5">
          <h2 className="text-xl md:text-2xl font-medium mb-5">
            {data.title} <br />
            <span className="text-yellow-500">{data.category}</span>
          </h2>

          <ScrollArea className="md:h-60 h-auto w-full p-1">
            <p className="pr-5 text-gray-700">{data.description}</p>

            <Accordion type="single" collapsible className="w-full pr-5 mt-4">
              <AccordionItem value="estimated-project-costs">
                <AccordionTrigger>Estimated project costs</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {data.accordion.costs}
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
            </Accordion>
          </ScrollArea>

          <FreeQuoteButton />
        </div>
      </div>
    </section>
  );
};

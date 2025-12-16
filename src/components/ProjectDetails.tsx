import React from "react";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const ProjectDetails = () => {
  return (
    <section className="flex flex-col p-5">
      <div className="grid gap-4 md:grid-rows-[auto auto] md:grid-cols-2 md:grid-flow-row md:gap-6">
        {/* Main Image */}
        <div className="relative w-full h-64 md:h-115 order-1 md:order-1">
          <Image
            src="/sample/sample.jpg"
            alt="Main"
            fill
            className="object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto order-2 md:order-3 md:col-span-2 pb-5  no-scrollbar">
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>
        </div>

        {/* Project Description */}
        <div className="order-3 md:order-2 md:col-span-1">
          <h2 className="text-xl md:text-2xl font-medium mb-5">
            DECENA RESIDENCE <br />
            <span className="text-yellow-500">RESIDENTIAL</span>
          </h2>

          <ScrollArea className="md:h-80 h-auto w-full p-1">
            <p className="pr-5">
              A modern and elegant private home, Decena Residence features clean
              lines, open layouts, and a sophisticated use of monochromatic
              tones. Designed for both functionality and style, it offers smart
              spatial planning, quality finishes, and personalized interior
              details, creating a comfortable and contemporary living space with
              lasting elegance.
            </p>

            <Accordion type="single" collapsible className="w-full pr-5 mt-4">
              <AccordionItem value="estimated-project-costs">
                <AccordionTrigger>Estimated project costs</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>A guided, step-by-step path from idea to handover:</p>
                  <ol className="list-decimal ml-5 space-y-2">
                    <li>
                      Free discovery call — clarify goals, budget, style, and
                      timeline.
                    </li>
                    <li>
                      Design & budget alignment — floor plan options, materials,
                      and a transparent cost breakdown.
                    </li>
                    <li>
                      Permits & approvals — we coordinate with local authorities
                      and HOA (where applicable).
                    </li>
                    <li>
                      Build phase — foundations, framing, MEP, finishes,
                      inspections.
                    </li>
                    <li>
                      Handover — final walkthrough, punch list, warranties, and
                      move-in.
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="estimated-timeline">
                <AccordionTrigger>Estimated timeline</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Discovery & planning: 1–2 weeks</li>
                    <li>Design & budget: 2–4 weeks</li>
                    <li>
                      Permits & approvals: 2–8+ weeks (varies by city/state)
                    </li>
                    <li>
                      Construction: 4–7 months (size, site, and weather
                      dependent)
                    </li>
                    <li>Handover & move‑in: ~1 week</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Note: Timelines vary by scope, jurisdiction, and site
                    conditions. We’ll confirm a detailed schedule after the
                    design phase.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>

          <button className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat px-4 py-3 rounded text-white mt-4 hover:bg-[#6e6e52] transition cursor-pointer w-full">
            REQUEST A FREE QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

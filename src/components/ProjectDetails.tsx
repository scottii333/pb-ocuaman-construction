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
        <div className="relative w-full h-64 md:h-110 order-1 md:order-1">
          <Image
            src="/sample/sample.jpg"
            alt="Main"
            fill
            className="object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto order-2 md:order-3 md:col-span-2 pb-5">
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
          </div>{" "}
          <div className="relative w-30 h-30 sm:w-50 sm:h-50 md:w-70 md:h-70 shrink-0">
            <Image
              src="/sample/sample.jpg"
              alt="Thumb1"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Project Description */}
        <div className=" order-3 md:order-2 md:col-span-1">
          <h2 className="text-xl md:text-2xl font-medium mb-5">
            BUILD MY FIRST HOME
          </h2>
          <ScrollArea className="md:h-80 h-auto w-full   p-1">
            <p>
              We help first-time homeowners turn their dream home into reality
              with a guided, stress-free process. From planning your ideal
              layout to selecting materials that fit your budget, we make sure
              your first home is built with quality, comfort, and long-term
              value in mind.
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full pr-5 mt-4"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Product Information</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Shipping Details</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We offer worldwide shipping through trusted courier
                    partners. Standard delivery takes 3-5 business days, while
                    express shipping ensures delivery within 1-2 business days.
                  </p>
                  <p>
                    All orders are carefully packaged and fully insured. Track
                    your shipment in real-time through our dedicated tracking
                    portal.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We stand behind our products with a comprehensive 30-day
                    return policy. If you&apos;re not completely satisfied,
                    simply return the item in its original condition.
                  </p>
                  <p>
                    Our hassle-free return process includes free return shipping
                    and full refunds processed within 48 hours of receiving the
                    returned item.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>{" "}
          <button className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat px-4 py-3 rounded text-white mt-4 hover:bg-[#6e6e52] transition cursor-pointer w-full ">
            REQUEST A FREE QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

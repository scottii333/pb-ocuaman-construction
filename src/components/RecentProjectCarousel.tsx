"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { recentProjectsData } from "@/data/recentProjectData"; // adjust path if needed

export const RecentProjectCarousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const c = carouselRef.current;
    if (!c) return;
    const amount = 670; // min-w-[650px] + gap-5
    c.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // chunk helper
  const chunk = <T,>(arr: T[], size: number): T[][] => {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

  // Use the single RecentProject object (first one) and its images array
  const project = recentProjectsData[0];
  const images = project?.images ?? [];

  // Create slides of up to 3 images each (keeps your original 3-image-per-slide layout)
  const slides = chunk(images, 3);

  return (
    <>
      {/* Project Image Carousel */}
      <div className="flex flex-col p-10 md:px-20">
        <h3 className="text-center text-xl md:text-2xl font-medium">
          OUR MOST <span className="text-[#D29E34] ">RECENT</span> PROJECTS
        </h3>
        <p className="text-center"> Crafted with quality and care. </p>

        <div
          ref={carouselRef}
          className="flex gap-2 h-[500px] w-full overflow-x-auto overflow-y-hidden p-5 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {slides.map((slideImgs, slideIndex) => {
            // Ensure we have explicit variables for the three slots
            const img1 = slideImgs[0];
            const img2 = slideImgs[1];
            const img3 = slideImgs[2];

            // Alternate between the two grid layouts:
            // - Even slideIndex: Layout A (top two columns, bottom full-width)
            // - Odd slideIndex: Layout B (left big spanning 2 rows, right stacked two)
            const isLayoutA = slideIndex % 2 === 0;

            if (isLayoutA) {
              // Layout A: top row two columns, bottom full-width
              return (
                <div
                  key={`slide-${slideIndex}`}
                  className="grid grid-cols-1 gap-2 min-w-[650px]"
                  aria-label={`Recent projects slide ${slideIndex + 1}`}
                >
                  {/* First row:  2 columns */}
                  <div className="grid grid-cols-2 gap-2 w-full h-full">
                    <div className="relative w-full h-full">
                      {img1 ? (
                        <Image
                          src={img1}
                          alt={`Recent project image 1`}
                          fill
                          className="object-cover"
                          loading="lazy"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>
                    <div className="relative w-full h-full">
                      {img2 ? (
                        <Image
                          src={img2}
                          alt={`Recent project image 2`}
                          fill
                          className="object-cover"
                          loading="lazy"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>
                  </div>

                  {/* Second row: full width */}
                  <div className="relative w-full h-full">
                    {img3 ? (
                      <Image
                        src={img3}
                        alt={`Recent project image 3`}
                        fill
                        className="object-cover"
                        loading="lazy"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full" />
                    )}
                  </div>
                </div>
              );
            } else {
              // Layout B: left spans 2 rows, right has two stacked images
              return (
                <div
                  key={`slide-${slideIndex}`}
                  className="grid grid-cols-2 gap-2 min-w-[650px]"
                  aria-label={`Recent projects slide ${slideIndex + 1}`}
                >
                  {/* Left side: one image, spans 2 rows */}
                  <div className="relative row-span-2 h-full">
                    {img1 ? (
                      <Image
                        src={img1}
                        alt={`Recent project image 1`}
                        fill
                        className="object-cover"
                        loading="lazy"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full" />
                    )}
                  </div>

                  {/* Right side: two stacked images */}
                  <div className="relative h-full min-h-0">
                    {img2 ? (
                      <Image
                        src={img2}
                        alt={`Recent project image 2`}
                        fill
                        className="object-cover"
                        loading="lazy"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full" />
                    )}
                  </div>
                  <div className="relative h-full min-h-0">
                    {img3 ? (
                      <Image
                        src={img3}
                        alt={`Recent project image 3`}
                        fill
                        className="object-cover"
                        loading="lazy"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full" />
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="flex gap-5 justify-end">
          <button
            type="button"
            aria-label="Previous"
            title="Previous"
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition flex items-center justify-center px-10 py-2"
            style={{ backgroundSize: "200px 200px" }}
            onClick={() => scrollByAmount("left")}
          >
            <FontAwesomeIcon icon={faArrowLeftLong} className="text-3xl" />
          </button>

          <button
            type="button"
            aria-label="Next"
            title="Next"
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition flex items-center justify-center px-10 py-2"
            style={{ backgroundSize: "200px 200px" }}
            onClick={() => scrollByAmount("right")}
          >
            <FontAwesomeIcon icon={faArrowRightLong} className="text-3xl" />
          </button>
        </div>
      </div>
    </>
  );
};

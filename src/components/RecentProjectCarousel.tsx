"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";

export const RecentProjectCarousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const c = carouselRef.current;
    if (!c) return;
    const amount = 670; // min-w-[650px] + gap-5
    c.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      {/* Project Image Carousel */}
      <div className="flex  flex-col  p-10">
        <h3 className="text-center">
          OUR MOST <span className="text-[#D29E34] font-semibold">RECENT</span>{" "}
          PROJECTS
        </h3>
        <p className="text-center"> Crafted with quality and care. </p>
        <div
          ref={carouselRef}
          className="flex gap-2 h-[500px] w-full overflow-x-auto overflow-y-hidden p-5 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          <div className="grid grid-cols-1 gap-2 min-w-[650px]">
            {/* First row:  2 columns, each 100px tall */}
            <div className="grid grid-cols-2 gap-2 w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/sample/sample.jpg"
                  alt="Project"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/sample/sample.jpg"
                  alt="Project"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>
            {/* Second row: 1 column, full width, also 100px tall */}
            <div className="relative w-full h-full">
              <Image
                src="/sample/sample.jpg"
                alt="Project"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 min-w-[650px] ">
            {/* Left side: one image, spans 2 rows */}
            <div className="relative row-span-2 h-full">
              <Image
                src="/sample/sample.jpg"
                alt="Project"
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Right side: two stacked images */}
            <div className="relative  h-full min-h-0">
              <Image
                src="/sample/sample.jpg"
                alt="Project"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="relative  h-full min-h-0">
              <Image
                src="/sample/sample.jpg"
                alt="Project"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-end mt-5">
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

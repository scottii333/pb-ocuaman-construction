"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { servicesData } from "@/data/servicesData";

export default function ServicesCarousel() {
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll by one card (+ gap) per click
  const scrollByAmount = (dir: "left" | "right") => {
    const c = servicesRef.current;
    if (!c) return;
    const amount = 320 + 20;
    c.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="p-5">
      <p className="text-[#232b5f] text-sm md:text-xl">
        PICK THE <span className="text-[#c3881c]">SERVICE</span> THAT FITS YOUR
        NEEDS
      </p>

      <div className="flex mt-5 gap-5">
        <h4 className="text-2xl md:text-4xl text-[#232b5f]">I WANT TO... </h4>
      </div>

      {/* Horizontal-only scroll row with hidden scrollbar + smooth behavior + snap */}
      <div
        ref={servicesRef}
        className="mt-8 flex gap-5 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {servicesData.map((service) => (
          <Link
            key={service.id}
            href={`/services?service=${service.id}`}
            className="shadow-lg w-50 md:w-80 h-50 md:h-80 relative overflow-hidden flex-none snap-start cursor-pointer transition-transform hover:scale-102 block"
          >
            <Image
              src={service.coverImage}
              alt={service.title}
              fill
              className="object-cover w-full h-full z-0"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-center px-5 md:px-15">
              <FontAwesomeIcon
                icon={service.icon}
                className="text-2xl md:text-3xl text-white"
                aria-hidden="true"
              />
              <h3 className="text-sm md:text-base text-white leading-tight">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex gap-2 md:gap-5 justify-end mt-5">
        {/* <button
          type="button"
          aria-label="Previous"
          title="Previous"
          className="hidden md:flex bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition items-center justify-center px-10 py-2"
          style={{ backgroundSize: "200px 200px" }}
          onClick={() => scrollByAmount("left")}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="text-xl" />
        </button>

        <button
          type="button"
          aria-label="Next"
          title="Next"
          className="hidden md:flex bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition items-center justify-center px-10 py-2"
          style={{ backgroundSize: "200px 200px" }}
          onClick={() => scrollByAmount("right")}
        >
          <FontAwesomeIcon icon={faArrowRightLong} className="text-xl" />
        </button> */}

        <button
          type="button"
          aria-label="Previous"
          title="Previous"
          className="flex bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition items-center justify-center px-6 md:px-10 py-2"
          style={{ backgroundSize: "200px 200px" }}
          onClick={() => scrollByAmount("left")}
        >
          <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
        </button>

        <button
          type="button"
          aria-label="Next"
          title="Next"
          className="flex bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition items-center justify-center px-6 md:px-10 py-2"
          style={{ backgroundSize: "200px 200px" }}
          onClick={() => scrollByAmount("right")}
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
        </button>
      </div>
    </div>
  );
}

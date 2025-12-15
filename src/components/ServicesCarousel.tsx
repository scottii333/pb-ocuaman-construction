"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
  faHouseChimneyWindow,
  faHouseChimneyMedical,
  faScrewdriverWrench,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesCarousel() {
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll by one card (+ gap) per click
  const scrollByAmount = (dir: "left" | "right") => {
    const c = servicesRef.current;
    if (!c) return;
    const amount = 320 + 20; // w-80 (320px) + gap-5 (20px)
    c.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="p-10">
      <p className="text-[#232b5f] text-[24px] ">
        PICK THE <span className="text-[#c3881c]">SERVICES</span> THAT FITS YOUR
        NEEDS
      </p>

      <div className="flex  mt-5 gap-5">
        <h4 className="text-[30px] font-semibold text-[#232b5f]">I WANT TO</h4>
      </div>

      {/* Horizontal-only scroll row with hidden scrollbar + smooth behavior + snap */}
      <div
        ref={servicesRef}
        className="mt-10 flex gap-5 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        <div className="shadow-lg w-80 h-80 relative overflow-hidden flex-none snap-start">
          <Image
            src="/sample/sample.jpg"
            alt="Service Image"
            fill
            className="object-cover w-full h-full z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-center px-15">
            <FontAwesomeIcon
              icon={faHouseChimneyWindow}
              className="text-3xl text-white"
              aria-hidden="true"
            />
            <h3 className="text-white text-[24px] font-semibold">
              BUILD MY DREAM HOME
            </h3>
          </div>
        </div>

        <div className="shadow-lg w-80 h-80 relative overflow-hidden flex-none snap-start">
          <Image
            src="/sample/sample.jpg"
            alt="Service Image"
            fill
            className="object-cover w-full h-full z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-center px-15">
            <FontAwesomeIcon
              icon={faHouseChimneyMedical}
              className="text-3xl text-white"
              aria-hidden="true"
            />
            <h3 className="text-white text-[24px] font-semibold">
              UPGRADE TO A BIGGER HOME
            </h3>
          </div>
        </div>

        <div className="shadow-lg w-80 h-80 relative overflow-hidden flex-none snap-start">
          <Image
            src="/sample/sample.jpg"
            alt="Service Image"
            fill
            className="object-cover w-full h-full z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-center px-6">
            <FontAwesomeIcon
              icon={faHandHoldingDollar}
              className="text-3xl text-white"
              aria-hidden="true"
            />
            <h3 className="text-white text-[24px] font-semibold">
              BUILD AN INVESTMENT PROPERTY
            </h3>
          </div>
        </div>
        <div className="shadow-lg w-80 h-80 relative overflow-hidden flex-none snap-start">
          <Image
            src="/sample/sample.jpg"
            alt="Service Image"
            fill
            className="object-cover w-full h-full z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-center px-15">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              className="text-3xl text-white"
              aria-hidden="true"
            />
            <h3 className="text-white text-[24px] font-semibold">
              RENOVATE MY PROPERTY
            </h3>
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
  );
}

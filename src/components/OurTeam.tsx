"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faPeopleGroup,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { teamMembersData } from "@/data/teamMembersData";

export const OurTeam = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll by one card (+ gap) per click
  const scrollByAmount = (dir: "left" | "right") => {
    const c = servicesRef.current;
    if (!c) return;

    // Get first card width dynamically
    const cardWidth = c.firstChild
      ? (c.firstChild as HTMLElement).clientWidth
      : 320;
    const gap = 20; // same as your md:gap-10 / gap-5
    const amount = cardWidth + gap;

    c.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_2.5fr] gap-10 lg:gap-0 w-[85%] lg:w-[55%] mx-auto mb-20 items-end">
        {/* Left content */}
        <div className="text-justify md:text-start">
          <div className="text-2xl md:text-3xl mb-3 flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              className="text-lg text-[#232b5f]"
            />
            Meet the <span className="text-[#D29E34]">Team</span>
          </div>
          <div className="text-sm md:text-base">
            Our team works closely with you at every stage, ensuring your vision
            is brought to life with quality craftsmanship, attention to detail,
            and safety as a top priority.
            <br /> <br />
            We are committed to completing every project on time and on budget
            while maintaining honesty, integrity, and open communication.
          </div>
        </div>

        {/* Right image */}
        <div className="lg:flex lg:justify-end">
          <Image
            src="/aboutUs-experts.png"
            alt="About Banner"
            width={800}
            height={800}
            className="w-full h-auto lg:max-w-[400px]"
          />
        </div>
      </div>{" "}
      <div className="w-[90%] mx-auto flex flex-col gap-10 pb-10">
        <div className="flex justify-between">
          <div className="text-xl md:text-3xl">
            Working Together to Bring <br /> Your Dream{" "}
            <span className="text-[#D29E34]">Home to Life</span>.
          </div>
          <div className="flex gap-5 items-end">
            <button
              className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white hidden md:block cursor-pointer hover:bg-[#6e6e52] transition"
              style={{ backgroundSize: "200px 200px" }}
              onClick={() => scrollByAmount("left")}
            >
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="w-8 h-8 text-white"
              />
            </button>
            <button
              className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white hidden md:block cursor-pointer hover:bg-[#6e6e52] transition"
              style={{ backgroundSize: "200px 200px" }}
              onClick={() => scrollByAmount("right")}
            >
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="w-8 h-8 text-white"
              />
            </button>
          </div>
        </div>
        <div
          ref={servicesRef}
          className="flex gap-5 md:gap-10 overflow-x-auto no-scrollbar"
        >
          {teamMembersData.map((member) => (
            <div
              key={member.id}
              className="relative inline-block w-50 md:w-80 shrink-0"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-50 md:w-80 h-auto"
              />
              <div className="absolute bottom-0 left-0 h-20 w-full bg-black/60 text-lg text-white flex items-center justify-center">
                {member.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 md:gap-5 justify-end -mt-5">
          <button
            type="button"
            aria-label="Previous"
            title="Previous"
            className="flex md:hidden bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition items-center justify-center px-5 py-2"
            style={{ backgroundSize: "200px 200px" }}
            onClick={() => scrollByAmount("left")}
          >
            <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
          </button>

          <button
            type="button"
            aria-label="Next"
            title="Next"
            className="flex md:hidden bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition items-center justify-center px-5 py-2"
            style={{ backgroundSize: "200px 200px" }}
            onClick={() => scrollByAmount("right")}
          >
            <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

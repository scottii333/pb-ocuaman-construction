"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; // Added hooks
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faScrewdriverWrench,
  faLocationDot,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export const JoinOurTeam = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleApplyClick = () => {
    // The ID of the section to scroll to
    const targetId = "apply-form-section";
    const element = document.getElementById(targetId);

    // If we are already on the careers page and the element exists, scroll smoothly
    if (pathname === "/careers" && element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If we are on another page, navigate to careers with the hash
      router.push(`/careers#${targetId}`);
    }
  };

  return (
    <section className="flex flex-col items-center py-10 ">
      <div className="grid grid-cols-1 gap-5 md:gap-0 lg:grid-cols-[2fr_3fr] mt-5 place-items-center">
        <div className="relative w-full max-w-[300px] md:max-w-[400px] h-[300px] md:h-[400px] mx-auto">
          {/* First image: top-left */}
          <div className="absolute top-0 left-0 w-50 h-50 md:w-70 md:h-70">
            <Image
              src="/sample/sample.jpg"
              alt="Top Left"
              fill
              className="object-cover"
            />
          </div>

          {/* Second image: bottom-right */}
          <div className="absolute bottom-0 right-0 w-50 h-50 md:w-70 md:h-70 shadow-sm">
            <Image
              src="/sample/sample.jpg"
              alt="Bottom Right"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="p-0 md:p-10 w-full min-h-100 gap-5 md:gap-0 flex flex-col">
          <div className="p-5 border-b">
            <h2 className="text-3xl">
              JOIN OUR <span className="text-yellow-500">TEAM</span>
            </h2>
            <p className="mt-5 max-w-120 text-sm md:text-base md:px-0">
              Be part of a growing construction team where your skills are
              valued, and your work makes an impact.
            </p>
          </div>
          <div className="p-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl">
                <FontAwesomeIcon
                  icon={faHelmetSafety}
                  className="text-lg md:text-xl text-yellow-500 mr-2"
                />{" "}
                FOREMAN
              </h3>
              <p>P1200/Day</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-5 pt-0 px-5 border-b">
            <h3 className="text-lg md:text-xl">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="text-lg md:text-xl text-yellow-500 mr-2"
              />{" "}
              WELDER{" "}
              <span className="text-sm md:text-base">(WITH COMPLETE TEAM)</span>
            </h3>
            <p>P900/Day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
            <div className="flex">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-lg md:text-2xl text-[#232b5f] mr-2"
              />
              <p>Olongapo City, Zambales</p>
            </div>
            <div className="flex ">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-lg md:text-2xl text-[#232b5f] mr-2"
              />
              <p>Olongapo City, Zambales</p>
            </div>
          </div>
          <p className="text-gray-600 pl-5 pb-0 md:pb-5">
            (WILLING TO BE RELOCATED)
          </p>
          <button
            onClick={handleApplyClick}
            className="bg-[#8B8B6F] gap-3 bg-[url('/texture/green-cup.png')] bg-repeat w-50 h-10 text-white hover:bg-[#7a7a5f] cursor-pointer ml-5 flex items-center justify-center"
          >
            Apply Now{" "}
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-lg text-white ml-2"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

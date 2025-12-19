"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { projectsData } from "@/data/projectsData";

export const ExploreProject = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [fadeDirection, setFadeDirection] = useState<"left" | "right" | null>(
    null
  );

  const currentProject = projectsData[currentProjectIndex];

  // Handle next project
  const handleNext = () => {
    setFadeDirection("left");
    setTimeout(() => {
      setCurrentProjectIndex((prev) =>
        prev === projectsData.length - 1 ? 0 : prev + 1
      );
      setFadeDirection(null);
    }, 300);
  };

  // Handle previous project
  const handlePrev = () => {
    setFadeDirection("right");
    setTimeout(() => {
      setCurrentProjectIndex((prev) =>
        prev === 0 ? projectsData.length - 1 : prev - 1
      );
      setFadeDirection(null);
    }, 300);
  };

  return (
    <section className="p-10 flex flex-col gap-5 w-[85%] mx-auto">
      <h3 className="text-2xl">
        EXPLORE <span className="text-yellow-500">MORE</span> OF OUR PROJECTS
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-100">
        {/* Image with fade animation */}
        <div
          className={`relative h-auto md:h-100 w-full transition-all duration-300 ${
            fadeDirection === "left"
              ? "opacity-0 translate-x-10"
              : fadeDirection === "right"
              ? "opacity-0 -translate-x-10"
              : "opacity-100 translate-x-0"
          }`}
        >
          <Image
            src={currentProject.mainImage}
            alt={currentProject.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Text with fade animation */}
        <div
          className={`bg-[#f2f2f2] bg-[url('/texture/wall-texture.png')] bg-repeat h-auto md:h-100 flex flex-col justify-between p-10 gap-5 transition-all duration-300 ${
            fadeDirection === "left"
              ? "opacity-0 translate-x-10"
              : fadeDirection === "right"
              ? "opacity-0 -translate-x-10"
              : "opacity-100 translate-x-0"
          }`}
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium">
            {currentProject.title.split(" ").map((word, idx, arr) => (
              <React.Fragment key={idx}>
                {word}
                {idx < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p>{currentProject.description}</p>
          </div>

          <Link
            href={`/projects?project=${currentProject.id}`}
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white w-fit mt-2 cursor-pointer hover:bg-[#6e6e52] transition flex items-center gap-5 text-sm"
            style={{ backgroundSize: "200px 200px" }}
          >
            LOVE THIS DESIGN? DISCOVER MORE
            <FontAwesomeIcon icon={faArrowRightLong} className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="flex gap-5 justify-end">
        <button
          type="button"
          aria-label="Previous"
          title="Previous"
          className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition flex items-center justify-center px-10 py-2"
          style={{ backgroundSize: "200px 200px" }}
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="text-xl" />
        </button>

        <button
          type="button"
          aria-label="Next"
          title="Next"
          className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition flex items-center justify-center px-10 py-2"
          style={{ backgroundSize: "200px 200px" }}
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faArrowRightLong} className="text-xl" />
        </button>
      </div>
    </section>
  );
};

"use client";

import { Marquee } from "./ui/marquee";
import React from "react";

export const FactsAboutUs = () => {
  return (
    <div
      className="flex flex-col gap-10 p-10 justify-center items-center w-full min-h-[200px] text-[#6A6F4C] bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat text-center"
      style={{ backgroundSize: "200px 200px" }}
    >
      <h3 className="text-lg">A FEW MORE FACTS ABOUT US IN NUMBERS</h3>

      {/* Marquee wrapper */}
      <Marquee
        gap={50}
        speed={60} // base speed
        speedOnHover={40} // slow down on hover for readability
        direction="horizontal"
        fadeEdges
        fadeWidth={80}
        pauseOnTap
        draggable
        className="w-full"
      >
        {/* Each stat item */}
        <div className="flex flex-col gap-2 min-w-[180px]">
          <div className="flex justify-center items-center text-5xl">10+</div>
          <p>Years of Experience</p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <div className="flex justify-center items-center text-5xl">150+</div>
          <p>Completed Projects</p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <div className="flex justify-center items-center text-5xl">98%</div>
          <p>Client Satisfaction</p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <div className="flex justify-center items-center text-5xl">30+</div>
          <p>Workforce</p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <div className="flex justify-center items-center text-5xl">95%</div>
          <p>Project Delivery</p>
        </div>
      </Marquee>
    </div>
  );
};

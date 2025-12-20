"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { certificationsData } from "@/data/certificationsData";

export const OurCertifications = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 my-20 w-full lg:w-[95%] lg:mr-auto">
        <div>
          <Image
            src="/office.png"
            alt="About Banner"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center w-[90%] mx-auto">
          <div className="text-2xl md:text-3xl">
            At <span className="text-[#D29E34]">PB+OCUAMAN</span> Construction
          </div>
          <div className="text-sm md:text-base">
            We bring together experience, creativity, and professionalism to
            deliver exceptional construction projects that meet your needs.
            Whether you are building your first home, upgrading to a bigger
            space, renovating, or investing in property, we provide complete
            solutions from planning and design to construction and handover.
          </div>
          <div className="w-full h-[0.5px] bg-[#c0c0c6]"></div>
          <div className="text-lg md:text-2xl">Certifications & Licenses</div>

          <Marquee
            speed={25}
            direction="horizontal"
            fadeEdges={true}
            speedOnHover={10}
            pauseOnTap={true}
            className="flex gap-10 overflow-x-auto no-scrollbar"
          >
            {certificationsData.map((cert) => (
              <Image
                key={cert.id}
                src={cert.image}
                alt={cert.name}
                width={300}
                height={300}
                className="w-15 h-auto rounded-full aspect-square shrink-0"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

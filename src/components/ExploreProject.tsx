import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";

export const ExploreProject = () => {
  return (
    <section className="p-10 flex flex-col gap-10">
      <h3>
        EXPLORE <span>MORE</span> OF OUR PROJECTS
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className=" relative h-120 w-full">
          {" "}
          <Image
            src="/sample/sample.jpg"
            alt="Project"
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="  bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat h-auto md:h-full flex flex-col p-10 gap-5">
          <h2 className="text-2xl font-semibold">
            Decena <br /> Residence
          </h2>
          <p>
            A modern and elegant private home, Decena Residence features clean
            lines, open layouts, and a sophisticated use of monochromatic tones.
            Designed for both functionality and style, it offers smart spatial
            planning, quality finishes, and personalized interior details,
            creating a comfortable and contemporary living space with lasting
            elegance.
          </p>
          <button
            type="button"
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white w-fit mt-2 cursor-pointer hover:bg-[#6e6e52] transition flex items-center gap-5 text-[18px] font-semibold"
            style={{ backgroundSize: "200px 200px" }}
          >
            LOVE THIS DESIGN? DISCOVER MORE
            <FontAwesomeIcon icon={faArrowRightLong} className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-5 justify-end mt-5">
        <button
          type="button"
          aria-label="Previous"
          title="Previous"
          className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition flex items-center justify-center px-10 py-2"
          style={{ backgroundSize: "200px 200px" }}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="text-3xl" />
        </button>

        <button
          type="button"
          aria-label="Next"
          title="Next"
          className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition flex items-center justify-center px-10 py-2"
          style={{ backgroundSize: "200px 200px" }}
        >
          <FontAwesomeIcon icon={faArrowRightLong} className="text-3xl" />
        </button>
      </div>
    </section>
  );
};

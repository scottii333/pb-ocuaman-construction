import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faScrewdriverWrench,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const JoinOurTeam = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl">
        JOIN OUR <span className="text-yellow-500">TEAM</span>
      </h2>
      <p className="mt-5 max-w-120 text-center">
        Be part of a growing construction team where your skills are valued, and
        your work makes an impact.
      </p>
      <div className="grid grid-cols-1 gap-25 md:gap-0 md:grid-cols-2 p-10 place-items-center ">
        <div className="flex justify-center items-center p-10 w-100">
          <div className=" w-70 h-70 relative bottom-15 left-30 shrink-0 shadow-lg ">
            <Image
              src="/sample/sample.jpg"
              alt="Join Our Team"
              fill
              className="object-cover"
            />
          </div>
          <div className=" w-70 h-70 relative top-20 right-20    shrink-0 shadow-lg ">
            <Image
              src="/sample/sample.jpg"
              alt="Join Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className=" p-10 w-full min-h-100">
          <div className="grid grid-cols-2 p-5 gap-10  border-b ">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl">
                <FontAwesomeIcon
                  icon={faHelmetSafety}
                  className="text-2xl text-yellow-500 mr-2"
                />{" "}
                FOREMAN
              </h3>
              <p>P1200/Day</p>
            </div>
            <button className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat px-7 h-10 text-white hover:bg-[#7a7a5f] cursor-pointer">
              Apply Now
            </button>
          </div>
          <div className="flex flex-col gap-2 p-5  border-b">
            <h3 className="text-2xl">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="text-2xl text-yellow-500 mr-2"
              />{" "}
              WELDER (WITH COMPLETE TEAM)
            </h3>
            <p>P900/Day</p>
          </div>
          <div className="grid grid-cols-2 p-5 gap-5 ">
            <div className="flex ">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-2xl text-[#232b5f   ] mr-2"
              />
              <p>Olongapo City, Zambales</p>
            </div>
            <div className="flex ">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-2xl text-[#232b5f] mr-2"
              />
              <p>Olongapo City, Zambales</p>
            </div>
            <p className="text-gray-600">(WILLING TO BE RELOCATED)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

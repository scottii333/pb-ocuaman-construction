import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faPuzzlePiece,
  faStar,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";

export const ServiceBenefits = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_3fr] items-end p-5 justify-center gap-10 my-10">
      <h1 className="mb-10 text-2xl font-medium text-center md:text-3xl md:text-end">
        <span className="text-yellow-500">BENEFITS</span> OF OUR <br /> SERVICES
      </h1>

      <div className="grid grid-cols-2 gap-5 h-100 w-full">
        <div className="h-full w-full  grid grid-rows-2 gap-10 justify-items-end">
          <div className="relative bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat w-full max-w-[300px] px-4 md:px-10 py-10 text-center justify-center items-center flex rounded-sm">
            {/* Floating icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-500 rounded-full p-3">
              <FontAwesomeIcon
                icon={faShoePrints}
                className="h-8 md:h-10 text-white"
              />
            </div>

            {/* Text */}
            <p className="mt-4 text-[#232b5f] font-medium text-sm md:text-base">
              We&apos;ll guide you through every step
            </p>
          </div>
          <div className="relative bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat w-full max-w-[300px] px-4 md:px-10 py-10 text-center justify-center items-center flex rounded-sm">
            {/* Floating icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-500 rounded-full p-3">
              <FontAwesomeIcon
                icon={faStar}
                className="h-8 md:h-10 text-white"
              />
            </div>

            {/* Text */}
            <p className="mt-4 text-[#232b5f] font-medium text-sm md:text-base">
              High-quality work done efficiently
            </p>
          </div>
        </div>
        <div className="h-full w-full  grid grid-rows-2 gap-10 justify-items-start">
          <div className="relative bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat w-full max-w-[300px] px-5 md:px-10 py-10 text-center justify-center items-center flex rounded-sm">
            {/* Floating icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-500 rounded-full p-3">
              <FontAwesomeIcon
                icon={faPuzzlePiece}
                className="h-8 md:h-10 text-white"
              />
            </div>

            {/* Text */}
            <p className="mt-4 text-[#232b5f] font-medium text-sm md:text-base">
              Solutions made to fit your needs
            </p>
          </div>
          <div className="relative bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat w-full max-w-[300px] px-4 md:px-10 py-10 text-center justify-center items-center flex rounded-sm">
            {/* Floating icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-500 rounded-full p-3">
              <FontAwesomeIcon
                icon={faMoneyBillTrendUp}
                className="h-8 md:h-10 text-white"
              />
            </div>

            {/* Text */}
            <p className="mt-4 text-[#232b5f] font-medium text-sm md:text-base">
              Make the most of your space and investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

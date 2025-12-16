import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import { Marquee } from "./ui/marquee";

export const GoogleReviews = () => {
  return (
    <section className="text-[#232b5f] flex flex-col items-center p-5 md:p-10 bg-white!">
      <p className="text-3xl my-10">WHAT OUR <span className="text-yellow-500">CLIENTS</span> SAY</p>
      <Marquee
        speed={30}
        direction="horizontal"
        fadeEdges={true}
        pauseOnTap={true}
        speedOnHover={15}
        className="p-10 flex gap-2 w-full"
      >
        {/* CARD 1 */}
        <div className="bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat h-68 md:h-80 w-65 md:w-100 ">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-6xl text-[#232b5f] relative bottom-8 left-10 "
          />
          <div className="relative bottom-5 md:bottom-8 left-10 md:left-40 w-fit flex gap-3 ">
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
          </div>
          <p className="p-10 pt-0 text-xs md:text-base">
            Their planning team guided us from start to finish. They explained
            everything clearly and made the design fit our budget. Very
            professional and easy to work with.
          </p>
          <div className="w-50 md:w-60 h-15 md:h-19 bg-white rounded-tr-3xl flex items-center p-5 gap-2 ">
            <Image
              src="/sample/sample.jpg"
              alt="Client Photo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-xs md:text-base">John Doe</p>
              <p className="text-xs md:text-base">Google Review</p>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat h-68 md:h-80 w-65 md:w-100 ">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-6xl text-[#232b5f] relative bottom-8 left-10 "
          />
          <div className="relative bottom-5 md:bottom-8 left-10 md:left-40 w-fit flex gap-3 ">
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
          </div>
          <p className="p-10 pt-0 text-xs md:text-base">
            Their planning team guided us from start to finish. They explained
            everything clearly and made the design fit our budget. Very
            professional and easy to work with.
          </p>
          <div className="w-50 md:w-60 h-15 md:h-19 bg-white rounded-tr-3xl flex items-center p-5 gap-2 ">
            <Image
              src="/sample/sample.jpg"
              alt="Client Photo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-xs md:text-base">John Doe</p>
              <p className="text-xs md:text-base">Google Review</p>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat h-68 md:h-80 w-65 md:w-100 ">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-6xl text-[#232b5f] relative bottom-8 left-10 "
          />
          <div className="relative bottom-5 md:bottom-8 left-10 md:left-40 w-fit flex gap-3 ">
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-lg md:text-2xl text-yellow-500 "
            />
          </div>
          <p className="p-10 pt-0 text-xs md:text-base">
            Their planning team guided us from start to finish. They explained
            everything clearly and made the design fit our budget. Very
            professional and easy to work with.
          </p>
          <div className="w-50 md:w-60 h-15 md:h-19 bg-white rounded-tr-3xl flex items-center p-5 gap-2 ">
            <Image
              src="/sample/sample.jpg"
              alt="Client Photo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-xs md:text-base">John Doe</p>
              <p className="text-xs md:text-base">Google Review</p>
            </div>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

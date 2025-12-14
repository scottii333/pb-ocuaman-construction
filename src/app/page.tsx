import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faArrowRightLong,
  faArrowLeftLong,
  faHeartCircleCheck,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  fa0,
  faHouseChimneyWindow,
  faHouseChimneyMedical,
  faScrewdriverWrench,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Percent, Plus } from "lucide-react";

export default function home() {
  return (
    <main className="flex flex-col mb-100 gap-10">
      {/* Welcome video Section */}
      <div className="shadow-lg  max-h-[85vh] overflow-hidden">
        <video
          src="/sample/sample.mp4"
          loop
          autoPlay
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brief About us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-2 ">
        <div className=" h-auto w-full flex flex-col p-5 gap-5">
          <Image
            src="/sample/sample.jpg" // path to your image
            alt="Teamwork Image"
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <h2 className="flex items-center gap-2 p-1 text-[#D29E34] text-[18px] font-semibold">
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              className="w-8 h-8 text-[#D29E34]"
            />{" "}
            Why Choose Us
          </h2>
          <div className="border-b-3 border-[#8B8B6F]"></div>
          <p>
            Our goal is to provide clients with hassle-free design and
            construction services, delivering high-quality workmanship and
            cost-effective solutions.
          </p>
        </div>
        <div className=" h-auto w-full flex flex-col p-5 gap-5">
          <h2 className="flex  items-center gap-2 p-1 text-[#D29E34] text-[18px] font-semibold">
            <FontAwesomeIcon
              icon={faUsers}
              className="w-8 h-8 text-[#D29E34]"
            />{" "}
            Who We Are
          </h2>
          <p>
            At PB+Ocuaman Construction, we specialize in design-and-build
            services, including interior design, renovation, and fit-out. <br />{" "}
            <br /> We create modern and contemporary spaces with smart layouts,
            monochromatic tones, and sophisticated style, turning our clients’
            visions into lasting works of art with quality and integrity.
          </p>

          <Link
            href="/about"
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white w-fit mt-2 cursor-pointer hover:bg-[#6e6e52] transition flex items-center gap-5 text-[18px] font-semibold"
            style={{ backgroundSize: "200px 200px" }}
          >
            More About Us
            <FontAwesomeIcon icon={faArrowRightLong} className="w-8" />
          </Link>

          <div className="border-b-3 border-[#8B8B6F] mt-5"></div>

          <p>
            We deliver reliable, cost-effective, and high-quality services while
            ensuring customer satisfaction and building strong partnerships.
          </p>
        </div>
        <div className="-black h-[500px] lg:h-auto w-full relative">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Facts Section */}
      <div
        className="flex flex-col gap-10 p-10 justify-center items-center w-full min-h-[200px] text-[#6A6F4C] bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat text-center"
        style={{ backgroundSize: "200px 200px" }}
      >
        <h3>A FEW MORE FACTS ABOUT US IN NUMBERS</h3>
        <div className="flex justify-center items-center gap-25 flex-wrap">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 justify-center items-center">
              {" "}
              <FontAwesomeIcon icon={fa1} className="w-4.5" />
              <FontAwesomeIcon icon={fa0} className="w-5.5" />
              <Plus className="h-5 w-5 " />
            </div>

            <p>Years of Experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 justify-center items-center">
              {" "}
              <FontAwesomeIcon icon={fa1} className="w-4.5" />
              <FontAwesomeIcon icon={fa5} className="w-5.5" />
              <FontAwesomeIcon icon={fa0} className="w-5.5" />
              <Plus className="h-5 w-5 " />
            </div>

            <p>Completed Projects</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 justify-center items-center">
              {" "}
              <FontAwesomeIcon icon={fa9} className="w-6.5" />
              <FontAwesomeIcon icon={fa8} className="w-5.5" />
              <Percent className="h-6 w-6 " />
            </div>

            <p>Client Satisfaction</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 justify-center items-center">
              {" "}
              <FontAwesomeIcon icon={fa3} className="w-5.5" />
              <FontAwesomeIcon icon={fa0} className="w-5.5" />
              <Plus className="h-5 w-5 " />
            </div>

            <p>Workforce</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 justify-center items-center">
              {" "}
              <FontAwesomeIcon icon={fa9} className="w-6.5" />
              <FontAwesomeIcon icon={fa5} className="w-5" />
              <Percent className="h-6 w-6 " />
            </div>

            <p>Project Delivery</p>
          </div>
        </div>
      </div>

      <div className="p-10">
        <p className="text-[#232b5f]">
          Pick the <span className="text-[#c3881c]">service</span> that fits
          your needs
        </p>
        <div className="flex justify-between items-center mt-5 gap-5">
          <h4 className="text-[24px] font-semibold text-[#232b5f]">
            I WANT TO
          </h4>

          {/* Button for previous and next */}
          <div className="flex gap-5">
            <button
              type="button"
              aria-label="Previous"
              title="Previous"
              className="
    bg-[#8B8B6F]
    bg-[url('/texture/green-cup.png')]
    bg-repeat
  
    text-white
    cursor-pointer
    hover:bg-[#6e6e52]
    transition
    flex
    items-center
    justify-center
  
    px-10
    py-2
  "
              style={{ backgroundSize: "200px 200px" }}
            >
              <FontAwesomeIcon icon={faArrowLeftLong} className="w-8 h-8" />
            </button>

            <button
              type="button"
              aria-label="Next"
              title="Next"
              className="
    bg-[#8B8B6F]
    bg-[url('/texture/green-cup.png')]
    bg-repeat
 
    text-white
    cursor-pointer
    hover:bg-[#6e6e52]
    transition
    flex
    items-center
    justify-center

     px-10
     py-2

  "
              style={{ backgroundSize: "200px 200px" }}
            >
              <FontAwesomeIcon icon={faArrowRightLong} className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex gap-5">
          <div className="shadow-lg w-80 h-80 relative overflow-hidden">
            <Image
              src="/sample/sample.jpg"
              alt="Service Image"
              fill
              className="object-cover w-full h-full z-0"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* centered content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-center px-4">
              <FontAwesomeIcon
                icon={faHouseChimneyWindow}
                className="w-8 h-8 text-white"
                aria-hidden="true"
              />
              <h3 className="text-white font-semibold">BUILD MY DREAM HOME</h3>
            </div>
          </div>
          <div className="shadow-lg w-80 h-80 relative overflow-hidden">
            <Image
              src="/sample/sample.jpg"
              alt="Service Image"
              fill
              className="object-cover w-full h-full z-0"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* centered content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-center px-4">
              <FontAwesomeIcon
                icon={faHouseChimneyMedical}
                className="w-8 h-8 text-white"
                aria-hidden="true"
              />
              <h3 className="text-white font-semibold">
                UPGRADE TO A BIGGER HOME
              </h3>
            </div>
          </div>
          <div className="shadow-lg w-80 h-80 relative overflow-hidden">
            <Image
              src="/sample/sample.jpg"
              alt="Service Image"
              fill
              className="object-cover w-full h-full z-0"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* centered content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-center px-4">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="w-8 h-8 text-white"
                aria-hidden="true"
              />
              <h3 className="text-white font-semibold">RENOVATE MY PROPERTY</h3>
            </div>
          </div>
          <div className="shadow-lg w-80 h-80 relative overflow-hidden">
            <Image
              src="/sample/sample.jpg"
              alt="Service Image"
              fill
              className="object-cover w-full h-full z-0"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* centered content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-center px-4">
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className="w-8 h-8 text-white"
                aria-hidden="true"
              />
              <h3 className="text-white font-semibold">
                BUILD AN INVESTMENT PROPERTY
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

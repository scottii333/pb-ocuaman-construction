import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
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
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { Percent, Plus } from "lucide-react";
import ServicesCarousel from "@/components/ServicesCarousel";

export default function Home() {
  return (
    <main className="flex flex-col mb-100 gap-10">
      {/* Welcome video Section (Server Component, SEO-friendly) */}
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
      {/* Brief About us Section (Server Component, SEO-friendly) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-2 ">
        <div className=" h-auto w-full flex flex-col p-5 gap-5">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <h2 className="flex items-center gap-2 p-1 text-[#D29E34] text-[24px] font-semibold">
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              className="text-3xl text-[#D29E34]"
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
          <h2 className="flex  items-center gap-2 p-1 text-[#D29E34] text-[24px] font-semibold">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-3xl text-[#D29E34]"
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
            <FontAwesomeIcon icon={faArrowRightLong} className="text-1xl" />
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
      {/* Facts Section  */}
      <div
        className="flex flex-col gap-10 p-10 justify-center items-center w-full min-h-[200px] text-[#6A6F4C] bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat text-center"
        style={{ backgroundSize: "200px 200px" }}
      >
        <h3 className="text-[24px]">A FEW MORE FACTS ABOUT US IN NUMBERS</h3>
        <div className="flex justify-center items-center gap-25 flex-wrap">
          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={fa1} className="text-3xl" />
              <FontAwesomeIcon icon={fa0} className="text-3xl" />
              <Plus className="h-8 w-8 " />
            </div>
            <p>Years of Experience</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={fa1} className="text-3xl" />
              <FontAwesomeIcon icon={fa5} className="text-3xl" />
              <FontAwesomeIcon icon={fa0} className="text-3xl" />
              <Plus className="h-8 w-8 " />
            </div>
            <p>Completed Projects</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={fa9} className="text-3xl" />
              <FontAwesomeIcon icon={fa8} className="text-3xl" />
              <Percent className="h-8 w-8 " />
            </div>
            <p>Client Satisfaction</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={fa3} className="text-3xl" />
              <FontAwesomeIcon icon={fa0} className="text-3xl" />
              <Plus className="h-8 w-8 " />
            </div>
            <p>Workforce</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={fa9} className="text-3xl" />
              <FontAwesomeIcon icon={fa5} className="text-3xl" />
              <Percent className="h-8 w-8 " />
            </div>
            <p>Project Delivery</p>
          </div>
        </div>
      </div>
      {/* Services Carousel  */}
      <ServicesCarousel />
      {/* 3 Easy Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <h2>
            LET US DESIGN YOUR HOME IN <span>3 EASY STEPS</span>
          </h2>
          <p>We&apos;ll be here every step of the way</p>
          <Link
            href="/about"
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white w-fit mt-2 cursor-pointer hover:bg-[#6e6e52] transition flex items-center gap-5 text-[18px] font-semibold"
            style={{ backgroundSize: "200px 200px" }}
          >
            EXPLORE OUR HOME DESIGNS
            <FontAwesomeIcon icon={faArrowRightLong} className="w-5 h-5" />
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex  bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat ">
            <div className="relative w-30 h-30">
              <Image
                src="/sample/sample.jpg"
                alt="Teamwork Image"
                fill
                className="object-cover "
                priority
              />
            </div>
            <div className="p-5">
              <h3>01 LAYOUT </h3>
              <p>Plan the structure and flow of your home</p>
            </div>
          </div>
          <div className="flex  bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat ">
            <div className="relative w-30 h-30">
              <Image
                src="/sample/sample.jpg"
                alt="Teamwork Image"
                fill
                className="object-cover "
                priority
              />
            </div>
            <div className="p-5">
              <h3>02 DESIGN </h3>
              <p>Plan the structure and flow of your home</p>
            </div>
          </div>
          <div className="flex  bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat ">
            <div className="relative w-30 h-30">
              <Image
                src="/sample/sample.jpg"
                alt="Teamwork Image"
                fill
                className="object-cover "
                priority
              />
            </div>
            <div className="p-5">
              <h3>03 DOCUMENTATION </h3>
              <p>Plan the structure and flow of your home</p>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Sections */}
      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row md:w-[1000px]  bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat ">
          <div className="w-full h-100 relative">
            <Image
              src="/sample/sample.jpg"
              alt="Teamwork Image"
              fill
              className="object-cover "
            />
          </div>
          <div className="p-5 flex flex-col justify-center gap-5">
            <h2>DECENA RESIDENCE</h2>
            <p>
              Modern Family Home in Quezon CityModern Family Home in Quezon
              CityModern Family Home in Quezon CityModern Family Home in Quezon
              City Modern Family Home in Quezon City
            </p>
            <Link
              href="/about"
              className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white w-fit mt-2 cursor-pointer hover:bg-[#6e6e52] transition flex items-center gap-5 text-[18px] font-semibold"
              style={{ backgroundSize: "200px 200px" }}
            >
              LOVE THIS DESIGN? DISCOVER MORE
              <FontAwesomeIcon icon={faArrowRightLong} className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

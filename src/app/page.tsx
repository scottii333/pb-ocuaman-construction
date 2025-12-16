import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHeartCircleCheck,
  faArrowRightLong,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import ServicesCarousel from "@/components/ServicesCarousel";
import { BusinessMapPin } from "@/components/BusinessMapPin";
import { GetInTouch } from "@/components/GetInTouch";
import { JoinOurTeam } from "@/components/JoinOurTeam";
import { GoogleReviews } from "@/components/GoogleReviews";
import { FactsAboutUs } from "@/components/FactsAboutUs";

export default function Home() {
  return (
    <main className="flex flex-col mb-50">
      <div className="shadow-lg  h-[90vh] overflow-hidden relative">
        <video
          src="/sample/sample.mp4"
          loop
          autoPlay
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="absolute bottom-20 lg:bottom-10 md:left-10 flex gap-2 md:gap-5">
            <div className="text-4xl md:text-6xl text-[#D29E34]">BUILDING</div>
            <div className="flex flex-col justify-center text-white">
              <p className="md:text-2xl">SIMPLICITY</p>
              <p className="text-xs md:text-sm">IN EVERY SPACE</p>
            </div>
          </div>
          <div className="hidden lg:flex absolute bottom-10 right-10 text-[#D29E34] gap-3">
            <button className="text-white underline">
              START PLANNING WITH US
            </button>{" "}
            <div className="w-8 h-8 bg-white/80 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-lg text-[#232b5f] inline-block transform"
                style={{ rotate: "-120deg" }}
              />
            </div>
          </div><div
        className="absolute bottom-0 left-0 w-full bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-4 px-8 text-white lg:hidden cursor-pointer hover:bg-[#6e6e52] transition gap-5 flex justify-center items-center"
        style={{ backgroundSize: "200px 200px" }}
      >
        START PLANNING WITH US <FontAwesomeIcon icon={faArrowRightLong} className="text-1xl" />
      </div>
        </div>
      </div>
      
      {/* Brief About us Section (Server Component, SEO-friendly) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-2 my-10">
        <div className="order-2 lg:order-1 h-auto w-full flex flex-col p-5 pt-0 gap-5">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <h2 className="flex items-center gap-2 p-1 text-[#D29E34] text-[24px] ">
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              className="text-xl text-[#D29E34]"
            />{" "}
            Why Choose Us
          </h2>
          <div className="border-b-3 border-[#a0a08a]"></div>
          <p>
            Our goal is to provide clients with hassle-free design and
            construction services, delivering high-quality workmanship and
            cost-effective solutions.
          </p>
        </div>

        <div className="order-1 lg:order-2 h-auto w-full flex flex-col p-5 gap-5">
          <h2 className="flex  items-center gap-2 p-1 text-[#D29E34] text-[24px] ">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-xl text-[#D29E34]"
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
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white w-fit mt-2 cursor-pointer hover:bg-[#6e6e52] transition flex items-center gap-5 text-[18px] "
            style={{ backgroundSize: "200px 200px" }}
          >
            More About Us
            <FontAwesomeIcon icon={faArrowRightLong} className="text-xl" />
          </Link>

          <div className="border-b-3 border-[#a0a08a] mt-5"></div>

          <p>
            We deliver reliable, cost-effective, and high-quality services while
            ensuring customer satisfaction and building strong partnerships.
          </p>
        </div>

        <div className="order-3 -black h-[500px] lg:h-auto w-full relative">
          <Image
            src="/sample/sample.jpg"
            alt="Teamwork Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Facts Section  */}
      <FactsAboutUs />
      {/* Services Carousel  */}
      <ServicesCarousel />
      {/* 3 Easy Steps Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-5 p-10">
        <div className="flex flex-col justify-start items-baseline gap-5 p-0 md:p-10">
          <h2 className="text-xl md:text-3xl">
            LET US DESIGN YOUR <br /> HOME IN{" "}
            <span className="text-[#c3881c]">3 EASY STEPS</span>
          </h2>
          <p className="text-xs md:text-base">We&apos;ll be here every step of the way.</p>
          <Link
            href="/about"
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-5 text-white w-full md:w-fit mt-2 cursor-pointer hover:bg-[#6e6e52] transition flex items-center gap-4 md:gap-5 text-  md:text-base"
            style={{ backgroundSize: "200px 200px" }}
          >
            Explore Our Designs
            <FontAwesomeIcon icon={faArrowRightLong} className="w-5 h-5" />
          </Link>
        </div>

        <div className="flex flex-col gap-5 md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] bg-[#f2f2f2] bg-[url('/texture/wall-texture.png')] bg-repeat">
            <div className="relative w-full aspect-square shrink-0">
              <Image
                src="/sample/sample.jpg"
                alt="Teamwork Image"
                fill
                className="object-cover "
                priority
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl md:text-3xl">01 LAYOUT</h3>
              <p>Plan the structure and flow of your home</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] bg-[#f2f2f2] bg-[url('/texture/wall-texture.png')] bg-repeat">
            <div className="relative w-full aspect-square shrink-0">
              <Image
                src="/sample/sample.jpg"
                alt="Teamwork Image"
                fill
                className="object-cover "
                priority
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl md:text-3xl">02 DESIGN</h3>
              <p>
                Customize the look and feel with our 3D exterior and interior
                designs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] bg-[#f2f2f2] bg-[url('/texture/wall-texture.png')] bg-repeat">
            <div className="relative w-full aspect-square shrink-0">
              <Image
                src="/sample/sample.jpg"
                alt="Teamwork Image"
                fill
                className="object-cover "
                priority
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg md:text-3xl">
                  03 DOCUMENTATION
                </h3>
              <p>
                Plan the structure and flow of your home
              </p>
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
              className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white w-fit mt-2 cursor-pointer hover:bg-[#6e6e52] transition flex items-center gap-5 text-[18px] "
              style={{ backgroundSize: "200px 200px" }}
            >
              LOVE THIS DESIGN? DISCOVER MORE
              <FontAwesomeIcon icon={faArrowRightLong} className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Join Our Team Section */}
      <JoinOurTeam />

      {/* Get In Touch Section */}
      <GetInTouch />

      {/* Business Map Pin Section */}
      <BusinessMapPin />
    </main>
  );
}

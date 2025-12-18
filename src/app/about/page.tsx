"use client";

import React, { useRef } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faPeopleGroup,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll by one card (+ gap) per click
  const scrollByAmount = (dir: "left" | "right") => {
    const c = servicesRef.current;
    if (!c) return;
    const amount = 320 + 20; // w-80 (320px) + gap-5 (20px)
    c.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };
  const certifications = Array.from({ length: 7 });
  const teamMembers = Array.from({ length: 5 });
  return (
    <main>
      <div className="relative w-full h-[80vh] lg:h-[90vh]">
        {/* Background Image */}
        <Image
          src="/sample/sample.jpg"
          alt="About Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Breadcrumbs */}
        <Breadcrumb className="p-8 absolute top-0 left-0 text-white">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-white">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#D29E34]">About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="p-8 absolute bottom-0 left-0 text-white">
          <div className="text-3xl">
            Get to <span className="text-[#D29E34]">Know</span> Us
          </div>
          <div className="text-sm md:text-base">
            Learn more about our mission, values, and the people behind our
            work.
          </div>
        </div>
      </div>
      <section>
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
            <div className="flex gap-10 overflow-x-auto no-scrollbar">
              {certifications.map((_, index) => (
                <Image
                  key={index}
                  src="/sample/sample.jpg"
                  alt="Certification"
                  width={300}
                  height={300}
                  className="w-15 h-auto rounded-full aspect-square shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-20 flex flex-col gap-10">
          <div className="bg-[url('/texture/wall-texture.png')] w-full h-auto grid grid-cols-1 md:grid-cols-[5fr_1fr]">
            <div className="p-5 md:p-10 flex flex-col gap-5 order-2 md:order-1 md:mt-0">
              <div className="text-3xl hidden md:block">
                Our <span className="text-[#D29E34]">Mission</span>
              </div>
              <div className="text-sm md:text-base flex items-start gap-2 max-w-200">
                To grow by continually ensuring customer satisfaction with our
                reliable execution, cost effectiveness, quality and efficient
                services. We do so while promoting growth of our people and our
                relationship with our partners in business, and care for the
                environment we work in.
              </div>
            </div>
            <div className="w-full h-full order-1 md:order-2 relative z-10">
              <Image
                src="/sample/sample.jpg"
                alt="About Banner"
                width={300}
                height={300}
                className="w-full h-full order-1 md:order-2 shrink-0 object-cover"
              />
              <div className="flex md:hidden absolute inset-0 bg-black/60 z-0"></div>
              <div className="absolute bottom-5 left-5 text-2xl md:text-3xl text-white md:hidden">
                Our <span className="text-[#D29E34]">Mission</span>
              </div>
            </div>
          </div>
          <div className="bg-[url('/texture/wall-texture.png')] w-full h-full shrink-0 grid grid-cols-1 md:grid-cols-[1fr_5fr]">
            <div className="w-full h-full relative">
              <Image
                src="/sample/sample.jpg"
                alt="About Banner"
                width={300}
                height={300}
                className="w-full h-full shrink-0 object-cover"
              />
              <div className="flex md:hidden absolute inset-0 bg-black/60 z-0"></div>
              <div className="absolute bottom-5 left-5 text-2xl md:text-3xl text-white md:hidden">
                Our <span className="text-[#D29E34]">Vision</span>
              </div>
            </div>

            <div className="p-5 md:p-10 flex flex-col gap-5">
              <div className="text-3xl hidden md:block">
                Our <span className="text-[#D29E34]">Vision</span>
              </div>
              <div className="text-sm md:text-base max-w-200">
                To be the preferred contractor of choice through established
                quality business relationships, provided for by a team of
                dynamic and committed professionals.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_2.5fr] gap-10 lg:gap-0 w-[85%] lg:w-[55%] mx-auto mb-20 items-end">
          {/* Left content */}
          <div className="text-justify md:text-start">
            <div className="text-2xl md:text-3xl mb-3 flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="text-lg text-[#232b5f]"
              />
              Meet the <span className="text-[#D29E34]">Team</span>
            </div>
            <div className="text-sm md:text-base">
              Our team works closely with you at every stage, ensuring your
              vision is brought to life with quality craftsmanship, attention to
              detail, and safety as a top priority.
              <br /> <br />
              We are committed to completing every project on time and on budget
              while maintaining honesty, integrity, and open communication.
            </div>
          </div>

          {/* Right image */}
          <div className="lg:flex lg:justify-end">
            <Image
              src="/aboutUs-experts.png"
              alt="About Banner"
              width={800} // desktop size
              height={800}
              className="w-full h-auto lg:max-w-[400px]"
            />
          </div>
        </div>

        <div className="w-[90%] mx-auto flex flex-col gap-10 pb-10">
          <div className="flex justify-between">
            <div className="text-xl md:text-3xl">
              Working Together to Bring <br /> Your Dream{" "}
              <span className="text-[#D29E34]">Home to Life</span>.
            </div>
            <div className="flex gap-5 items-end">
              <button
                className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white hidden md:block cursor-pointer hover:bg-[#6e6e52] transition"
                style={{ backgroundSize: "200px 200px" }}
              >
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  className="w-8 h-8 text-white"
                />
              </button>
              <button
                className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white hidden md:block cursor-pointer hover:bg-[#6e6e52] transition"
                style={{ backgroundSize: "200px 200px" }}
              >
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="w-8 h-8 text-white"
                />
              </button>
            </div>
          </div>
          <div className="flex gap-5 md:gap-10 overflow-x-auto no-scrollbar">
            {teamMembers.map((_, index) => (
              <div
                key={index}
                className="relative inline-block w-50 md:w-80 shrink-0"
              >
                <Image
                  src="/team-member.png"
                  alt="team member"
                  width={300}
                  height={300}
                  className="w-50 md:w-80 h-auto"
                />
                <div className="absolute bottom-0 left-0 h-20 w-full bg-black/60 text-lg text-white flex items-center justify-center">
                  Engr. Ocuaman
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 md:gap-5 justify-end -mt-5">
            <button
              type="button"
              aria-label="Previous"
              title="Previous"
              className="flex md:hidden bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition items-center justify-center px-5 py-2"
              style={{ backgroundSize: "200px 200px" }}
              onClick={() => scrollByAmount("left")}
            >
              <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
            </button>

            <button
              type="button"
              aria-label="Next"
              title="Next"
              className="flex md:hidden bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition items-center justify-center px-5 py-2"
              style={{ backgroundSize: "200px 200px" }}
              onClick={() => scrollByAmount("right")}
            >
              <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
            </button>
          </div>
        </div>
        <div className="bg-white pt-7"><div className="text-2xl md:text-3xl flex justify-center gap-2 my-5 md:my-10">
          Our <span className="text-[#D29E34]"> Partners</span>
        </div>
        <div className="px-15 pb-12 flex gap-12 overflow-x-auto no-scrollbar">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex gap-2 items-center shrink-0">
              <Image
                src="/sample/sample.jpg"
                alt="Partner"
                width={300}
                height={300}
                className="w-15 h-auto rounded-full aspect-square"
              />
              <div className="text-base">Partner</div>
            </div>
          ))}
        </div></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto gap-10 md:gap-15 items-center mt-10">
          <div className="flex flex-col gap-5">
            <div className="text-2xl md:text-3xl">
              Company
              <span className="text-[#D29E34]"> Milestones</span>
            </div>
            <div className="w-full h-1 bg-[#c0c0c6]"></div>
            <div className="text-sm md:text-base">
              Your satisfaction is our ultimate goal, and we take pride in
              making your dream home or property a reality.
            </div>
          </div>
          <div>
            <Image
              src="/office.png"
              alt="About Banner"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div>
            <div className="flex flex-col gap-10 relative items-center">
              <div className="bg-[#e2e4e6] w-3 h-[80%] absolute top-10 left-6 z-0"></div>
              <div className="flex gap-5 items-center z-10">
                <div className="w-15 h-15 shrink-0 rounded-full border-6 border-[#232b5f] bg-[#f9f9ff] flex items-center justify-center text-xs">
                  2020
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xl">Company Milestone</div>
                  <div className="text-sm">
                    Your satisfaction is our ultimate goal, and we take pride in
                    making your dream home or property a reality.
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center z-10">
                <div className="w-15 h-15 shrink-0 rounded-full border-6 border-[#232b5f] bg-[#f9f9ff] flex items-center justify-center text-xs">
                  2020
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xl">Company Milestone</div>
                  <div className="text-sm">
                    Your satisfaction is our ultimate goal, and we take pride in
                    making your dream home or property a reality.
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center z-10">
                <div className="w-15 h-15 shrink-0 rounded-full border-6 border-[#232b5f] bg-[#f9f9ff] flex items-center justify-center text-xs">
                  2020
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xl">Company Milestone</div>
                  <div className="text-sm">
                    Your satisfaction is our ultimate goal, and we take pride in
                    making your dream home or property a reality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] w-[90%] mx-auto gap-15 items-center my-20">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-10 relative items-center">
              <div className="bg-[#e2e4e6] w-3 h-[80%] absolute top-10 left-6 z-0"></div>

              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex gap-5 items-center z-10 w-full">
                  <div className="w-15 h-15 shrink-0 rounded-full border-6 border-[#232b5f] bg-[#f9f9ff] flex items-center justify-center text-xs">
                    2020
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-xl">Company Milestone</div>
                    <div className="text-sm">
                      Your satisfaction is our ultimate goal, and we take pride
                      in making your dream home or property a reality.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-auto lg:h-[500px]">
  {/* First row (full width on mobile) */}
  <div className="relative w-full h-[250px] lg:h-full">
    <Image
      src="/sample/sample.jpg"
      alt="Left"
      fill
      className="object-cover"
    />
  </div>

  {/* Second row */}
  <div className="grid grid-cols-2 gap-5 lg:grid-rows-2 lg:grid-cols-1 h-auto">
    <div className="relative w-full h-[120px] lg:h-full">
      <Image
        src="/sample/sample.jpg"
        alt="Top right"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-full h-[120px] lg:h-full">
      <Image
        src="/sample/sample.jpg"
        alt="Bottom right"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>


        </div>
      </section>
    </main>
  );
}

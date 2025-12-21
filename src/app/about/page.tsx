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

import { OurCertifications } from "@/components/OurCertifications";
import { OurPartners } from "@/components/OurPartners";
import { OurTeam } from "@/components/OurTeam";

export default function About() {
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
        {/* Our Certifications Section */}
        <OurCertifications />

        {/* Our Mission and Vision Section */}
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
        {/* Our Team Section */}
        <OurTeam />
        {/* Our Partners Section */}
        <OurPartners />
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

          <div className="grid grid-cols-1  gap-5 w-full h-auto lg:h-[400px]">
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
            <div className="grid grid-cols-2 gap-5 h-auto">
              <div className="relative w-full h-[120px] lg:h-auto">
                <Image
                  src="/sample/sample.jpg"
                  alt="Top right"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[120px] lg:h-auto">
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

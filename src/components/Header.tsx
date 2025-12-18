import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,
  faHouse,
  faPeopleRoof,
  faScrewdriverWrench,
  faBuilding,
  faBriefcase,
  faPhone,
  faVideo
 } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className=" shadow-lg p-3 flex justify-between px-10 md:px-0 md:justify-around items-center gap-10 sticky top-0 bg-white z-50">
      <Link href="/" className="">
        {" "}
        <Image
          src="/pb-ocuaman-main-logo.png" // path to your image
          alt="PB Ocuaman Construction Logo"
          width={120}
          height={120}
        />
      </Link>

      <nav className=" items-center gap-5 hidden md:flex">
        <Link href="/about" className="flex gap-1 items-center">
        <FontAwesomeIcon icon={faPeopleRoof} className="h-6 w-6" />
          About
        </Link>
        <div className="border-l border-[#c0c0c6] h-5 "></div>
        <Link href="/services" className="flex gap-1 items-center">
        <FontAwesomeIcon icon={faScrewdriverWrench} className="h-6 w-6" />
          Services
        </Link>
        <div className="border-l border-[#c0c0c6] h-5 "></div>
        <Link href="/projects" className="flex gap-1 items-center">
        <FontAwesomeIcon icon={faBuilding} className="h-6 w-6" />
          Projects
        </Link>
        <div className="border-l border-[#c0c0c6] h-5 "></div>
        <Link href="/careers" className="flex gap-1 items-center">
        <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
          Careers
        </Link>
      </nav>

      <Link
        href="/contact"
        className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-8 text-white hidden md:block cursor-pointer hover:bg-[#6e6e52] transition"
        style={{ backgroundSize: "200px 200px" }}
      >
        Contact Us
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open menu"
            className="ml-4 block md:hidden cursor-pointer "
          >
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent className="w-1/2">
          <SheetHeader>
            <SheetTitle className="text-lg font-bold mb-4"></SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col items-start px-5 text-center gap-3 mt-4">
            <Link href="/" className="">
              <FontAwesomeIcon icon={faHouse} className="h-6 w-6" /> Home
            </Link>

            <div className="border-b border-grey w-full"></div>
            <Link href="/about" className="">
              <FontAwesomeIcon icon={faPeopleRoof} className="h-6 w-6" /> About
            </Link>
            <div className="border-b border-grey w-full"></div>
            <Link href="/services" className="">
              <FontAwesomeIcon icon={faScrewdriverWrench} className="h-6 w-6" /> Services
            </Link>
            <div className="border-b border-grey w-full"></div>
            <Link href="/projects" className="">
              <FontAwesomeIcon icon={faBuilding} className="h-6 w-6" /> Projects
            </Link>
            <div className="border-b border-grey w-full"></div>
            <Link href="/careers" className="">
              <FontAwesomeIcon icon={faBriefcase} className="h-6 w-6" /> Careers
            </Link>
            <div className="border-b border-grey w-full"></div>
            <Link href="/contact" className="">
              <FontAwesomeIcon icon={faPhone} className="h-6 w-6" /> Contact
            </Link>
          </nav>
          <SheetFooter className="mt-5">
            <Link
              href="/contact"
              className="bg-[#8B8B6F] text-center rounded-sm p-2 text-white w-full cursor-pointer transition"
            >
              <FontAwesomeIcon icon={faVideo} className="h-6 w-6 text-white" /> Schedule <br /> a Meeting
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

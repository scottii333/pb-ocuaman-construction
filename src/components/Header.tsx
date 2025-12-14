import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className=" shadow-lg p-3 flex justify-between px-10 md:px-0 md:justify-around items-center gap-10 sticky top-0 bg-white z-50">
      <Link href="/" className="">
        {" "}
        <Image
          src="/pb-ocuaman-main-logo.png" // path to your image
          alt="PB Ocuaman Construction Logo"
          width={150}
          height={150}
        />
      </Link>

      <nav className=" items-center gap-5 hidden md:flex">
        <Link href="/about" className="">
          About
        </Link>
        <div className="border-l border-black h-5 "></div>
        <Link href="/services" className="">
          Services
        </Link>
        <div className="border-l border-black h-5 "></div>
        <Link href="/projects" className="">
          Projects
        </Link>
        <div className="border-l border-black h-5 "></div>
        <Link href="/careers" className="">
          Careers
        </Link>
      </nav>

      <button
        className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-10 text-white hidden md:block cursor-pointer hover:bg-[#6e6e52] transition"
        style={{ backgroundSize: "200px 200px" }}
      >
        Contact Us
      </button>

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
        <SheetContent className="w-2/5">
          <SheetHeader>
            <SheetTitle className="text-lg font-bold mb-4"></SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col items-center text-center gap-2 mt-4">
            <Link href="/" className="">
              Home
            </Link>

            <div className="border-b border-black w-1/2 "></div>
            <Link href="/about" className="">
              About
            </Link>
            <div className="border-b border-black w-1/2 "></div>
            <Link href="/services" className="">
              Services
            </Link>
            <div className="border-b border-black w-1/2 "></div>
            <Link href="/projects" className="">
              Projects
            </Link>
            <div className="border-b border-black w-1/2 "></div>
            <Link href="/careers" className="">
              Careers
            </Link>
          </nav>
          <SheetFooter className="mt-10">
            <Button className="bg-[#8B8B6F] p-2 px-10 text-white w-full cursor-pointer hover:bg-[#6e6e52] transition">
              Contact Us
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

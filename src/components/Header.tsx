import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="shadow-lg p-3 flex justify-between px-10 md:px-0 md:justify-around items-center gap-10 sticky top-0 bg-white z-50">
      <Link href="/" className="px-0 lg:px-7">
        <Image
          src="/pb-ocuaman-main-logo.png"
          alt="PB Ocuaman Construction Logo"
          width={120}
          height={120}
          priority
        />
      </Link>

      <nav className="items-center gap-5 hidden lg:flex">
        <Link href="/about" className="flex gap-1 items-center">
          About Us
        </Link>
        <div className="border-l border-[#c0c0c6] h-5"></div>
        <Link href="/services" className="flex gap-1 items-center">
          Services
        </Link>
        <div className="border-l border-[#c0c0c6] h-5"></div>
        <Link href="/projects" className="flex gap-1 items-center">
          Projects
        </Link>
        <div className="border-l border-[#c0c0c6] h-5"></div>
        <Link href="/careers" className="flex gap-1 items-center">
          Careers
        </Link>
      </nav>

      <Link
        href="/contact"
        className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat p-2 px-8 text-white hidden lg:block cursor-pointer hover:bg-[#6e6e52] transition"
        style={{ backgroundSize: "200px 200px" }}
      >
        Contact Us
      </Link>

      <MobileMenu />
    </div>
  );
};

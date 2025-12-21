import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[31%_18%_23%_28%] bg-[#8B8B6F] p-1 lg:p-10 text-white min-h-100 bg-[url('/texture/green-cup.png')] bg-repeat text-shadow-[0_2px_6px_rgba(0,0,0,0.15)] relative text-base md:text-sm">
      <div className="absolute inset-0 bg-black/30 z-0 "></div>
      <div className="flex flex-col p-10 md:p-5 pb-0 relative z-10 order-1 lg:order-2">
        <h2 className="text-2xl font-bold mb-5">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/about">About </Link>
            <Link href="/services">Services</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/projects">Projects</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-10 md:p-5 pb-0 relative z-10 order-2 lg:order-3">
        <h2 className="text-2xl font-bold mb-5">Services</h2>
        <Link href="/services?service=dream-home">Build My Dream Home</Link>
        <Link href="/services?service=upgrade-home">
          Upgrade to a Bigger Home
        </Link>
        <Link href="/services?service=investment">
          Build an Investment Property
        </Link>
        <Link href="/services?service=renovate">Renovate My Space</Link>
        <Link href="/services?service=fit-out">Fit Out My Condo</Link>
        <Link href="/services?service=business">Create My Business Space</Link>
      </div>
      <div className="flex flex-col gap-2 p-10 md:p-5 pb-0 relative z-10 order-3 lg:order-4">
        <h2 className="text-2xl font-bold mb-5">Contact</h2>
        <p>
          <span className="font-semibold">Phone:</span>
          <br /> 0916-266-2773 / 0919-337-3289
        </p>
        <p className="text-xs md:text-sm">
          <span className="font-semibold text-base">Email:</span>
          <br /> pb.ocuaman.construction@gmail.com
        </p>
        <p>
          <span className="font-semibold">Address:</span>
          <br /> Unit 3F, 135 Kamias Road, Diliman, Quezon City, Metro Manila,
          1101
        </p>
        <p>
          <span className="font-semibold"> Hours:</span> Mon-Fri 8am - 5pm
        </p>
      </div>
      <div className="flex flex-col gap-3 p-10 md:p-5 relative z-10 order-4 lg:order-1">
        <h1 className="text-3xl font-bold">
          PB+OCUAMAN <br /> CONSTRUCTION
        </h1>
        <p className="text-sm flex items-end">
          © 2025 PB Construction.
          <br /> All Rights Reserved.
        </p>
        <div className="border-b border-white"></div>{" "}
        <p className="text-sm flex justify-between items-center sm: flex-col sm:items-start ">
          Designed & Developed by &nbsp;
          <Link
            href="https://leonexia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/leonexiaLogo.png"
              alt="Leonexia Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </p>
      </div>
    </div>
  );
};

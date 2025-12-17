import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[17%_25%_26%_32%] bg-[#8B8B6F] p-1  text-white min-h-100 bg-[url('/texture/green-cup.png')] bg-repeat">
      <div className="flex flex-col p-10 pb-0 text-lg">
        <h2 className="text-2xl font-bold mb-5">Quick Links</h2>
        <Link href="/">Home</Link>
        <Link href="/about">About </Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex flex-col p-10 pb-0">
        <h2 className="text-2xl font-bold mb-5">SERVICES</h2>
        <Link href="/services#build-my-dream-home" className="text-lg">
          Build my Dream Home
        </Link>
        <Link href="/services#upgrade-to-bigger-home" className="text-lg">
          Upgrade to Bigger Home
        </Link>
        <Link href="/services#build-an-investment-property" className="text-lg">
          Build an Investment Property
        </Link>
        <Link href="/services#renovate-my-current-home" className="text-lg">
          Renovate my Space
        </Link>
        <Link href="/services#renovate-my-current-home" className="text-lg">
          Fit-Out My Condo
        </Link>
        <Link href="/services#renovate-my-current-home" className="text-lg">
          Create My Business Space
        </Link>
      </div>
      <div className="flex flex-col p-10 pb-0">
        <h2 className="text-2xl font-bold mb-5">CONTACT</h2>
        <p className="text-lg">
          <span className="font-semibold">Phone:</span>
          <br /> 0916-2662773 / 0919-337-3289
        </p>{" "}
        <br />
        <p className="text-base">
          <span className="font-semibold">Email:</span>
          <br /> pb.ocuaman.construction@gmail.com
        </p>{" "}
        <br />
        <p className="text-base md:text-lg">
          <span className="font-semibold">Address:</span>
          <br /> Unit 3F, 135 Kamias Road, Diliman, Quezon City, Metro Manila,
          1101
        </p>
        <p className="text-lg">
          <span className="font-semibold"> Hours:</span> Mon-Fri 8am - 5pm
        </p>
      </div>
      <div className="flex flex-col gap-3 p-10">
        <h1 className="text-3xl font-bold">
          PB + OCUAMAN <br /> CONSTRUCTION
        </h1>
        <p className="text-sm mt-5">
          © 2025 PB Construction. All Rights Reserved. <br /> Designed &
          Developed by &nbsp;
          <span className="font-semibold underline">Leonexia</span>.
        </p>
      </div>
    </div>
  );
};

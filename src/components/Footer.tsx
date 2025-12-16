import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[32%_17%_25%_26%] bg-[#8B8B6F] p-1  text-white min-h-100 bg-[url('/texture/green-cup.png')]  bg-repeat">
      <div className="flex flex-col gap-3 p-10">
        <h1 className="text-3xl font-bold">
          PB + OCUAMAN <br /> CONSTRUCTION
        </h1>
        <p className="text-sm mt-5">
          © 2025 PB Construction. All Rights Reserved. Designed & Developed by
          leonexia.
        </p>
      </div>
      <div className="flex flex-col  p-10">
        <h2 className="text-2xl font-bold mb-5">Quick Links</h2>
        <Link href="/" className="font-semibold text-lg">
          Home
        </Link>
        <Link href="/about" className="font-semibold text-lg">
          About{" "}
        </Link>
        <Link href="/services" className="font-semibold text-lg">
          Services
        </Link>
        <Link href="/projects" className="font-semibold text-lg">
          Projects
        </Link>
        <Link href="/careers" className="font-semibold text-lg">
          Careers
        </Link>
        <Link href="/contact" className="font-semibold text-lg">
          Contact
        </Link>
      </div>
      <div className="flex flex-col  p-10">
        <h2 className="text-2xl font-bold mb-5">SERVICES</h2>
        <Link
          href="/services#build-my-dream-home"
          className="font-semibold text-lg"
        >
          Build my Dream Home
        </Link>
        <Link
          href="/services#upgrade-to-bigger-home"
          className="font-semibold text-lg"
        >
          Upgrade to Bigger Home
        </Link>
        <Link
          href="/services#build-an-investment-property"
          className="font-semibold text-lg"
        >
          Build an Investment Property
        </Link>
        <Link
          href="/services#renovate-my-current-home"
          className="font-semibold text-lg"
        >
          Renovate my Current Home
        </Link>
      </div>
      <div className="flex flex-col  p-10">
        <h2 className="text-2xl font-bold mb-5">CONTACT</h2>
        <p className="font-semibold text-lg">Phone: (123) 456-7890</p>
        <p className="font-semibold text-lg">Email: info@pbconstruction.com</p>
        <p className="font-semibold text-lg">
          Address: 123 Main St, City, State, ZIP
        </p>
        <p className="font-semibold text-lg">Hours: Mon-Fri 8am - 5pm</p>
      </div>
    </div>
  );
};

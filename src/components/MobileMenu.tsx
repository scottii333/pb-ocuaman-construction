"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faPeopleRoof,
  faScrewdriverWrench,
  faBuilding,
  faBriefcase,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="ml-4 block lg:hidden cursor-pointer"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
        </button>
      </SheetTrigger>

      <SheetContent className="w-1/2">
        <SheetHeader>
          <SheetTitle className="text-lg font-bold mb-4"></SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col items-start px-5 text-center gap-3 mt-4">
          <Link href="/" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faHouse} className="h-6 w-6" /> Home
          </Link>
          <div className="border-b border-grey w-full"></div>

          <Link href="/about" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faPeopleRoof} className="h-6 w-6" /> About Us
          </Link>
          <div className="border-b border-grey w-full"></div>

          <Link href="/services" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faScrewdriverWrench} className="h-6 w-6" />{" "}
            Services
          </Link>
          <div className="border-b border-grey w-full"></div>

          <Link href="/projects" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faBuilding} className="h-6 w-6" /> Projects
          </Link>
          <div className="border-b border-grey w-full"></div>

          <Link href="/careers" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faBriefcase} className="h-6 w-6" /> Careers
          </Link>
          <div className="border-b border-grey w-full"></div>

          <Link href="/contact" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faPhone} className="h-6 w-6" /> Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

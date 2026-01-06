import React from "react";
import { Metadata } from "next";
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
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { GetInTouch } from "@/components/GetInTouch";
import { BusinessMapPin } from "@/components/BusinessMapPin";
import { FAQ } from "@/components/FAQ";

// SEO meta for /contact with explicit typing
export const metadata: Metadata = {
  title: "Contact PB + Ocuaman Construction in Quezon City",
  description:
    "Contact PB + Ocuaman Construction for all your construction needs in Quezon City. Visit, call or email us for a free consultation.",
  openGraph: {
    title: "Contact PB + Ocuaman Construction",
    description:
      "Reach out to PB + Ocuaman Construction—Quezon City's trusted contractor for residential and commercial projects.",
    url: "https://pbocuamanconstruction.com/contact",
    images: [
      {
        url: "https://pbocuamanconstruction.com/pb-ocuaman-logo.png",
        width: 512,
        height: 512,
        alt: "Contact PB Ocuaman Construction",
      },
    ],
  },
};

export default function Contact() {
  return (
    <section className="flex flex-col gap-5 mb-10">
      {/* SEO: Hidden, indexed H1 and intro for sitelinks */}
      <h1 className="sr-only">
        Contact PB + Ocuaman Construction in Quezon City
      </h1>
      <p className="sr-only">
        Have questions or want to start your construction project in QC? Call,
        email, or visit PB + Ocuaman Construction for a free consultation and
        estimate.
      </p>

      {/* Your Contact UI/components follows, unchanged */}
      <div className="">
        <GetInTouch />
      </div>
      <BusinessMapPin />
      <FAQ />
    </section>
  );
}

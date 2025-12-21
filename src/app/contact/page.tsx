import React from "react";
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

export default function contact() {
  return (
    <section className="flex flex-col gap-5 mb-10">
      <div className="">
        {" "}
        <GetInTouch />
      </div>

      <BusinessMapPin />

      <FAQ />
    </section>
  );
}

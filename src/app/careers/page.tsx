import React from "react";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ExploreProject } from "@/components/ExploreProject";
import { FAQ } from "@/components/FAQ";
import { JoinOurTeam } from "@/components/JoinOurTeam";
import { GetInTouch } from "@/components/GetInTouch";
import { ApplyForJob } from "@/components/ApplyForJob";

export default function careers() {
  return (
    <section className="flex flex-col gap-20 ">
      {" "}
      {/* Banner Image */}
      <div className=" relative w-full h-160">
        <Image
          src="/sample/sample.jpg"
          alt="Project page banner image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>
      <JoinOurTeam />
      <ApplyForJob />
    </section>
  );
}

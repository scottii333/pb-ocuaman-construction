import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ExploreProject } from "@/components/ExploreProject";
import { FAQ } from "@/components/FAQ";
import ScrollToProjectDetails from "@/components/ScrollToProjectDetails";
import { projectsData } from "@/data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";

// Get project from URL search params
async function getProjectFromParams(
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
) {
  const params = await searchParams;
  const projectId = params.project as string | undefined;

  if (projectId) {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) return found;
  }

  return projectsData[0];
}

interface ProjectsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Dynamic metadata for each project
export async function generateMetadata(
  props: ProjectsPageProps
): Promise<Metadata> {
  const activeProject = await getProjectFromParams(props.searchParams);

  return {
    title: `${activeProject.title} | PB+Ocuaman Construction`,
    description: activeProject.description.substring(0, 160),
    openGraph: {
      title: `${activeProject.title} | PB+Ocuaman Construction`,
      description: activeProject.description,
      images: [activeProject.mainImage],
      type: "website",
    },
  };
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const activeProject = await getProjectFromParams(searchParams);

  return (
    <section className="flex flex-col gap-5 mb-10">
      <ScrollToProjectDetails />

      {/* Banner Image */}
      <div className="relative w-full h-160">
        <Image
          src="/sample/sample.jpg"
          alt="Project page banner image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Project Image Carousel */}
      <div className="flex  flex-col  p-10">
        <h3 className="text-center">
          OUR MOST <span className="text-[#D29E34] font-semibold">RECENT</span>{" "}
          PROJECTS
        </h3>
        <p className="text-center"> Crafted with quality and care.</p>
        <div className="flex gap-5 h-[500px] w-full overflow-x-auto overflow-y-hidden p-5 snap-x snap-mandatory scroll-smooth ">
          <div className="grid grid-cols-1 gap-2 min-w-[650px]">
            {/* First row: 2 columns, each 100px tall */}
            <div className="grid grid-cols-2 gap-2 w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/sample/sample.jpg"
                  alt="Project"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/sample/sample.jpg"
                  alt="Project"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>
            {/* Second row: 1 column, full width, also 100px tall */}
            <div className="relative w-full h-full">
              <Image
                src="/sample/sample.jpg"
                alt="Project"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 min-w-[650px] ">
            {/* Left side: one image, spans 2 rows */}
            <div className="relative row-span-2 h-full">
              <Image
                src="/sample/sample.jpg"
                alt="Project"
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Right side: two stacked images */}
            <div className="relative  h-full min-h-0">
              <Image
                src="/sample/sample.jpg"
                alt="Project"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="relative  h-full min-h-0">
              <Image
                src="/sample/sample.jpg"
                alt="Project"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-end mt-5">
          <button
            type="button"
            aria-label="Previous"
            title="Previous"
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition flex items-center justify-center px-10 py-2"
            style={{ backgroundSize: "200px 200px" }}
          >
            <FontAwesomeIcon icon={faArrowLeftLong} className="text-3xl" />
          </button>

          <button
            type="button"
            aria-label="Next"
            title="Next"
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat text-white cursor-pointer hover:bg-[#6e6e52] transition flex items-center justify-center px-10 py-2"
            style={{ backgroundSize: "200px 200px" }}
          >
            <FontAwesomeIcon icon={faArrowRightLong} className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Project Details - remove key prop */}
      <ProjectDetails data={activeProject} />

      {/* Projects Carousel/Explore */}
      <ExploreProject />

      <FAQ />
    </section>
  );
}

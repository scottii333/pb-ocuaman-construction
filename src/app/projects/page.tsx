import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ExploreProject } from "@/components/ExploreProject";
import { FAQ } from "@/components/FAQ";
import ScrollToProjectDetails from "@/components/ScrollToProjectDetails";
import { projectsData } from "@/data/projectsData";
import { RecentProjectCarousel } from "@/components/RecentProjectCarousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

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
      <div className="relative w-full h-[80vh] lg:h-[90vh]">
        <Image
          src="/sample/sample.jpg"
          alt="Project page banner image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Breadcrumbs */}
        <Breadcrumb className="p-8 absolute top-0 left-0 text-white z-20">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-white">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#D29E34]">
                Projects
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="p-8 absolute bottom-0 left-0 text-white z-10">
          <div className="text-2xl md:text-3xl">
            PROJECTS WE&apos;RE <span className="text-[#D29E34]">PROUD</span> OF
          </div>
          <div className="text-sm md:text-base">
            Learn more about our mission, values, and the people behind our
            work.
          </div>
        </div>
      </div>

      <RecentProjectCarousel />

      {/* Project Details - remove key prop */}
      <ProjectDetails data={activeProject} />

      {/* Projects Carousel/Explore */}
      <ExploreProject />

      <FAQ />
    </section>
  );
}

import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ExploreProject } from "@/components/ExploreProject";
import { FAQ } from "@/components/FAQ";
import ScrollToProjectDetails from "@/components/ScrollToProjectDetails";
import { projectsData } from "@/data/projectsData";
import { RecentProjectCarousel } from "@/components/RecentProjectCarousel";

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

      <RecentProjectCarousel />

      {/* Project Details - remove key prop */}
      <ProjectDetails data={activeProject} />

      {/* Projects Carousel/Explore */}
      <ExploreProject />

      <FAQ />
    </section>
  );
}

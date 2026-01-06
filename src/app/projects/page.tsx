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

// Correct: Only export generateMetadata (NO static 'metadata')
export async function generateMetadata(
  props: ProjectsPageProps
): Promise<Metadata> {
  const params = await props.searchParams;
  const projectId = params.project as string | undefined;

  // If viewing a specific project - dynamic SEO
  if (projectId) {
    const found = projectsData.find((p) => p.id === projectId);
    if (found)
      return {
        title: `${found.title} | PB + Ocuaman Construction`,
        description: found.description.substring(0, 160),
        openGraph: {
          title: `${found.title} | PB + Ocuaman Construction`,
          description: found.description,
          images: [found.mainImage],
          type: "website",
        },
      };
  }

  // Default/fallback meta for the /projects root page
  return {
    title: "Construction Projects in Quezon City | PB + Ocuaman Construction",
    description:
      "See completed home, residential, and commercial construction projects in Quezon City completed by PB + Ocuaman Construction.",
    openGraph: {
      title: "Construction Projects in Quezon City",
      description:
        "Browse a selection of our residential and commercial building projects completed throughout QC.",
      url: "https://pbocuamanconstruction.com/projects",
      images: [
        {
          url: "https://pbocuamanconstruction.com/pb-ocuaman-logo.png",
          width: 512,
          height: 512,
          alt: "Construction Projects in Quezon City",
        },
      ],
    },
  };
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const activeProject = await getProjectFromParams(searchParams);

  return (
    <section className="flex flex-col gap-5 mb-10">
      {/* --- SEO ONLY --- */}
      <h1 className="sr-only">
        Construction Projects in Quezon City — PB + Ocuaman Construction
      </h1>
      <p className="sr-only">
        View residential and commercial construction completed in QC by PB +
        Ocuaman Construction—trusted contractor for homes, condos, offices, and
        more.
      </p>
      <ScrollToProjectDetails />

      {/* Banner Image */}
      <div className="relative w-full h-[80vh] lg:h-[90vh]">
        <Image
          src="https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766348384/projects-hero_ehvc9t.jpg"
          alt="Project page banner image"
          fill
          className="object-cover"
          loading="lazy"
          unoptimized
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

      <ProjectDetails data={activeProject} />

      <ExploreProject />

      <FAQ />
    </section>
  );
}

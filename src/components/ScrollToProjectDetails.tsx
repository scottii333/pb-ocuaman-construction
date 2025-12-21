"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToProjectDetails() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const projectParam = searchParams.get("project");

    if (projectParam) {
      const timer = setTimeout(() => {
        const detailsSection = document.getElementById(
          "project-details-section"
        );
        if (detailsSection) {
          detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return null;
}

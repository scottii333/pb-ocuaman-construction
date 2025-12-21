"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToServiceDetails() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if there's a service parameter in the URL
    const serviceParam = searchParams.get("service");

    if (serviceParam) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const detailsSection = document.getElementById(
          "service-details-section"
        );
        if (detailsSection) {
          detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return null; // This component renders nothing, only handles scrolling
}

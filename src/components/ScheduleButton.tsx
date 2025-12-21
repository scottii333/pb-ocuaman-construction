"use client"; // Ensures this file is treated as a Client Component

import { getCalApi } from "@calcom/embed-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

export const ScheduleButton = () => {
  const handleButtonClick = async () => {
    const cal = await getCalApi({ namespace: "30min" });
    cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Ping must look like the provided snippet */}
      <span
        aria-hidden="true"
        className="absolute inline-flex h-full w-40 animate-ping rounded-full bg-[#232b5f] opacity-75 pointer-events-none "
      ></span>

      <button
        onClick={handleButtonClick}
        data-cal-namespace="30min"
        data-cal-link="pb-ocuaman/30min"
        data-cal-config='{"layout":"month_view"}'
        className="relative z-10 bg-[#232b5f] text-white cursor-pointer flex items-center justify-center px-6 py-2 md:py-3 gap-2 rounded-md transition-transform duration-200 ease-out hover:scale-105 text-sm md:text-base"
      >
        <FontAwesomeIcon icon={faVideo} className="h-6 w-6 text-white" />
        Schedule a Meeting
      </button>
    </div>
  );
};

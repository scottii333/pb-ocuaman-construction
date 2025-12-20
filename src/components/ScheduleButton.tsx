"use client"; // Ensures this file is treated as a Client Component

import { getCalApi } from "@calcom/embed-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

export const ScheduleButton = () => {
  const handleButtonClick = async () => {
    // Initialize the Cal API when the button is clicked
    const cal = await getCalApi({ namespace: "30min" });
    cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
  };

  return (
    <button
      onClick={handleButtonClick}
      data-cal-namespace="30min"
      data-cal-link="pb-ocuaman/30min"
      data-cal-config='{"layout":"month_view"}'
      className="bg-[#232b5f] animate-bounce text-white cursor-pointer flex items-center justify-center px-6 py-2 md:py-3 gap-2"
    >
      <FontAwesomeIcon icon={faVideo} className="h-6 w-6 text-white" />
      Schedule a Meeting
    </button>
  );
};

"use client"; // Ensures this file is treated as a Client Component

import { getCalApi } from "@calcom/embed-react";

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
      className="bg-red-600 px-10 py-5 cursor-pointer"
    >
      Schedule
    </button>
  );
};

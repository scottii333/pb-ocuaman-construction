import React from "react";

export const BusinessMapPin = () => {
  return (
    <div className="w-[90%] max-w-400 mx-auto my-10 overflow-hidden shadow-lg ring-1 ring-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="relative" style={{ paddingTop: "56.25%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1364.8523735051474!2d121.05783789692416!3d14.634046723470888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b75743a49cd7%3A0x7bf82f1130cbf33e!2sPB%2BOcuaman%20Construction!5e0!3m2!1sen!2sph!4v1765736095286!5m2!1sen!2sph"
          title="PB Ocuaman Construction Location"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

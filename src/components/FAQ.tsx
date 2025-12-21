"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "How long does a typical construction project take?",
    answer:
      "Project timelines vary based on size and complexity. Most projects take between a few weeks and several months.",
  },
  {
    question: "Do you offer free site visits or consultations?",
    answer:
      "Yes, we offer complimentary site visits and consultations to assess your needs.",
  },
  {
    question: "How much will my project cost?",
    answer:
      "Costs are based on scope and materials. Contact us for a tailored estimate.",
  },
  {
    question: "Can you help create the design or layout?",
    answer:
      "Absolutely! Our design team can work with you from start to finish.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve most surrounding regions. Please contact us for location-specific details.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="p-5 sm:pl-20 sm:pr-20 md:pl-10 md:pr-10 lg:pl-25 lg:pr-25 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="">
        <h2 className="text-xl md:text-3xl font-medium mb-3">
          FREQUENTLY <br /> <span className="text-yellow-500">ASKED</span>{" "}
          QUESTIONS
        </h2>
        <p className="text-sm md:text-base mt-5 mb-5">
          Got questions? We’ve listed our most frequently <br /> asked questions
          to help you get answers fast.
        </p>
      </div>
      {/* FAQ Accordion starts here */}
      <div className="flex flex-col gap-3">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="rounded px-5 py-4  bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat cursor-pointer transition"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-900 text-sm md:text-base">
                {item.question}
              </span>
              <div className="bg-[#8B8B6F] ml-5 p-2 rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-white  text-sm md:text-lg transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            {/* Animated answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx
                  ? "max-h-[200px] opacity-100 mt-3"
                  : "max-h-0 opacity-0 mt-0"
              } text-sm text-gray-800`}
            >
              <div className="py-2">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
      {/* FAQ Accordion ends here */}
    </section>
  );
};

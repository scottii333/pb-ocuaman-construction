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
    <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="p-5">
        <h2 className="text-2xl">
          FREQUENTLY <br /> <span className="text-yellow-500">ASKED</span>{" "}
          QUESTIONS
        </h2>
        <p>
          Got questions? We’ve listed our most frequently asked questions to
          help you get answers fast.
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
              <span className="text-gray-900 text-base font-medium">
                {item.question}
              </span>
              <div className="bg-[#8B8B6F] ml-5 p-2 rounded-full flex items-center justify-center">
                {" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-white  text-lg transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            {openIndex === idx && (
              <div className="mt-3 text-sm text-gray-800">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      {/* FAQ Accordion ends here */}
    </section>
  );
};

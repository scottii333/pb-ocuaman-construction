import React from "react";
import {
  faHouseChimneyWindow,
  faHouseChimneyMedical,
  faHandHoldingDollar,
  faScrewdriverWrench,
  faBuilding,
  faBriefcase,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceData {
  id: string;
  title: string; // Used in Carousel
  heading: string; // Used in Details (e.g., "BUILD MY FIRST HOME")
  icon: IconDefinition;
  coverImage: string; // Main image for carousel and details
  thumbnails: string[]; // Gallery images
  description: string;
  accordion: {
    howItWorks: React.ReactNode; // Using ReactNode for flexibility (lists, paragraphs)
    timeline: React.ReactNode;
    pricing: React.ReactNode;
  };
}

export const servicesData: ServiceData[] = [
  {
    id: "dream-home",
    title: "BUILD MY DREAM HOME",
    heading: "BUILD MY DREAM HOME",
    icon: faHouseChimneyWindow,
    coverImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
    thumbnails: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347057/service-6_tncl6l.jpg",
    ],
    description:
      "We help homeowners turn their dream home into reality with a guided, stress-free process. From planning your ideal layout to selecting materials that fit your budget, we make sure your home is built with quality, comfort, and long-term value in mind.",
    accordion: {
      howItWorks: (
        <>
          <p>A guided, step-by-step path from idea to handover:</p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>
              Free discovery call — clarify goals, budget, style, and timeline.
            </li>
            <li>
              Design & budget alignment — floor plan options, materials, and
              cost breakdown.
            </li>
            <li>Permits & approvals — coordination with local authorities.</li>
            <li>
              Build phase — foundations, framing, MEP, finishes, inspections.
            </li>
            <li>Handover — final walkthrough, warranties, and move-in.</li>
          </ol>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Discovery & planning: 1–2 weeks</li>
          <li>Design & budget: 2–4 weeks</li>
          <li>Permits & approvals: 2–8+ weeks</li>
          <li>Construction: 4–7 months</li>
          <li>Handover: ~1 week</li>
        </ul>
      ),
      pricing: (
        <>
          <p>Pricing depends on home size, site conditions, and finishes.</p>
          <ul className="list-disc ml-5 space-y-2 mt-2">
            <li>Essentials — best value package.</li>
            <li>Signature — upgraded materials & fixtures.</li>
            <li>Premium — luxury finishes and customization.</li>
          </ul>
        </>
      ),
    },
  },
  {
    id: "upgrade-home",
    title: "UPGRADE TO A BIGGER HOME",
    heading: "UPGRADE & EXPANSION",
    icon: faHouseChimneyMedical,
    coverImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
    thumbnails: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347057/service-6_tncl6l.jpg",
    ],
    description:
      "Outgrowing your current space? We specialize in seamless additions and major expansions. Whether it's a second story, a master suite extension, or a larger kitchen, we ensure the new structure blends perfectly with your existing home.",
    accordion: {
      howItWorks: (
        <p>
          Site analysis, structural assessment, design integration, and build
          execution.
        </p>
      ),
      timeline: <p>Typically 3-5 months depending on complexity.</p>,
      pricing: (
        <p>
          Custom quoted based on square footage added and structural
          requirements.
        </p>
      ),
    },
  },
  {
    id: "investment",
    title: "BUILD AN INVESTMENT PROPERTY",
    heading: "INVESTMENT PROPERTY CONSTRUCTION",
    icon: faHandHoldingDollar,
    coverImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    thumbnails: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347057/service-6_tncl6l.jpg",
    ],
    description:
      "Maximize your ROI with durable, cost-effective construction designed for the rental market. We build multi-family units, duplexes, and rental-ready homes that balance upfront cost with long-term durability.",
    accordion: {
      howItWorks: (
        <p>
          ROI-focused design, durable material selection, rapid construction.
        </p>
      ),
      timeline: <p>4-8 months depending on unit count.</p>,
      pricing: <p>Value-engineered packages available for investors.</p>,
    },
  },
  {
    id: "renovate",
    title: "RENOVATE MY SPACE",
    heading: "FULL HOME RENOVATION",
    icon: faScrewdriverWrench,
    coverImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
    thumbnails: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347057/service-6_tncl6l.jpg",
    ],
    description:
      "Breathe new life into your existing space. From complete gut renovations to modernizing historic homes, we handle everything from demolition to the final coat of paint.",
    accordion: {
      howItWorks: (
        <p>
          Demolition planning, system upgrades (plumbing/electric), aesthetic
          updates.
        </p>
      ),
      timeline: <p>6-12 weeks for major renovations.</p>,
      pricing: <p>Varies widely based on scope (cosmetic vs. structural).</p>,
    },
  },
  {
    id: "fit-out",
    title: "FIT OUT MY CONDO",
    heading: "CONDO FIT-OUT SERVICES",
    icon: faBuilding,
    coverImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    thumbnails: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347057/service-6_tncl6l.jpg",
    ],
    description:
      "Turn your bare condo unit into a stylish, functional home. We handle strict building administration requirements, limited work hours, and logistics to deliver high-quality interiors.",
    accordion: {
      howItWorks: (
        <p>
          Admin permit processing, design approval, fit-out work, final
          cleaning.
        </p>
      ),
      timeline: <p>4–8 weeks.</p>,
      pricing: <p>Package rates available for Studio, 1BR, and 2BR units.</p>,
    },
  },
  {
    id: "business",
    title: "CREATE MY BUSINESS SPACE",
    heading: "COMMERCIAL CONSTRUCTION",
    icon: faBriefcase,
    coverImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347057/service-6_tncl6l.jpg",
    thumbnails: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "Offices, retail stores, restaurants, and warehouses. We build spaces that reflect your brand and optimize operational flow.",
    accordion: {
      howItWorks: (
        <p>
          Brand alignment, functional zoning, commercial code compliance, build.
        </p>
      ),
      timeline: <p>Timeline driven by business opening targets.</p>,
      pricing: <p>Commercial quote based on industry specific requirements.</p>,
    },
  },
];

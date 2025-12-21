export interface ProjectData {
  id: string;
  title: string;
  category: string; // e.g., "RESIDENTIAL", "COMMERCIAL"
  mainImage: string;
  galleryImages: string[]; // Array of gallery images
  description: string;
  accordion: {
    costs: React.ReactNode;
    timeline: React.ReactNode;
  };
}

export const projectsData: ProjectData[] = [
  {
    id: "decena-residence",
    title: "DECENA RESIDENCE",
    category: "RESIDENTIAL",
    mainImage: "/sample/sample.jpg",
    galleryImages: [
      "/sample/sample.jpg",
      "/sample/sample.jpg",
      "/sample/sample.jpg",
      "/sample/sample.jpg",
      "/sample/sample.jpg",
    ],
    description:
      "A modern and elegant private home, Decena Residence features clean lines, open layouts, and a sophisticated use of monochromatic tones.  Designed for both functionality and style, it offers smart spatial planning, quality finishes, and personalized interior details, creating a comfortable and contemporary living space with lasting elegance.",
    accordion: {
      costs: (
        <>
          <p>Project cost breakdown: </p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>Site preparation and foundation: ₱500,000</li>
            <li>Structural framework and MEP: ₱1,200,000</li>
            <li>Interior finishes and fixtures: ₱800,000</li>
            <li>Landscaping and exterior: ₱300,000</li>
            <li>Contingency (10%): ₱280,000</li>
          </ol>
          <p className="mt-3 font-semibold">Total Estimated Cost: ₱3,080,000</p>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Design phase: 4 weeks</li>
          <li>Permits & approvals: 6 weeks</li>
          <li>Construction: 6 months</li>
          <li>Final inspections: 2 weeks</li>
          <li>Handover: 1 week</li>
        </ul>
      ),
    },
  },
  {
    id: "modern-office",
    title: "MODERN OFFICE COMPLEX",
    category: "COMMERCIAL",
    mainImage: "/sample/sample.jpg",
    galleryImages: [
      "/sample/sample.jpg",
      "/sample/sample.jpg",
      "/sample/sample.jpg",
    ],
    description:
      "A state-of-the-art commercial office space designed with modern aesthetics and functional workflows. Features open-plan layouts, collaborative spaces, and eco-friendly systems for a productive work environment.",
    accordion: {
      costs: (
        <>
          <p>Project cost breakdown: </p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>Site development: ₱1,000,000</li>
            <li>Core & shell: ₱3,500,000</li>
            <li>MEP systems: ₱1,800,000</li>
            <li>Interior fit-out: ₱1,500,000</li>
            <li>Contingency: ₱800,000</li>
          </ol>
          <p className="mt-3 font-semibold">Total Estimated Cost: ₱8,600,000</p>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Planning: 6 weeks</li>
          <li>Permits: 8 weeks</li>
          <li>Construction: 9 months</li>
          <li>Testing & commissioning: 4 weeks</li>
        </ul>
      ),
    },
  },
  {
    id: "luxury-villa",
    title: "LUXURY VILLA DEVELOPMENT",
    category: "RESIDENTIAL",
    mainImage: "/sample/sample.jpg",
    galleryImages: [
      "/sample/sample.jpg",
      "/sample/sample.jpg",
      "/sample/sample.jpg",
      "/sample/sample.jpg",
    ],
    description:
      "An exclusive luxury villa featuring premium materials, high-end finishes, and personalized architecture.  Combines elegance with comfort, offering a sanctuary for sophisticated living with breathtaking views and impeccable craftsmanship.",
    accordion: {
      costs: (
        <>
          <p>Project cost breakdown:</p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>Land preparation: ₱750,000</li>
            <li>Foundation & structure: ₱2,000,000</li>
            <li>Premium finishes: ₱1,800,000</li>
            <li>Smart home systems: ₱600,000</li>
            <li>Landscaping: ₱400,000</li>
          </ol>
          <p className="mt-3 font-semibold">Total Estimated Cost: ₱5,550,000</p>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Design & planning: 8 weeks</li>
          <li>Permits: 4 weeks</li>
          <li>Construction: 8 months</li>
          <li>Final touches: 2 weeks</li>
        </ul>
      ),
    },
  },
];

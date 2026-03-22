import React from "react";

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
    id: "rivera-residence",
    title: "RIVERA RESIDENCE",
    category: "RESIDENTIAL",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347057/service-6_tncl6l.jpg",
    ],
    description:
      "The Rivera Residence is a contemporary three-story home that showcases a refined balance of clean geometry and warm materiality. The façade features vertical aluminum louvers that provide privacy and passive sun shading while creating a rhythmic architectural expression. A neutral palette of off-white rendered walls is contrasted with rich wood-textured cladding and soffits, enhancing depth and visual warmth.",
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
    id: "medina-residence",
    title: "MEDINA RESIDENCE",
    category: "COMMERCIAL",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
    ],
    description:
      "Designed to embrace its unique setting, this contemporary three-story residence is oriented to capture panoramic mountain views at the front and expansive beach views at the rear. The architecture responds to both landscapes, creating a seamless dialogue between land and sea through expansive glazing and strategic positioning.",
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
    id: "tecson-residence",
    title: "TECSON RESIDENCE",
    category: "RESIDENTIAL",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "The Tecson Residence is an urban residence that embodies a modern industrial aesthetic softened by warm wood accents. The façade is defined by a bold steel frame, dark metal elements, and clean rectilinear volumes that establish a strong and confident street presence.",
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
  {
    id: "itturralse-residence",
    title: "ITTURRALDE RESIDENCE",
    category: "RESIDENTIAL",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "The Itturralde Residence presents a refined interpretation of contemporary urban living through a bold, monolithic facade. The exterior is wrapped in a seamless light-gray concrete finish, creating a cohesive and sculptural volume. A strong horizontal massing strategy separates the ground level from the upper floor, where a recessed balcony softens the geometry and introduces depth. The overall composition balances solidity and openness—presenting a calm, modern presence within a dense urban context.",
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
  {
    id: "go-residence",
    title: "GO RESIDENCE",
    category: "RESIDENTIAL",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "The Go Residence is a contemporary design that highlights boldness and modern aesthetics. The centerpiece of the home is a modern living room featuring high ceilings that create a spacious and open atmosphere. Tall walls and large windows allow natural light to flood the space, while a stylish chandelier serves as a striking focal point, adding a layer of elegance and sophistication to the interior.",
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
  {
    id: "chapter-antipolo",
    title: "CHAPTER ANTIPOLO",
    category: "COMMERCIAL",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "Designed to embrace the concept of a cozy, quiet, and work-friendly environment, Chapter Antipolo features a refined limewash wall finish that lends a sense of robustness and modern texture. Warm wood accents and finishes provide a soft contrast, enhancing the natural palette and grounding the design. The overall composition harmonizes functionality with style, creating a sophisticated yet comfortable destination for coffee and productivity.",
    accordion: {
      costs: (
        <>
          <p>Project fit-out breakdown:</p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>Interior demolition & site prep: ₱350,000</li>
            <li>Custom millwork & wood accents: ₱800,000</li>
            <li>Specialized lighting & electrical: ₱450,000</li>
            <li>Limewash & premium finishes: ₱300,000</li>
            <li>HVAC & plumbing systems: ₱500,000</li>
          </ol>
          <p className="mt-3 font-semibold">
            Total Estimated Fit-out: ₱2,400,000
          </p>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Design & curation: 4 weeks</li>
          <li>Material procurement: 3 weeks</li>
          <li>Interior fit-out: 3 months</li>
          <li>Testing & commissioning: 1 week</li>
        </ul>
      ),
    },
  },
  {
    id: "chapter-up-town",
    title: "CHAPTER UP-TOWN",
    category: "COMMERCIAL",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "Chapter UP-TOWN is meticulously designed to showcase and enhance productivity. The interior features an intentional integration of ceiling baffles that effectively absorb sound and reduce reverberation, adding a sophisticated modern aesthetic to the open-plenum spaces. A palette of earth tones and natural wood accents balances the industrial elements, resulting in a stylish, functional, and highly productive environment tailored for the modern professional.",
    accordion: {
      costs: (
        <>
          <p>Project fit-out breakdown:</p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>Acoustic treatment & baffles: ₱550,000</li>
            <li>Open-plenum electrical & HVAC: ₱650,000</li>
            <li>Custom workstation millwork: ₱700,000</li>
            <li>Earth-tone finishes & flooring: ₱400,000</li>
            <li>Smart office integration: ₱300,000</li>
          </ol>
          <p className="mt-3 font-semibold">
            Total Estimated Fit-out: ₱2,600,000
          </p>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Conceptual design: 3 weeks</li>
          <li>Acoustic engineering: 2 weeks</li>
          <li>On-site fit-out: 10 weeks</li>
          <li>Testing & handover: 1 week</li>
        </ul>
      ),
    },
  },
  {
    id: "flores-condominium",
    title: "FLORES CONDOMINIUM",
    category: "RESIDENTIAL / INTERIOR",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "The Flores Condominium showcases a modern and welcoming interior defined by premium painted finishes that lend a subtle texture and organic depth to the space. A signature wall-to-ceiling mirror installation creates a striking illusion of expansion, dramatically increasing the sense of scale while preserving a clean, streamlined aesthetic. By blending functional layouts with natural materials, the design achieves a cohesive, natural palette that results in a stylish yet deeply comfortable urban sanctuary.",
    accordion: {
      costs: (
        <>
          <p>Interior renovation breakdown:</p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>Custom mirror & glass works: ₱250,000</li>
            <li>Wall finishes & textured painting: ₱180,000</li>
            <li>Built-in cabinetry & millwork: ₱450,000</li>
            <li>Lighting design & electrical: ₱150,000</li>
            <li>Furniture & soft furnishings: ₱350,000</li>
          </ol>
          <p className="mt-3 font-semibold">
            Total Estimated Renovation: ₱1,380,000
          </p>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Space planning & 3D design: 3 weeks</li>
          <li>Material selection & approval: 2 weeks</li>
          <li>On-site execution/fit-out: 8 weeks</li>
          <li>Final styling & turnover: 1 week</li>
        </ul>
      ),
    },
  },
  {
    id: "cheers-residence",
    title: "CHEERS RESIDENCE",
    category: "RESIDENTIAL / INTERIOR",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "The Cheers Residence features a warm, modern interior highlighted by a soft limewash wall finish that adds depth and a natural, textured character to the space. Clean-lined modular cabinetry is seamlessly integrated into the layout, providing efficient storage while maintaining a minimalist aesthetic. Complementing the walls, rich wood finishes introduce warmth and balance, creating a cohesive design that feels both contemporary and inviting—a refined urban living environment defined by natural textures and functional elegance.",
    accordion: {
      costs: (
        <>
          <p>Interior fit-out breakdown:</p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>Modular cabinetry & millwork: ₱550,000</li>
            <li>Limewash wall applications: ₱180,000</li>
            <li>Wood accents & flooring: ₱320,000</li>
            <li>Lighting & electrical fixtures: ₱120,000</li>
            <li>Interior styling & painting: ₱150,000</li>
          </ol>
          <p className="mt-3 font-semibold">
            Total Estimated Fit-out: ₱1,320,000
          </p>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Design & 3D visualization: 3 weeks</li>
          <li>Cabinetry fabrication: 4 weeks</li>
          <li>On-site installation: 6 weeks</li>
          <li>Final polishing: 1 week</li>
        </ul>
      ),
    },
  },
  {
    id: "medina-condominium",
    title: "MEDINA CONDOMINIUM",
    category: "RESIDENTIAL / INTERIOR",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "The Medina Condominium features a calm and contemporary interior defined by a palette of cool-toned finishes that establish a fresh, relaxing atmosphere. Modular cabinetry is seamlessly integrated into the design to maximize storage while maintaining a clean, organized aesthetic. To balance the cool tones, warm ambient lighting is strategically placed to introduce a soft glow, ensuring the space feels cozy and inviting—a functional and visually harmonious urban sanctuary.",
    accordion: {
      costs: (
        <>
          <p>Interior renovation breakdown:</p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>Custom modular cabinetry: ₱480,000</li>
            <li>Premium cool-tone painting: ₱140,000</li>
            <li>Ambient lighting & electrical: ₱180,000</li>
            <li>Space-saving furniture: ₱250,000</li>
            <li>Interior styling & décor: ₱120,000</li>
          </ol>
          <p className="mt-3 font-semibold">
            Total Estimated Renovation: ₱1,170,000
          </p>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Design development: 3 weeks</li>
          <li>Fabrication & procurement: 4 weeks</li>
          <li>Installation & fit-out: 6 weeks</li>
          <li>Handover & cleanup: 1 week</li>
        </ul>
      ),
    },
  },
  {
    id: "c-district-maginhawa",
    title: "C DISTRICT MAGINHAWA",
    category: "COMMERCIAL / RETAIL",
    mainImage:
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
    description:
      "C District Maginhawa is meticulously designed to provide a high-impact backdrop for product curation. Focused architectural spotlights highlight key pieces and add depth through subtle shadows, intuitively guiding the visitor’s journey through the space. Minimalist wood accents, including refined wall claddings and shelving, introduce a touch of warmth that softens the monochromatic palette. This open and inviting composition ensures a sophisticated aesthetic where the products remain the primary visual focus.",
    accordion: {
      costs: (
        <>
          <p>Retail fit-out breakdown:</p>
          <ol className="list-decimal ml-5 space-y-2 mt-2">
            <li>Custom retail display & shelving: ₱420,000</li>
            <li>Specialized track & spotlighting: ₱280,000</li>
            <li>Wall claddings & wood accents: ₱350,000</li>
            <li>Premium monochromatic finishes: ₱150,000</li>
            <li>Signage & storefront glass: ₱200,000</li>
          </ol>
          <p className="mt-3 font-semibold">
            Total Estimated Fit-out: ₱1,400,000
          </p>
        </>
      ),
      timeline: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Brand-aligned design: 3 weeks</li>
          <li>Display fabrication: 4 weeks</li>
          <li>On-site installation: 6 weeks</li>
          <li>Merchandising & lighting focus: 1 week</li>
        </ul>
      ),
    },
  },
];

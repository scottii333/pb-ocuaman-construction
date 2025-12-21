export interface RecentProject {
  id: string;
  title: string;
  images: string[]; // single array of images (first image can act as main)
}

export const recentProjectsData: RecentProject[] = [
  {
    id: "project-1",
    title: "Recent project",
    images: [
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",

      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347057/service-6_tncl6l.jpg",

      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",

      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347072/service-3_ncvnkr.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347068/service-1_udcqus.jpg",

      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347066/service-2_o9orms.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-4_vvg3zo.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1766347067/service-5_us2rra.jpg",
    ],
  },
];

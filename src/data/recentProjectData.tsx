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
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246373/TECSON_INTERIOR_2_yyp8u2.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246399/SALAZAR_INTERIOR_1_l8txfk.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246366/SALAZAR_INTERIOR_2_c2642c.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246365/SALAZAR_INTERIOR_3_vzx4bh.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246361/TECSON_INTERIOR_4_icqnzu.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246314/TECSON_INTERIOR_1_iwvdwz.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246302/TECSON_INTERIOR_3_mwaous.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246288/SANTOS_RESIDENCE_fdbp2g.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246287/DAVANTES_RESIDENCE_d4cqol.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246273/BROOKSIDE_RESIDENCE_llhtum.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246269/DIAMANTE_RESIDENCE_p0nnhb.png",
      "https://res.cloudinary.com/djubpvnfa/image/upload/q_auto,f_auto,dpr_auto/v1774246250/VELASCO_RESIDENCE_kktdzi.png",
    ],
  },
];

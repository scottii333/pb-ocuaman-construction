import Image from "next/image";
import { partnersData } from "@/data/partnersData";
import { Marquee } from "@/components/ui/marquee";

export const OurPartners = () => {
  return (
    <div>
      <div className="bg-white pt-7">
        <div className="text-2xl md:text-3xl flex justify-center gap-2 my-5 md:my-10">
          Our <span className="text-[#D29E34]"> Partners</span>
        </div>

        <Marquee
          speed={25}
          direction="horizontal"
          fadeEdges={true}
          speedOnHover={10}
          pauseOnTap={true}
          className="px-15 pb-12 flex gap-12 overflow-x-auto no-scrollbar"
        >
          {partnersData.map((partner) => (
            <div key={partner.id} className="flex gap-2 items-center shrink-0">
              <Image
                src={partner.image}
                alt={partner.name}
                width={300}
                height={300}
                className="w-15 h-auto rounded-full aspect-square"
                loading="lazy"
                unoptimized
              />
              <div className="text-base">{partner.name}</div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

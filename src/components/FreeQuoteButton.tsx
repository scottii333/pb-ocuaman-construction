import Link from "next/link";
import React from "react";

export const FreeQuoteButton = () => {
  return (
    <Link
      href="/contact#contact-form"
      className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat px-4 py-3 rounded text-white hover:bg-[#6e6e52] transition cursor-pointer w-full block text-center"
      style={{ backgroundSize: "200px 200px" }}
    >
      REQUEST A FREE QUOTE
    </Link>
  );
};

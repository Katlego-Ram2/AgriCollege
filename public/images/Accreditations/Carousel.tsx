"use client";

import React from "react";

const logos = [
  { src: "/Accreditations/AgriSETA.png", alt: "AgriSETA" },
  { src: "/Accreditations/Comensa.png", alt: "COMENSA" },
  { src: "/Accreditations/ETDP_SETA.png", alt: "ETDP_SETA" },
  {
    src: "/Accreditations/HenleyBusinessSchool.png",
    alt: "HenleyBusinessSchool",
  },
  { src: "/Accreditations/ICR.png", alt: "ICR" },
  { src: "/Accreditations/ICF_Member.png", alt: "ICF_Member" },
];

const AccreditationCarousel = () => {
  return (
    <div className="w-full overflow-hidden bg-background py-4">
      <h3 className="text-center text-[#2a3959] text-xl font-semibold mb-4">
        Accredited By
      </h3>

      <div className="relative w-full">
        <div className="animate-scroll whitespace-nowrap flex gap-10">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccreditationCarousel;

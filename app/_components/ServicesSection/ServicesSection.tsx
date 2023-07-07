"use client";

import { ServiceCard } from "@/_components/ServicesSection/ServiceCard";
import { useGetBannerImage } from "@/_hooks";
import { SERVICES } from "@/_lib/constants";

export const ServicesSection = () => {
  const bannerImage = useGetBannerImage();

  return (
    <div className="row-center flex-wrap gap-6">
      {SERVICES.map((service) => (
        <ServiceCard
          service={service}
          key={service.title}
          bgImage={bannerImage}
        />
      ))}
    </div>
  );
};

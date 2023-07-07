import { SectionLayout } from "@/_components/SectionLayout";
import { ServiceCard } from "@/_components/ServiceCard";
import { SERVICES } from "@/_lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii | Sergiu Barbershop",
  description: "Serviciile oferite de Sergiu Barbershop",
};

export default function Services(): React.JSX.Element {
  return (
    <SectionLayout
      title="Servicii"
      subtitle="Acestea sunt serviciile oferite de noi"
    >
      <div className="row-center flex-wrap gap-6">
        {SERVICES.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
    </SectionLayout>
  );
}

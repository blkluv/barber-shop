import { SectionLayout } from "@/_components/SectionLayout";
import { ServicesSection } from "@/_components/ServicesSection/ServicesSection";
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
      <ServicesSection />
    </SectionLayout>
  );
}

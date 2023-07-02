import { SectionLayout } from "@/_components/SectionLayout";
import { TeamSwiper } from "./TeamSwiper/TeamSwiper";
import { TeamGrid } from "./TeamGrid";

export const TeamSection = () => {
  return (
    <SectionLayout
      title={"Echipa"}
      subtitle={"The barbers"}
      style="overflow-hidden container mx-auto px-2 flex flex-col"
    >
      <TeamSwiper />
      <TeamGrid />
    </SectionLayout>
  );
};

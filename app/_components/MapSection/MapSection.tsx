"use client";

import { SectionLayout } from "@/_components/SectionLayout";
import { useMapRef } from "@/_hooks";
import { ReactNode } from "react";

interface MapSectionProps {
  children: ReactNode;
}

export const MapSection = ({ children }: MapSectionProps) => {
  const { ref } = useMapRef();

  return (
    <SectionLayout
      title={"Locatie"}
      subtitle={"Ne gasesti aici"}
      style="min-h-screen flex flex-col"
      ref={ref}
    >
      {children}
    </SectionLayout>
  );
};

"use client";

import { useMapRef } from "@/hooks/useMapRef";
import { Section } from "./Section";

export const Map = () => {
  const { ref } = useMapRef();

  return (
    <Section title={"Locatie"} subtitle={"Ne gasesti aici"}>
      <div ref={ref}>
        <iframe
          height="550"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          className="h-screen w-full sm:h-140"
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsSF9mMb7ykARYnheKk3oCxo&key=${process.env.NEXT_PUBLIC_API_KEY}`}
        />
      </div>
    </Section>
  );
};

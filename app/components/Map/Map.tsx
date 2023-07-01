"use client";

import { useMapRef } from "@/hooks";
import { SectionLayout } from "@/components";

export const Map = () => {
  const { ref } = useMapRef();

  return (
    <SectionLayout
      title={"Locatie"}
      subtitle={"Ne gasesti aici"}
      style="h-screen flex flex-col"
      ref={ref}
    >
      <iframe
        height="550"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        className="h-full w-full"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsSF9mMb7ykARYnheKk3oCxo&key=${process.env.NEXT_PUBLIC_API_KEY}`}
      />
    </SectionLayout>
  );
};

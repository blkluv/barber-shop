"use client";

import { useMapRef } from "@/hooks/useMapRef";

export const Map = () => {
  const { ref } = useMapRef();

  return (
    <section ref={ref}>
      <iframe
        height="550"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        className="h-screen w-full py-6 sm:h-140"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsSF9mMb7ykARYnheKk3oCxo&key=AIzaSyD0Zp-jrwkShUgbFsTyxe6yG5j33tIuA7k"
      />
    </section>
  );
};

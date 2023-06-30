"use client";

import { motion } from "framer-motion";
import { useMapRef } from "@/hooks/useMapRef";

export const Map = () => {
  const { ref } = useMapRef();

  return (
    <section ref={ref} className="py-6">
      <motion.h2
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="accent-secondary heading-lg md:heading-xl mx-auto mt-20 w-fit"
      >
        Locatie
      </motion.h2>
      <motion.h3
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="p-sm md:p-lg subtitle underlined relative mx-auto mb-20 w-fit py-2 text-muted"
      >
        Ne gasesti aici
      </motion.h3>
      <iframe
        height="550"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        className="h-screen w-full py-6 sm:h-140"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsSF9mMb7ykARYnheKk3oCxo&key=${process.env.NEXT_PUBLIC_API_KEY}`}
      />
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useMapRef } from "@/hooks";

export const Hero = (): React.JSX.Element => {
  const { handleClick } = useMapRef();

  return (
    <motion.section
      key="hero"
      className="hero col-center z-10 min-h-screen w-full gap-2 tall:pb-4 tall:pt-20"
    >
      <motion.h1
        key="header"
        initial={{ x: -70, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        exit={{
          opacity: 0,
          x: 90,
          transition: {
            ease: "easeInOut",
            delay: 1.4,
          },
        }}
        className="heading-lg xs:heading-xl md:heading-2xl max-w-3xl px-2 text-center font-bold"
      >
        Barbershop-ul tau in Iasi
      </motion.h1>

      <motion.button
        key="address"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        exit={{
          opacity: 0,
          x: 90,
          transition: {
            ease: "easeInOut",
            delay: 1.4,
          },
        }}
        onClick={handleClick}
        className="row-center link z-10"
      >
        <LocationOnIcon className="accent-secondary mr-1" />
        <span className="p-base md:p-lg">Strada Aurel Vlaicu 54</span>
      </motion.button>
      <motion.button
        key="schedule-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        exit={{
          opacity: 0,
          transition: {
            ease: "easeInOut",
            delay: 1.4,
          },
        }}
        className="booking-btn"
      >
        Fa o programare
      </motion.button>
    </motion.section>
  );
};

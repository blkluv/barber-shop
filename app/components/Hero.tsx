"use client";

import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useMapRef } from "@/hooks/useMapRef";

export const Hero = (): React.JSX.Element => {
  const { handleClick } = useMapRef();

  return (
    <motion.section key="hero" className="hero col-center gap-2">
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
        className="heading-lg md:heading-xl text-center font-bold"
      >
        Sergiu Barbershop
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
        className="row-center link"
      >
        <LocationOnIcon className="accent-secondary mr-1" />
        <span className="p-base md:p-lg">Strada Aurel Vlaicu 54, Iași</span>
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
        className="border-muted transition-primary mt-6 rounded-sm bg-transparent px-4 py-2 hover:bg-btn-hover hover:text-dark"
      >
        Programeaza
      </motion.button>
    </motion.section>
  );
};

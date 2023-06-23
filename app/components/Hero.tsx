"use client";

import { useMapRef } from "@/hooks/useMapRef";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = (): React.JSX.Element => {
  const { handleClick } = useMapRef();

  return (
    <motion.div
      key="hero"
      className="hero flex gap-2 flex-col items-center justify-center"
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
        className="font-bold text-4xl md:text-7xl text-center"
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
        className="flex justify-center items-center"
      >
        <LocationOnIcon className="text-hover mr-1" />
        <span className="text-base md:text-lg">
          Strada Aurel Vlaicu 54, Iași
        </span>
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
        className="bg-orange-400 hover:bg-orange-300 px-4 py-2 rounded-xl shadow-xl text-dark mt-6 transition duration-300 ease-in-out"
      >
        Programeaza
      </motion.button>
    </motion.div>
  );
};

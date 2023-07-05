"use client";

import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useMapRef } from "@/_hooks";
import { BookingButton } from "@/_components/BookingButton";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Banner = (): React.JSX.Element => {
  const { handleClick } = useMapRef();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="col-center z-10 gap-2"
    >
      <motion.h1
        variants={item}
        className="small:heading-lg heading-lg sm:heading-xl lg:heading-2xl max-w-sm px-6 text-center sm:max-w-xl sm:px-0 lg:max-w-3xl"
      >
        Barbershop-ul tau in Iasi
      </motion.h1>
      <motion.button
        variants={item}
        onClick={handleClick}
        className="row-center link z-10"
      >
        <LocationOnIcon className="accent-secondary mr-1" />
        <span className="p-base lg:p-lg">Strada Aurel Vlaicu 54</span>
      </motion.button>
      <motion.div variants={item} className="w-fit">
        <BookingButton />
      </motion.div>
    </motion.div>
  );
};

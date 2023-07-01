import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { capitalize } from "@/utils";

interface LoaderProps {
  finishLoading: () => void;
}

const banner = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 * i, delay: 0.4 },
  }),
};

const letterAni = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const Loader = ({ finishLoading }: LoaderProps): React.JSX.Element => {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      return finishLoading();
    }, 3000);
  }, [finishLoading]);

  return (
    <>
      <motion.h1
        variants={banner}
        initial="hidden"
        animate="visible"
        className="heading-lg md:heading-xl text-center"
      >
        {"Sergiu Barbershop".split("").map((letter, index) => (
          <motion.span key={index} variants={letterAni}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h2
        key="path"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="heading-md md:heading-lg text-hover"
      >
        {capitalize(pathname.slice(1)) || "Acasa"}
      </motion.h2>
    </>
  );
};

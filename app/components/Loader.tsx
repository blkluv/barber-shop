import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { capitalize } from "@/utils";
import { Logo } from "./Logo";

interface LoaderProps {
  finishLoading: () => void;
}

export const Loader = ({ finishLoading }: LoaderProps): React.JSX.Element => {
  const pathname = usePathname();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <>
      <motion.div
        key="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-10"
      >
        <Logo width={96} height={96} classes="w-24 h-24" />
      </motion.div>
      <motion.h1
        key="title"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Sergiu Barbershop
      </motion.h1>
      <motion.span
        key="path"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-3xl md:text-5xl text-hover"
      >
        {capitalize(pathname.slice(1)) || "Acasa"}
      </motion.span>
    </>
  );
};

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { capitalize } from "@/utils";

interface LoaderProps {
  finishLoading: () => void;
}

export const Loader = ({ finishLoading }: LoaderProps): React.JSX.Element => {
  const pathname = usePathname();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <div className="col-center absolute left-0 top-0 z-50 h-screen w-full bg-main">
      <motion.h1
        key="title"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="heading-lg md:heading-xl text-center"
      >
        Sergiu Barbershop
      </motion.h1>
      <motion.h2
        key="path"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="heading-md md:heading-lg text-hover"
      >
        {capitalize(pathname.slice(1)) || "Acasa"}
      </motion.h2>
    </div>
  );
};

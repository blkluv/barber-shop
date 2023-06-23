"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Loader } from "@/components";
import { MapRefProvider } from "@/providers/MapRefProvider";

export const CustomLayout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MapRefProvider>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key={"loader"}
            transition={{ duration: 0.4, delay: 0.2 }}
            exit={{
              y: "calc(-100vh)",
              transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 1.5,
              },
            }}
          >
            <Loader finishLoading={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div>{children}</motion.div>
        )}
      </AnimatePresence>
    </MapRefProvider>
  );
};

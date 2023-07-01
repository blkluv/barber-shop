"use client";

import { ReactNode, useState } from "react";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";

import { Loader } from "@/components";
import { MapRefProvider } from "@/providers/MapRefProvider";

export const CustomLayout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MapRefProvider>
      <LayoutGroup>
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key={"loader"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              exit={{
                y: "calc(-100vh)",
                transition: {
                  ease: "easeInOut",
                  duration: 1,
                  delay: 1.5,
                },
              }}
              className="col-center absolute left-0 top-0 z-50 h-screen w-full bg-main"
            >
              <Loader finishLoading={() => setIsLoading(false)} />
            </motion.div>
          ) : (
            <motion.div>{children}</motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </MapRefProvider>
  );
};

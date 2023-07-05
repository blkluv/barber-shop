"use client";

import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: NavbarProps): React.JSX.Element => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  const height = useTransform(scrollY, [0, 100], [100, 80]);

  return (
    <motion.nav
      style={{
        background,
        height,
      }}
      className={`row-center z-20 mx-auto w-full px-4 py-2 sm:px-6 lg:px-14 ${
        pathname === "/" ? "fixed" : ""
      }`}
    >
      <div className="row-between w-full max-w-4xl lg:max-w-6xl">
        {children}
      </div>
    </motion.nav>
  );
};

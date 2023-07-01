import { motion, useScroll, useTransform } from "framer-motion";

import { Logo } from "@/components";
import { Hamburger } from "./Hamburger";
import { NavLinks } from "./NavLinks";

export const Navbar = (): React.JSX.Element => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );
  const height = useTransform(scrollY, [0, 100], [100, 60]);

  return (
    <motion.nav
      style={{
        background,
        height,
      }}
      className="row-center fixed z-20 mx-auto h-20 w-full px-4 py-2 sm:px-6 md:absolute lg:px-14"
    >
      <div className="row-between w-full max-w-4xl lg:max-w-6xl">
        <Logo sizes="text-xl sm:text-2xl md:text-3xl" />
        <Hamburger />
        <NavLinks />
      </div>
    </motion.nav>
  );
};

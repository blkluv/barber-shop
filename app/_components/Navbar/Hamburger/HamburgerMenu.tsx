import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

import { PAGES } from "@/_lib/constants";
import { capitalize } from "@/_lib/utils";
import { NavLink } from "@/_components/NavLink";
import { HamburgerMenuImage } from "./HamburgerMenuImage";
import { CloseMenuButton } from "./CloseMenuButton";
import { SocialLinks } from "@/_components/SocialLinks/SocialLinks";

interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const container = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const item = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

export const HamburgerMenu = ({
  isOpen,
  setIsOpen,
}: HamburgerMenuProps): React.JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.4,
          delay: 0.7,
        },
      }}
      className="col-center fixed left-0 top-0 z-10 h-screen w-full bg-main"
    >
      <HamburgerMenuImage />
      <CloseMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.ul
        key="hamburger"
        variants={container}
        initial="closed"
        animate="open"
        exit="closed"
        className="col-center z-10 gap-4 text-4xl font-bold text-bright small:gap-2 small:text-3xl"
      >
        {PAGES.map((page) => (
          <motion.li key={page} variants={item}>
            <NavLink
              onClick={() => setIsOpen(false)}
              href={page === "acasa" ? "/" : `/${page}`}
              title={capitalize(page)}
            />
          </motion.li>
        ))}
        <motion.li
          key="socials"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          exit={{
            opacity: 0,
            y: 90,
            transition: {
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
          className="mt-8 flex gap-2"
        >
          <SocialLinks />
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

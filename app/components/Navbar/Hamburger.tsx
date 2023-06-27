import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";

import { CustomLink } from "@/components";
import { MenuButton } from "./MenuButton";
import { SocialLinks } from "../SocialLinks";
import { PAGES, capitalize } from "@/utils";
import { TRANSITION_PRIMARY } from "@/utils/constants";

export const Hamburger = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="center block md:hidden">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}>
        <MenuRoundedIcon
          sx={{ fontSize: 40, transition: `${TRANSITION_PRIMARY}` }}
          className="hover:text-hover"
        />
      </MenuButton>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.ul
              key="hamburger"
              className="fixed left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-4 bg-main text-4xl font-bold text-bright"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  duration: 0.4,
                  delay: 1.5,
                },
              }}
            >
              <motion.li
                key="close-menu"
                className="absolute right-6 top-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                exit={{
                  opacity: 0,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
              >
                <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}>
                  <CloseIcon
                    sx={{ fontSize: 40, transition: `${TRANSITION_PRIMARY}` }}
                    className="text-bright hover:text-hover"
                  />
                </MenuButton>
              </motion.li>
              {PAGES.map((page) => (
                <motion.li
                  key={page.title}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: page.delay }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: page.delay,
                    },
                  }}
                >
                  <CustomLink
                    onClick={() => setIsOpen(false)}
                    href={page.title === "acasa" ? "/" : `/${page.title}`}
                    title={capitalize(page.title)}
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
                    delay: 0.6,
                  },
                }}
                className="flex gap-2"
              >
                <SocialLinks />
              </motion.li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

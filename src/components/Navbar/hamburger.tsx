import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import CustomLink from "../customLink";

export default function Hamburger(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="center">
      <IconButton
        id="basic-button"
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="z-50"
      >
        <MenuRoundedIcon sx={{ fontSize: 40, transition: 'all 0.3s ease-in-out' }} className="hover:text-hover text-bright" />
      </IconButton>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.ul
              key="hamburger"
              className="flex items-center justify-center font-bold text-3xl absolute left-0 top-0 z-10 h-full w-full flex-col gap-4 bg-main text-bright"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2, }}
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
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1.4,
                  },
                }}
              >
                <CustomLink
                  href={"/"}
                  title={'Acasa'}
                />
              </motion.li>
              <motion.li
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1.2,
                  },
                }}
              >
                <CustomLink
                  href={"team"}
                  title={'Echipa'}
                />
              </motion.li>
              <motion.li
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <CustomLink
                  href={"prices"}
                  title={'Preturi'}
                />
              </motion.li>
              <motion.li
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
              >
                <CustomLink
                  href={"contact"}
                  title={'Contact'}
                />
              </motion.li>

              <motion.li initial={{ y: 60, opacity: 0 }}
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
                <a href="#" className="link">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="#" className="link">
                  <FacebookIcon fontSize="large" />
                </a>
              </motion.li>
            </motion.ul>

          </>
        )}
      </AnimatePresence>
    </div>
  );
};
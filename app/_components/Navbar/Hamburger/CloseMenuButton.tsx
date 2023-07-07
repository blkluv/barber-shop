import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

import { MenuButton } from "../MenuButton";
import { TRANSITION_PRIMARY } from "@/_lib/constants";

interface CloseMenuButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CloseMenuButton = ({
  isOpen,
  setIsOpen,
}: CloseMenuButtonProps): React.JSX.Element => {
  return (
    <motion.li
      key="close-menu"
      className="absolute right-5 top-7 list-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeInOut",
          delay: 0.3,
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
  );
};

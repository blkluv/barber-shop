"use client";

import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { MenuButton } from "../MenuButton";
import { TRANSITION_PRIMARY } from "@/_lib/constants";
import { HamburgerMenu } from "./HamburgerMenu";

export const Hamburger = ({}): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="center block lg:hidden">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}>
        <MenuRoundedIcon
          sx={{ fontSize: 40, transition: `${TRANSITION_PRIMARY}` }}
          className="hover:text-hover"
        />
      </MenuButton>
      {isOpen && <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

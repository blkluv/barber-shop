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

export const HamburgerMenu = ({
  isOpen,
  setIsOpen,
}: HamburgerMenuProps): React.JSX.Element => {
  return (
    <div className="col-center fixed left-0 top-0 z-10 h-screen w-full bg-main">
      <HamburgerMenuImage />
      <CloseMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <ul className="col-center z-10 gap-4 text-4xl font-bold text-bright small:gap-2 small:text-3xl">
        {PAGES.map((page) => (
          <li key={page}>
            <NavLink
              onClick={() => setIsOpen(false)}
              href={page === "acasa" ? "/" : `/${page}`}
              title={capitalize(page)}
            />
          </li>
        ))}
        <li className="mt-8 flex gap-2">
          <SocialLinks />
        </li>
      </ul>
    </div>
  );
};

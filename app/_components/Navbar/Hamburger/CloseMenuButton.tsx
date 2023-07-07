import { Dispatch, SetStateAction } from "react";
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
    <li className="absolute right-5 top-7 list-none">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}>
        <CloseIcon
          sx={{ fontSize: 40, transition: `${TRANSITION_PRIMARY}` }}
          className="text-bright hover:text-hover"
        />
      </MenuButton>
    </li>
  );
};

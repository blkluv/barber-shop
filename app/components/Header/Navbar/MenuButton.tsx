import { Dispatch, ReactNode, SetStateAction } from "react";

interface MenuButtonProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuButton = ({
  children,
  isOpen,
  setIsOpen,
}: MenuButtonProps): React.JSX.Element => {
  return (
    <button
      aria-controls={isOpen ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={isOpen ? "true" : undefined}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      {children}
    </button>
  );
};

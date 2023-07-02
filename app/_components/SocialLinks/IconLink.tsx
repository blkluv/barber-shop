import { ReactNode } from "react";

interface IconLinkProps {
  children: ReactNode;
}

export const IconLink = ({ children }: IconLinkProps): React.JSX.Element => {
  return (
    <a href="#" className="link mr-2">
      {children}
    </a>
  );
};

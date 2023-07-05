import { ReactNode } from "react";

interface IconLinkProps {
  variant?: "bright" | "dark" | "muted";
  children: ReactNode;
}

export const IconLink = ({
  children,
  variant = "bright",
}: IconLinkProps): React.JSX.Element => {
  return (
    <a href="#" className={`link-${variant}`}>
      {children}
    </a>
  );
};

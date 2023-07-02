"use client";

import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface CustomLinkProps {
  onClick?: () => void;
  href: Url;
  title: String;
  classes?: string;
}

export const NavLink = ({
  classes,
  onClick,
  href,
  title,
}: CustomLinkProps): React.JSX.Element => {
  const currentRoute = usePathname();

  return (
    <Link
      onClick={onClick}
      className={
        currentRoute === href ? `link active ${classes}` : `link ${classes}`
      }
      href={href}
    >
      {title}
    </Link>
  );
};

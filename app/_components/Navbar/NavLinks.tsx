import { PAGES } from "@/_lib/constants";
import { capitalize } from "@/_lib/utils";
import { NavLink } from "@/_components/NavLink";

interface NavLinks {
  listStyles: string;
  linkStyles: string;
}

export const NavLinks = ({
  listStyles = "",
  linkStyles = "",
}: NavLinks): React.JSX.Element => {
  return (
    <ul className={listStyles}>
      {PAGES.map((page) => (
        <li key={page}>
          <NavLink
            href={page === "acasa" ? "/" : `/${page}`}
            title={capitalize(page)}
            classes={linkStyles}
          />
        </li>
      ))}
    </ul>
  );
};

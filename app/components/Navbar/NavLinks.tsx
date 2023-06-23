import { CustomLink } from "@/components";
import { PAGES, capitalize } from "@/utils";

export const NavLinks = (): React.JSX.Element => {
  return (
    <ul className="gap-6 hidden md:flex">
      {PAGES.map((page) => (
        <li key={page.title}>
          <CustomLink
            href={page.title === "acasa" ? "/" : `/${page.title}`}
            title={capitalize(page.title)}
          />
        </li>
      ))}
    </ul>
  );
};

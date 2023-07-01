"use client";

import { CustomLink } from "@/components";
import { PAGES, capitalize } from "@/utils";

export const NavLinks = (): React.JSX.Element => {
  return (
    <ul className="p-lg z-10 hidden gap-12 lg:flex">
      {PAGES.map((page) => (
        <li key={page.title}>
          <CustomLink
            href={page.title === "acasa" ? "/" : `/${page.title}`}
            title={capitalize(page.title)}
            classes="underlined relative py-2 font-semibold"
          />
        </li>
      ))}
    </ul>
  );
};

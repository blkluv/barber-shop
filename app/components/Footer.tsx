import { Map } from "./Map";
import { SocialLinks } from "./SocialLinks";
import { CustomLink } from "./CustomLink";
import { PAGES, capitalize } from "@/utils";
import { CONTACTS_LIST, COPYRIGHT } from "@/utils/constants";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="col container mx-auto justify-between gap-12 px-2 sm:px-0 md:gap-16">
      <Map />
      <section className="m-auto grid w-full items-center md:my-8 md:max-w-2xl md:grid-cols-2 lg:max-w-3xl xl:max-w-5xl">
        <div className="col-center text-center md:items-start md:gap-4 md:text-start">
          <h3 className="heading-lg md:heading-xl mb-4 w-fit text-accent-secondary">
            Contact
          </h3>
          <ul className="col mb-4 w-fit">
            {CONTACTS_LIST.map((item) => (
              <li key={item.title} className="p-base md:p-lg">
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
          <SocialLinks />
        </div>
        <div className="mt-8 flex justify-center md:mt-0 md:justify-end">
          <ul className="col w-fit gap-3 text-center md:gap-4 md:text-start">
            {PAGES.map((page) => (
              <li key={page.title} className="heading-sm md:heading-lg">
                <CustomLink
                  href={page.title === "acasa" ? "/" : `/${page.title}`}
                  title={capitalize(page.title)}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-dark-t col-center md:row-center p-sm md:p-base py-6 text-muted md:py-10">
        <span className="mr-2">{COPYRIGHT}</span>
        <span className="hidden md:block">-</span>
        <a href="#" className="link-muted ml-2 mr-2">
          Politica de confidentialitate
        </a>
        <span className="hidden md:block">-</span>
        <a href="#" className="link-muted ml-2">
          Politica de cookies
        </a>
      </section>
    </footer>
  );
};

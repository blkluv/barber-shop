import { Map } from "./Map";
import { SocialLinks } from "./SocialLinks";
import { CustomLink } from "./CustomLink";
import { PAGES, capitalize } from "@/utils";
import { CONTACTS_LIST, COPYRIGHT } from "@/utils/constants";
import { Logo } from "./Logo";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="col container mx-auto min-h-screen items-center justify-between px-2 sm:px-0">
      <section className="m-auto my-8 grid w-full grow items-center md:max-w-2xl md:grid-cols-2 lg:max-w-3xl xl:max-w-5xl">
        <div className="col-center gap-2 text-center md:items-start md:gap-4 md:text-start">
          <Logo sizes={"heading-lg md:heading-xl"} />
          <h3 className="my-4 w-fit text-2xl font-thin text-muted">
            Strada Aurel Vlaicu 54
            <br />
            Iași 707252
          </h3>
          <ul className="col mb-4 w-fit">
            {CONTACTS_LIST.map((item) => (
              <li key={item.title} className="p-base md:p-lg">
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
          <SocialLinks />
          <button className="booking-btn">Fa o programare</button>
        </div>
        <div className="mt-8 hidden justify-center md:mt-0 md:flex md:justify-end">
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
      <section className="border-dark-t col-center md:row-center p-xs md:p-sm w-full py-4 text-muted md:py-8">
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

import { SocialLinks } from "@/_components/SocialLinks/SocialLinks";
import { Logo } from "@/_components/Logo";
import { BookingButton } from "@/_components/BookingButton";
import { NavLinks } from "@/_components/Navbar/NavLinks";
import { BottomSection } from "./BottomSection";
import { ContactLinks } from "./ContactLinks";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="col container mx-auto min-h-screen items-center justify-between px-2 sm:px-0">
      <section className="m-auto my-8 grid w-full grow items-center md:max-w-2xl lg:max-w-3xl lg:grid-cols-2 xl:max-w-5xl">
        <div className="col-center gap-2 text-center lg:items-start lg:gap-4 lg:text-start">
          <Logo sizes={"heading-lg md:heading-xl"} />
          <h3 className="my-4 w-fit text-2xl font-thin text-muted">
            Strada Aurel Vlaicu 54
            <br />
            Iași 707252
          </h3>
          <ContactLinks />
          <SocialLinks />
          <BookingButton />
        </div>
        <div className="mt-8 hidden justify-center md:mt-0 lg:flex lg:justify-end">
          <NavLinks
            linkStyles="heading-sm md:heading-lg"
            listStyles="col w-fit gap-3 text-center md:gap-4 md:text-start"
          />
        </div>
      </section>
      <BottomSection />
    </footer>
  );
};

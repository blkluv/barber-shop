import { Navbar } from "@/_components/Navbar/Navbar";
import { Logo } from "@/_components/Logo";
import { NavLinks } from "@/_components/Navbar/NavLinks";
import { Hamburger } from "@/_components/Navbar/Hamburger/Hamburger";

export const Header = (): React.JSX.Element => {
  return (
    <header className="relative">
      <Navbar>
        <Logo sizes="text-xl sm:text-2xl md:text-3xl" />
        <Hamburger />
        <NavLinks
          listStyles="p-lg z-10 hidden gap-12 lg:flex"
          linkStyles="underlined relative py-2 font-semibold"
        />
      </Navbar>
    </header>
  );
};

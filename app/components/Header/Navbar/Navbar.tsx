import { Hamburger } from "./Hamburger";
import { NavLinks } from "./NavLinks";

export const Navbar = (): React.JSX.Element => {
  return (
    <nav className="row-center relative z-20 mx-auto h-20 px-4 py-2 sm:px-6 lg:px-14">
      <div className="row-between w-full max-w-4xl lg:max-w-6xl">
        <a href="/">
          <h2 className="logo">
            Sergiu <br /> Barbershop
          </h2>
        </a>
        <Hamburger />
        <NavLinks />
      </div>
    </nav>
  );
};

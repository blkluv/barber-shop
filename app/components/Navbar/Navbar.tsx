import { Hamburger } from "./Hamburger";
import { NavLinks } from "./NavLinks";
import { Logo } from "../Logo";

export const Navbar = (): React.JSX.Element => {
  return (
    <nav className="row-center h-full max-h-20 px-4 py-2 sm:px-6 lg:px-14">
      <div className="row-between w-full max-w-2xl lg:max-w-6xl">
        <Logo width={64} height={64} classes="w-16 h-16" />
        <Hamburger />
        <NavLinks />
      </div>
    </nav>
  );
};

import { Hamburger } from "./Hamburger";
import { NavLinks } from "./NavLinks";
import { Logo } from "../Logo";

export const Navbar = (): React.JSX.Element => {
  return (
    <nav className="bg-main h-full max-h-20 flex items-center justify-center px-4 sm:px-6 lg:px-14 py-2">
      <div className="max-w-2xl lg:max-w-6xl w-full flex justify-between items-center">
        <Logo width={64} height={64} classes="w-16 h-16" />
        <Hamburger />
        <NavLinks />
      </div>
    </nav>
  );
};

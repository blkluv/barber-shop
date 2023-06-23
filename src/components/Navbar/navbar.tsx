import Image from "next/image";
import Link from "next/link";

import Hamburger from "./hamburger";
import NavLinks from "./navLinks";

export default function Navbar(): React.JSX.Element {

  return (
    <nav className="bg-main h-full max-h-20 flex items-center justify-center px-4 sm:px-6 lg:px-14 py-2">
      <div className="max-w-2xl lg:max-w-6xl w-full flex justify-between items-center">
        <Link href={'/'} className="block w-fit">
          <Image src='/images/logo.png' width={70} height={70} sizes="100%" alt="barber-shop logo" priority className="w-16 h-16" />
        </Link>
        <Hamburger />
        <NavLinks />
      </div>
    </nav>
  );
}


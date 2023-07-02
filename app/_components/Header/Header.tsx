import Image from "next/image";

import { Navbar } from "@/_components/Navbar/Navbar";
import { Logo } from "@/_components/Logo";
import { NavLinks } from "@/_components/Navbar/NavLinks";
import { Hamburger } from "@/_components/Navbar/Hamburger";
import { SocialLinks } from "@/_components/SocialLinks/SocialLinks";

export const Header = (): React.JSX.Element => {
  return (
    <header className="relative">
      <Navbar>
        <Logo sizes="text-xl sm:text-2xl md:text-3xl" />
        <Hamburger socialLinks={<SocialLinks />}>
          <Image
            src={"/images/bg.jpg"}
            alt=""
            width={4000}
            height={6000}
            className="rounded-bl-full"
          />
        </Hamburger>
        <NavLinks
          listStyles="p-lg z-10 hidden gap-12 lg:flex"
          linkStyles="underlined relative py-2 font-semibold"
        />
      </Navbar>
    </header>
  );
};

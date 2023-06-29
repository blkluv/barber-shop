"use client";

import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./Hero/Hero";
import Image from "next/image";

export const Header = (): React.JSX.Element => {
  return (
    <header className="relative">
      {/* <div className="col-center absolute left-0 top-0 h-full w-full opacity-50">
        <Image src={"/blobanimation.svg"} alt="" width={1000} height={1000} />
      </div> */}

      <video
        muted
        autoPlay
        loop
        className="absolute left-0 top-0 h-full w-full object-cover opacity-20"
      >
        <source src={"/hero-bg-video.mp4"} type="video/mp4" />
      </video>
      <Navbar />
      <Hero />
    </header>
  );
};

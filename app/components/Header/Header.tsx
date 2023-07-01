"use client";

import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./Hero/Hero";

export const Header = (): React.JSX.Element => {
  return (
    <header className="relative min-h-screen">
      <video
        muted
        autoPlay
        loop
        className="absolute left-0 top-0 h-full w-full object-cover opacity-30"
        poster="/images/bg.jpg"
      >
        <source
          src={
            "https://res.cloudinary.com/dwdb9zdiu/video/upload/q_auto:eco/f_auto/dpr_auto/v1688124893/sergiu-barbershop/hero-bg-video_xcftft.mp4"
          }
          type="video/mp4"
        />
      </video>

      <Navbar />
      <Hero />
    </header>
  );
};

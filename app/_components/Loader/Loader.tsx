"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { capitalize } from "@/_lib/utils";

interface LoaderProps {
  finishLoading: () => void;
}

export const Loader = ({ finishLoading }: LoaderProps): React.JSX.Element => {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      return finishLoading();
    }, 3000);
  }, [finishLoading]);

  return (
    <>
      <h1 className="heading-lg md:heading-xl text-center">
        {"Sergiu Barbershop".split("").map((letter, index) => (
          <span key={`${index}-${letter}`}>{letter}</span>
        ))}
      </h1>
      <h2 className="heading-md md:heading-lg text-hover">
        {capitalize(pathname.slice(1)) || "Acasa"}
      </h2>
    </>
  );
};

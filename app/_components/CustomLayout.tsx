"use client";

import { ReactNode, useState } from "react";

import { MapRefProvider } from "@/_providers";
import { Loader } from "./Loader/Loader";

export const CustomLayout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MapRefProvider>
      {isLoading ? (
        <div className="col-center absolute left-0 top-0 z-50 h-screen w-full bg-main">
          <Loader finishLoading={() => setIsLoading(false)} />
        </div>
      ) : (
        <>{children}</>
      )}
    </MapRefProvider>
  );
};

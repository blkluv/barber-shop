import { useContext } from "react";
import { MapRefContext } from "@/_providers/MapRefProvider";

export const useMapRef = () => {
  const mapRefContext = useContext(MapRefContext);

  if (!mapRefContext) {
    throw new Error("useMapRef has to be used within <MapRefContext.Provider>");
  }

  return mapRefContext;
};

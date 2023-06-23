import { MapRefContext } from "@/providers/MapRefProvider";
import { useContext } from "react";

export const useMapRef = () => {
  const mapRefContext = useContext(MapRefContext);

  if (!mapRefContext) {
    throw new Error("useMapRef has to be used within <MapRefContext.Provider>");
  }

  return mapRefContext;
};

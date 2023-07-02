import { MutableRefObject, ReactNode, createContext, useRef } from "react";

interface MapRefContextProps {
  handleClick: () => void;
  ref: MutableRefObject<HTMLDivElement | null>;
}

export const MapRefContext = createContext<MapRefContextProps | null>(null);

export const MapRefProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MapRefContext.Provider value={{ handleClick, ref }}>
      {children}
    </MapRefContext.Provider>
  );
};

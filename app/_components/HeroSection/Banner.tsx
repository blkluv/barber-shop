"use client";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useMapRef } from "@/_hooks";
import { BookingButton } from "@/_components/BookingButton";

export const Banner = (): React.JSX.Element => {
  const { handleClick } = useMapRef();

  return (
    <div className="col-center z-10 gap-2">
      <h1 className="small:heading-lg heading-lg sm:heading-xl lg:heading-2xl max-w-sm px-6 text-center sm:max-w-xl sm:px-0 lg:max-w-3xl">
        Barbershop-ul tau in Iasi
      </h1>
      <button onClick={handleClick} className="row-center link z-10">
        <LocationOnIcon className="accent-secondary mr-1" />
        <span className="p-base lg:p-lg">Strada Aurel Vlaicu 54</span>
      </button>
      <div className="w-fit">
        <BookingButton />
      </div>
    </div>
  );
};

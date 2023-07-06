import { Box } from "@mui/material";
import Image from "next/image";

import { TRANSITION_PRIMARY } from "@/_lib/constants";

interface BarberCardProps {
  src: string;
  width: number;
  height: number;
  name: string;
}

const boxProps = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

export const TeamMemberCard = ({
  src,
  width,
  height,
  name,
}: BarberCardProps) => {
  return (
    <div className="col-center mx-auto h-80 w-full max-w-[220px] grow">
      <Box sx={{ position: "relative" }} className="h-full w-full">
        <Image src={src} alt="" width={width} height={height} />
        <Box
          sx={{
            ...boxProps,
            transition: TRANSITION_PRIMARY,
            opacity: 0,
            "&:hover, &:focus-within": {
              opacity: 1,
            },
          }}
        >
          <Box
            sx={{
              ...boxProps,
              bgcolor: "rgba(0, 0, 0, 0.5)",
              color: "white",
            }}
            className="col-center"
          >
            <h3 className="font-bold text-bright">{name}</h3>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

"use client";

import CollectionsIcon from "@mui/icons-material/Collections";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconLink } from "../SocialLinks/IconLink";

import { Box } from "@mui/material";
import Image from "next/image";
import { TRANSITION_PRIMARY } from "@/_lib/constants";
import { Image as ImageType } from "@/_types";

interface Service {
  title: string;
  price: string;
  description: string;
  image: string;
  galleryLink: string;
}

interface ServiceCardProps {
  service: Service;
  bgImage: ImageType | undefined;
}

const boxProps = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

export const ServiceCard = ({
  service,
  bgImage,
}: ServiceCardProps): React.JSX.Element => {
  return (
    <div className="transition-primary w-full max-w-xs rounded-md bg-slate-300 text-center shadow-lg shadow-[#4e3d2f] hover:scale-95 hover:shadow-2xl hover:shadow-slate-400">
      <Box sx={{ position: "relative" }} className="h-full w-full">
        {bgImage && (
          <Image
            src={bgImage.src}
            alt=""
            width={bgImage.width}
            height={bgImage.height}
          />
        )}
        <Box
          sx={{
            ...boxProps,
            transition: TRANSITION_PRIMARY,
            opacity: 1,
            "&:hover, &:focus-within": {
              opacity: 0.9,
            },
          }}
        >
          <Box
            sx={{
              ...boxProps,
              bgcolor: "rgba(0, 0, 0, 0.8)",
              color: "white",
            }}
            className="col-center gap-2"
          >
            <h3 className="text-3xl font-bold md:text-4xl">{service.title}</h3>
            <h4 className="mb-8 text-lg text-accent-secondary md:text-xl">
              {service.price}
            </h4>
            <p className="text-gray-300">{service.description}</p>
            <div className="row-center mt-8 gap-3">
              <IconLink variant="bright">
                <CollectionsIcon fontSize="large" />
              </IconLink>
              <IconLink variant="bright">
                <CalendarMonthIcon fontSize="large" />
              </IconLink>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

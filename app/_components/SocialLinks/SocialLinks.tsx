"use client";

import { IconLink } from "./IconLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SocialLinks = (): React.JSX.Element => {
  return (
    <div className="w-fit">
      <IconLink>
        <InstagramIcon sx={{ fontSize: "40px" }} />
      </IconLink>
      <IconLink>
        <FacebookIcon sx={{ fontSize: "40px" }} />
      </IconLink>
    </div>
  );
};

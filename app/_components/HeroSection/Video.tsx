"use client";

import { useGetBannerImage } from "@/_hooks";

export const Video = (): React.JSX.Element => {
  const bannerImage = useGetBannerImage();

  return (
    <video
      muted
      autoPlay
      loop
      className="absolute left-0 top-0 h-full w-full object-cover opacity-30"
      poster={bannerImage}
    >
      <source
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/q_auto:eco/f_auto/dpr_auto/v1688124893/sergiu-barbershop/hero-bg-video_xcftft.mp4`}
        type="video/mp4"
      />
    </video>
  );
};

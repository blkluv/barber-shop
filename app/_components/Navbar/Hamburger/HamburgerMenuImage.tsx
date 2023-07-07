import { useGetBannerImage } from "@/_hooks";
import Image from "next/image";

export const HamburgerMenuImage = (): React.JSX.Element => {
  const bannerImage = useGetBannerImage();

  return (
    <div className="absolute right-0 top-0 max-h-80 max-w-xs rounded-xl opacity-20">
      {bannerImage && (
        <Image
          src={bannerImage.src}
          alt=""
          width={bannerImage.width}
          height={bannerImage.height}
          className="rounded-bl-full"
        />
      )}
    </div>
  );
};

import { client, urlFor } from "@/_lib/sanity";
import { FetchedImage, Image } from "@/_types";
import { useEffect, useState } from "react";

export const useGetBannerImage = () => {
  const [bannerImage, setBannerImage] = useState<Image>();

  useEffect(() => {
    async function getBannerImage() {
      const query = '*[_type == "hero-image"]';

      try {
        const data = await client.fetch(query);
        const poster = data.map((image: FetchedImage) => ({
          src: urlFor(image.imgUrl).url(),
          width: image.width,
          height: image.height,
        }));

        setBannerImage(poster[0]);
      } catch (error) {
        console.error(error);
      }
    }

    getBannerImage();
  }, []);

  return bannerImage;
};

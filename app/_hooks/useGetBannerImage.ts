import { client, urlFor } from "@/_lib/sanity";
import { FetchedImage } from "@/_types";
import { useEffect, useState } from "react";

export const useGetBannerImage = () => {
  const [bannerImage, setBannerImage] = useState<string>();

  useEffect(() => {
    async function getBannerImage() {
      const query = '*[_type == "hero-image"]';

      try {
        const data = await client.fetch(query);
        console.log(data);
        const poster = data.map((image: FetchedImage) => ({
          src: urlFor(image.imgUrl).url(),
        }));

        setBannerImage(poster[0].src);
      } catch (error) {
        console.error(error);
      }
    }

    getBannerImage();
  }, []);

  return bannerImage;
};

import { client, urlFor } from "@/_lib/sanity";
import { FetchedImage, Image } from "@/_types";
import { useEffect, useState } from "react";

export const useGetGalleryImages = () => {
  const [galleryImages, setGalleryImages] = useState<Image[]>([]);

  useEffect(() => {
    async function getGalleryImages() {
      const query = '*[_type == "gallery-image"]';

      try {
        const data = await client.fetch(query);
        const images = data.map((image: FetchedImage) => ({
          width: image.width,
          height: image.height,
          src: urlFor(image.imgUrl).url(),
        }));

        setGalleryImages(images);
      } catch (error) {
        console.error(error);
      }
    }

    getGalleryImages();
  }, []);

  return galleryImages;
};

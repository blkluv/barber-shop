import { client, urlFor } from "@/_lib/sanity";
import { FetchedImage, Image } from "@/_types";
import { useEffect, useState } from "react";

export const useGetBarberImages = () => {
  const [barberImages, setBarberImages] = useState<Image[]>([]);

  useEffect(() => {
    async function getBarberImages() {
      const query = '*[_type == "barber"]';

      try {
        const data = await client.fetch(query);
        const images = data.map((image: FetchedImage) => ({
          name: image.name,
          width: image.width,
          height: image.height,
          src: urlFor(image.imgUrl).url(),
        }));

        setBarberImages(images);
      } catch (error) {
        console.error(error);
      }
    }

    getBarberImages();
  }, []);

  return barberImages;
};

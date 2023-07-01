import Image from "next/image";
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from "yet-another-react-lightbox";
import { RenderSlideProps } from "yet-another-react-lightbox/dist/types";

import { getImageHeight, getImageWidth, isNextJsImage } from "@/utils";

export const CustomImage = ({ slide, rect }: RenderSlideProps) => {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = getImageWidth(cover, slide, rect);
  const height = getImageHeight(cover, slide, rect);

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={slide as unknown as "string | StaticImport"}
        loading="eager"
        draggable={false}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
};

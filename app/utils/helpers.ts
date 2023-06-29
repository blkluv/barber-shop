import {
  ContainerRect,
  SlideImage,
  isImageSlide,
} from "yet-another-react-lightbox";

export const isNextJsImage = (slide: SlideImage) => {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
};

export const getImageWidth = (
  cover: boolean,
  slide: SlideImage,
  rect: ContainerRect
) => {
  return !cover && slide.height && slide.width
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width)
      )
    : rect.width;
};

export const getImageHeight = (
  cover: boolean,
  slide: SlideImage,
  rect: ContainerRect
) => {
  return !cover && slide.height && slide.width
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height)
      )
    : rect.height;
};

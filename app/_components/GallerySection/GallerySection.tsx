"use client";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { GALLERY_PHOTOS } from "@/_lib/constants";
import { SectionLayout } from "@/_components/SectionLayout";
import { CustomImage } from "./CustomImage";

export const GallerySection = (): React.JSX.Element => {
  const [index, setIndex] = useState(-1);

  return (
    <SectionLayout
      title="Galerie"
      subtitle="Creatiile noastre"
      style="container mx-auto mt-12 px-2"
    >
      <PhotoAlbum
        layout="rows"
        photos={GALLERY_PHOTOS}
        onClick={({ index: current }) => setIndex(current)}
        componentsProps={() => ({
          imageProps: { className: "image" },
        })}
      />

      <Lightbox
        index={index}
        slides={GALLERY_PHOTOS}
        open={index >= 0}
        close={() => setIndex(-1)}
        render={{ slide: CustomImage }}
        plugins={[Thumbnails, Zoom]}
      />
    </SectionLayout>
  );
};

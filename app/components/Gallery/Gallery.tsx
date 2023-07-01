"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { CustomImage } from "./CustomImage";
import { GALLERY_PHOTOS } from "@/utils/constants";
import { Section } from "../Section";

export const Gallery = (): React.JSX.Element => {
  const [index, setIndex] = useState(-1);

  return (
    <Section
      title="Galerie"
      subtitle="Creatiile noastre"
      style="container mx-auto mt-12 px-2"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <PhotoAlbum
          layout="rows"
          photos={GALLERY_PHOTOS}
          onClick={({ index: current }) => setIndex(current)}
          componentsProps={() => ({
            imageProps: { className: "image" },
          })}
        />
      </motion.div>
      <Lightbox
        index={index}
        slides={GALLERY_PHOTOS}
        open={index >= 0}
        close={() => setIndex(-1)}
        render={{ slide: CustomImage }}
        plugins={[Thumbnails, Zoom]}
      />
    </Section>
  );
};

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { CustomImage } from "./CustomImage";
import { GALLERY_PHOTOS } from "@/utils/constants";

export const Gallery = (): React.JSX.Element => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="container mx-auto my-6 px-2">
      <motion.h1
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="accent-secondary heading-lg mx-auto my-20 w-fit"
      >
        Galerie Foto
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <PhotoAlbum
          layout="rows"
          photos={GALLERY_PHOTOS}
          onClick={({ index: current }) => setIndex(current)}
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
    </section>
  );
};

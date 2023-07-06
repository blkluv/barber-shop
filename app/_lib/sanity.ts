import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { ImageUrl } from "@/_types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-07-06",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: ImageUrl) => builder.image(source);

import { PortableTextBlock } from "@sanity/types";

export type Image = {
  asset: {
    url: string; // Direct URL for the image
  };
};

export type Author = {
  name: string;
  bio: string;
  image: Image; // Author image as an object
};

export type Post = {
  title: string;
  summary: string;
  image: Image; // Post image as an object
  slug: string;
  content: PortableTextBlock[]; // PortableTextBlock array for Sanity content
  author: Author;
};

export type Card = {
    title: string;
    image: image;
    slug: string;
    summary: string;
}
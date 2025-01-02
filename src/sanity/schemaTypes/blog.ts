import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      type: "string",
      title: "Summary",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author Ref",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

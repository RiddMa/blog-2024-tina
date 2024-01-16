// import { Collection } from "tinacms";
//
// export const PageCollection: Collection = {
//   name: "page",
//   label: "Page",
//   path: "content/pages",
//   format: "md",
//   ui: {
//     router: () => "/",
//   },
//   fields: [
//     {
//       type: "string",
//       name: "header",
//       label: "Header",
//     },
//     {
//       type: "object",
//       name: "logo",
//       label: "Logo",
//       fields: [
//         { type: "image", name: "url", label: "URL" },
//         { type: "string", name: "alt", label: "Alt Text" },
//       ],
//     },
//     {
//       type: "object",
//       list: true,
//       name: "links",
//       label: "Links",
//       ui: {
//         itemProps: (item) => {
//           return {
//             label: item?.header,
//           };
//         },
//       },
//       fields: [
//         { type: "string", name: "header" },
//         { type: "string", name: "description" },
//         { type: "string", name: "url" },
//       ],
//     },
//   ],
// };

import type { Collection } from "tinacms";
import { heroBlockSchema } from "../../components/blocks/hero";
import { contentBlockSchema } from "../../components/blocks/content";
import { testimonialBlockSchema } from "../../components/blocks/testimonial";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "public/content/pages",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      if (document._sys.filename === "about") {
        return `/about`;
      }
      return undefined;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
      ],
    },
  ],
};

export default Page;

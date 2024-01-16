import type { Page, PageBlocks } from "../tina/__generated__/types";
import { Content } from "./blocks/content";
// import { Features } from "./blocks/features.tsx.txt";
// import { Hero } from "./blocks/hero.tsx.txt";
// import { Testimonial } from "./blocks/testimonial.tsx.txt";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} />;
    // case "PageBlocksHero":
    //   return <Hero data={block} />;
    // case "PageBlocksFeatures":
    //   return <Features data={block} />;
    // case "PageBlocksTestimonial":
    //   return <Testimonial data={block} />;
    default:
      return null;
  }
};

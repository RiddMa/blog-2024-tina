import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { format } from "date-fns";
// import { PostsType } from "../../pages/posts";
import { getUriFromFilepath } from "../../util/util";
import Image from "next/image";

// type PageQueryPostType = PostsType["node"]

export function PostCard(props: {
  post: any,
}) {
  const post = props.post;
  const date = new Date(post.updateDate);
  const formattedDate = !isNaN(date.getTime()) ? format(date, "yyyy-MM-dd") : "";
  const postHref = getUriFromFilepath(post._sys.path);

  return <>
    <Link href={postHref}
          className="card color-card flex flex-row prose-article-card transition-apple drop-shadow-lg hover:drop-shadow-2xl max-h-[250px]">
      {post.heroImg && <div className="relative m-0 p-0 block min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px]">
        <Image src={post.heroImg} alt="" className="card"
               fill={true}
               style={{ objectFit: "cover", margin: 0 }}
        />
      </div>
      }
      <div className="m-0 flex flex-col flex-grow gap-4 p-4 xl:px-8 ">
        <h1 className="line-clamp-2 overflow-ellipsis">{post.title}</h1>
        <div className="m-0 overflow-ellipsis line-clamp-2">
          <TinaMarkdown content={post.excerpt} />
        </div>
        <div className={`grow`}></div>
        <div className={`flex flex-row m-0`}>
          <div className={`m-0 flex flex-row gap-2 xl:gap-4 p-0`}>
            {props.post?.categories?.map(({ category }) => {
              return (
                <Link
                  href={getUriFromFilepath(category._sys.path)}
                  key={category._sys.path}
                  className={`text-href text-color-caption hover-text-color-href`}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
          <div className={`grow`}></div>
          <span className={`text-body text-color-caption`}>
            {formattedDate}
          </span>
        </div>
      </div>
    </Link>
  </>;
}

export const Posts = ({ data }: { data: any[] }) => {
  return (
    <div className="flex flex-col gap-8">
      {data.map((postData) => {
        return (
          <PostCard key={postData.node._sys.filename} post={postData.node} />
        );
      })}
    </div>
  );
};

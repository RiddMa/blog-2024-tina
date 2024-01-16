import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "../../util/container";

export const Footer = ({ data }) => {
  const [viewCount, setViewCount] = useState(0);
  useEffect(() => {
    const apiPrefix = {
      production: "api",
      development: "test"
    };
    fetch(`${process.env.VIEWCOUNT_API}/${apiPrefix[process.env.NODE_ENV]}/total/`)
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setViewCount(resultData.totalView);
      });
  }, []);

  return (
    <footer className={`bg-gradient-to-br`}>
      <Container
        className="px-4 py-16 flex flex-row flex-wrap justify-center gap-8 lg:gap-16 prose-text transition-apple opacity-80 hover:opacity-100">
        <div className="flex flex-row flex-wrap justify-between items-center gap-4">
          {data?.nav?.map((nav) =>
            <Link key={nav.href} href={nav.href} className="">
              {nav.label}
            </Link>)}
        </div>
        <div className="flex flex-col gap-2 text-caption">
          <div className={`mx-auto`}>
          <span>
            {viewCount ? `${viewCount}` : `...`}
            {` 次访问。`}
          </span>
          </div>
          <div className={`mx-auto flex flex-row flex-wrap justify-center gap-x-1`}>
            <span className={`whitespace-nowrap`}>{`© Ridd Ma 始于 2023，`}</span>
            <span className={`whitespace-nowrap`}>
            {`使用 `}
              <a href={`https://creativecommons.org/licenses/by-nc-sa/4.0/`} target="_blank">CC-BY-NC-SA 4.0</a>
              {` 授权。`}
          </span>
          </div>
          <div className={`mx-auto flex flex-row flex-wrap justify-center gap-x-1`}>
          <span className={`whitespace-nowrap`}>{`由 `}
            <a href={`https://creativecommons.org/licenses/by-nc-sa/4.0/`} target="_blank">TinaCMS</a>
            {` 强力驱动。`}
          </span>
          </div>
        </div>


      </Container>
      <div
        className={`absolute h-1 bg-gradient-to-r from-transparent ${
          data.color === "primary" ? `via-white` : `via-black dark:via-white`
        } to-transparent top-0 left-4 right-4 opacity-5`}
      ></div>
    </footer>
  );
};

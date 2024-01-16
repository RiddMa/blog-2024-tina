import {
  UsernamePasswordAuthJSProvider,
  TinaUserCollection
} from "tinacms-authjs/dist/tinacms";
import { defineConfig, LocalAuthProvider } from "tinacms";

import Post from "./collections/post";
import Global from "./collections/global";
import Author from "./collections/author";
import Page from "./collections/page";
import Category from "./collections/category";
import Column from "./collections/column";
// import { PageCollection } from "./collections/page";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
  branch: "main",
  clientId: "67fbdf3a-7da8-4204-9887-c915561c4b3f",
  token: "cfd0f98c1548100e9e6c24ab4d1e2387327c447c",
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  // contentApiUrlOverride: "/api/tina/gql",
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "",
      static: true
    }
  },
  schema: {
    collections: [TinaUserCollection, Post, Global, Author, Page, Category, Column]
  }
});

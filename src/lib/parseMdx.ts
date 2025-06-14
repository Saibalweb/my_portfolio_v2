import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import {compileMDX} from "next-mdx-remote/rsc";
import remarkGfm from 'remark-gfm'
import React from "react";

const CustomComponent = {
  pre: ({ children }: { children: React.ReactNode }) => {
    // This is a basic example; for real syntax highlighting, use rehype-highlight
    // or a dedicated library like react-syntax-highlighter
    return React.createElement(
      "pre",
      { className: "bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm my-4" },
      children
    );
  },
}
export async function parseMdx(content: string) {
  const { data: frontMatter, content: mdxSource } = matter(content);
  const {content:mdxContent} = await compileMDX({
    source:mdxSource,
    components:CustomComponent,
    options:{
      mdxOptions:{
        remarkPlugins:[remarkGfm]
      }
    }
  })
  return { frontMatter, mdxContent };
}

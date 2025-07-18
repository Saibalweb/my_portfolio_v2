import matter from "gray-matter";
import {compileMDX} from "next-mdx-remote/rsc";
import remarkGfm from 'remark-gfm'
import React from "react";

const CustomComponent = {
  pre: ({ children }: { children: React.ReactNode }) => {
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

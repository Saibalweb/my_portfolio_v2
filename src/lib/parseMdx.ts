import matter from "gray-matter";
import {compileMDX} from "next-mdx-remote/rsc";
import remarkGfm from 'remark-gfm'
import React from "react";

export async function parseMdx(content: string) {
  const { data: frontMatter, content: mdxSource } = matter(content);
  const {content:mdxContent} = await compileMDX({
    source:mdxSource,
    options:{
      mdxOptions:{
        remarkPlugins:[remarkGfm]
      }
    }
  })
  return { frontMatter, mdxContent };
}

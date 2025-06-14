// lib/getPostBySlug.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { parseMdx } from './parseMdx';
export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {frontMatter,mdxContent} = await parseMdx(fileContent);
  return { frontMatter,  content: mdxContent };
}

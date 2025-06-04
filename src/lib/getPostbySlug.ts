// lib/getPostBySlug.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContent);
   const mdxSource = await serialize(content);

  return { frontMatter,  content: mdxSource };
}

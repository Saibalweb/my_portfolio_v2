// lib/getPostBySlug.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getPostBySlug(slug: string) {
  const filePath = path.join('posts', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContent);

  return { frontMatter, content };
}

import fs from 'fs';
import path from 'path';
import { parseMdx } from './parseMdx';
export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {frontMatter,mdxContent} = await parseMdx(fileContent);
  return { frontMatter,  content: mdxContent };
}

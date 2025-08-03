import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  image: string;
  readingTime?: string;
  tags?: string[];
};

export function getAllPostsMeta(): BlogMeta[] {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
  return files.map(filename => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
      image: data.image,
      readingTime: data.readingTime,
      tags: data.tags,
    };
  });
}
const postsMeta = getAllPostsMeta();

export function getAllPosts() {
  return postsMeta;
}
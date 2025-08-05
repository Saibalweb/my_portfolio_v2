import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  image: string;
  readingTime?: string;
  tags?: string[];
};

export function getAllPostsMeta(limit?: number): BlogMeta[] {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
  const allPosts = files.map(filename => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title,
      subtitle: data.subtitle || '',
      date: data.date,
      image: data.image,
      readingTime: data.readingTime,
      tags: data.tags,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  if (limit) {
    return allPosts.slice(0, limit);
  }
  return allPosts;
}
const postsMeta = getAllPostsMeta();

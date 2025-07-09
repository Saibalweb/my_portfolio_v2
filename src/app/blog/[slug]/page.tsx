import BlogLayout from '@/components/BlogLayout';
import { getPostBySlug } from '@/lib/getPostbySlug';
import React from 'react';

const page = async({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
    const {slug}= await params;
    const { frontMatter, content } = await getPostBySlug(slug);
    const { title, date, readingTime, image, ...rest } = frontMatter;
    const typedFrontMatter = { title, date, readingTime, image, ...rest };
  return (
    <BlogLayout frontMatter={typedFrontMatter}>
      {content}
    </BlogLayout>
  )
}


export default page
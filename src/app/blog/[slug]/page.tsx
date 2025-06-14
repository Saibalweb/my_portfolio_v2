import BlogLayout from '@/components/BlogLayout';
import MDXContent from '@/components/MDXContent';
import { getPostBySlug } from '@/lib/getPostbySlug';
import React from 'react';

const page = async({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
    const {slug}= await params;
    const { frontMatter, content } = await getPostBySlug(slug);
  return (
    <BlogLayout frontMatter={frontMatter}>
      {content}
    </BlogLayout>
  )
}


export default page
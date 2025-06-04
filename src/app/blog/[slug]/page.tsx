import BlogLayout from '@/components/BlogLayout';
import MDXContent from '@/components/MDXContent';
import { getPostBySlug } from '@/lib/getPostbySlug';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react'
import { fromTheme } from 'tailwind-merge';

const page = async({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
    const {slug}= await params;
    const { frontMatter, content } = await getPostBySlug(slug);
    console.log(frontMatter,content);
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXContent source={content}/>
    </BlogLayout>
  )
}


export default page
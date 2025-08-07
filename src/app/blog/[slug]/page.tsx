import BlogLayout from '@/components/BlogLayout';
import { getPostBySlug } from '@/lib/getPostbySlug';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontMatter } = await getPostBySlug(slug);
  return {
    title: frontMatter.title,
    description: frontMatter.subtitle,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.subtitle,
      url: `https://saibal.dev/blog/${slug}`,
      siteName: "Saibal Kole's Portfolio",
      images: [
        {
          url: `https://saibal.dev${frontMatter.image}`,
          width: 1200,
          height: 630,
          alt: frontMatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontMatter.title,
      description: frontMatter.subtitle,
      images: [`https://saibal.dev${frontMatter.image}`],
      site: "@SaibalKole",
    },
  };
}
const page = async({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
    const {slug}= await params;
    const { frontMatter, content } = await getPostBySlug(slug);
    const { title, subtitle, date, readingTime, image,tags, ...rest } = frontMatter;
    const typedFrontMatter = { title, subtitle, date, readingTime, image, tags, ...rest };
  return (
    <BlogLayout frontMatter={typedFrontMatter}>
      {content}
    </BlogLayout>
  )
}


export default page
import { parseMdx } from '@/lib/parseMdx';
import React from 'react'

const page = async({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
    const {slug} = await params;
    console.log(slug);
    const res = await fetch(`https://api.github.com/repos/Saibalweb/${slug}/contents/README.md`);
    const data = await res.json();
    const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8');
    const {mdxContent} = await parseMdx(decodedContent);
  return (
    <div className='max-w-2xl mx-auto px-10 py-8'>
      <article className='max-w-none prose dark:prose-invert prose-img:inline prose-img:mx-1 prose-img:my-1'>
        {mdxContent}
      </article>
    </div>
  )
}

export default page
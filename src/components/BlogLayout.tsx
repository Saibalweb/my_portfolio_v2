// components/BlogLayout.tsx
import React from 'react';

export default function BlogLayout({ frontMatter, children }: { frontMatter: any; children: React.ReactNode }) {
  const { title, date, tags, readingTime, image } = frontMatter;

  return (
    <div className="max-w-2xl mx-auto px-10 py-8 text-white">
      <img src={image} alt={title} className="rounded-xl mb-6 w-full" />
      <div className="flex items-center text-sm mb-2 text-gray-400">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{readingTime}</span>
      </div>
      <h1 className="text-3xl font-bold mb-4 text text-foreground">{title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag: string) => (
          <span key={tag} className="bg-gray-700 px-3 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>

      <article className="prose dark:prose-invert max-w-none">{children}</article>
    </div>
  );
}

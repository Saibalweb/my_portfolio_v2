import { projects } from "@/constants/projects";
import { parseMdx } from "@/lib/parseMdx";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import React from "react";
const ProjectBtn = ({slug,livelink}:{slug?:string,livelink?:string}) => {
  const hrefLink = slug ? `https://github.com/Saibalweb/${slug}` : livelink;
  return (
    <a
      href={hrefLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Project on GitHub"
      className="[background:linear-gradient(135deg,rgba(90,199,248,0.69)_0%,rgba(90,199,248,0)_100%)] text-foreground text-2xl sm:text-[28px] text-center font-medium rounded-sm flex items-center justify-center gap-2.5 cursor-pointer  px-4 py-2 my-6 border border-gray-300 dark:border-gray-800"
    >
      {slug ? `View on GitHub` : `LiveLink`}
      <ExternalLink />
    </a>
  );
};
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }):Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug);
  if (!project) {
    return {};
  }
  return {
    title: `${project.title} | Saibal Kole`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Saibal Kole`,
      description: project.description,
      url: `https://saibal.dev/project/${slug}`,
      siteName: "Saibal Kole's Portfolio",
      images: [
        {
          url: `https://saibal.dev${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Saibal Kole`,
      description: project.description,
      images: [`https://saibal.dev${project.image}`],
      site: "@SaibalKole",
    },
  };
}
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await fetch(
    `https://api.github.com/repos/Saibalweb/${slug}/contents/README.md`
  );
  const data = await res.json();
  const decodedContent = Buffer.from(data.content, "base64").toString("utf-8");
  const { mdxContent } = await parseMdx(decodedContent);
  return (
    <div className="max-w-2xl mx-auto px-10 py-8">
      <article className="max-w-none prose dark:prose-invert prose-img:inline prose-img:mx-1 prose-img:my-1 prose-pre:bg-background prose-pre:text-foreground prose-pre:border prose-pre:border-gray-300 dark:prose-pre:border-gray-700  prose-pre:rounded-lg">
        {mdxContent}
      </article>
      <ProjectBtn slug={slug} />
    </div>
  );
};

export default page;

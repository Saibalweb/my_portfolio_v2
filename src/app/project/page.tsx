import React from "react";
import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Saibal Kole",
  description:
    "Explore my projects showcasing my skills in React Native, Next.js, and full-stack development.",
  openGraph: {
    title: "Saibal Kole - Projects",
    description:
      "Explore my projects showcasing my skills in React Native, Next.js, and full-stack development.",
    url: "https://saibal.dev/project",
    siteName: "Saibal Kole's Portfolio",
    images: [
      {
        url: "https://saibal.dev/MetaImg/project-meta.png",
        width: 1200,
        height: 630,
        alt: "Saibal Kole - Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saibal Kole - Projects",
    description:
      "Explore my projects showcasing my skills in React Native, Next.js, and full-stack development.",
    images: ["https://saibal.dev/MetaImg/project-meta.png"],
    site: "@SaibalKole",
  },
};
const page = () => {
  return (
    <div className="bg-background flex flex-row justify-center w-full min-h-screen">
      <div className="bg-background w-full max-w-[1024px] relative">
        <main className="flex flex-col items-center px-4 lg:px-8">
          <section className="w-full mt-11 mb-8">
            <h1 className="font-bold text-2xl lg:text-3xl text-foreground mb-6 font-['Inter',Helvetica]">
              Projects
            </h1>

            <p className="text-lg lg:text-xl text-foreground font-['Inter',Helvetica] font-normal leading-relaxed">
              Welcome to my project showcase. This collection features the React Native mobile apps and full-stack web applications I have built—each one reflecting my focus on performance, clean UI, and real-world usability. From frontend interfaces to backend integrations, these projects demonstrate my ability to craft end-to-end solutions and solve real development challenges.
            </p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mb-12 place-items-center">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;

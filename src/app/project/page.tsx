import React from 'react';
import { SearchIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/constants/projects';
import ProjectCard from '@/components/ProjectCard';
const topicTags = [
  { name: "React Native" },
  { name: "Next Js" },
  { name: "Expo" },
  { name: "Tailwind" },
  { name: "React Native" },
  { name: "Next Js" },
  { name: "Expo" },
  { name: "Tailwind" },
];
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
              I have a passion for blogging, primarily focusing on topics such
              as technology, success, and spirituality. However, my main
              emphasis is on technology, and my content consistently addresses
              the common challenges encountered in software engineering. I delve
              into subjects like overcoming failure and problem-solving
              strategies.
            </p>
          </section>
{/* 
          <div className="w-full mb-4">
            <div className="flex items-center gap-2.5 px-[19px] py-3 dark:bg-[#1e1e1e] rounded-[9px] overflow-hidden border-[0.5px] border-solid border-[#21b5f4]">
              <SearchIcon className="w-6 h-6 text-foreground flex-shrink-0 " />
              <input
              placeholder="Search Article"
              className="border-none outline-none w-full dark:bg-[#1e1e1e]"
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap mb-8">
            {topicTags.map((tag, index) => (
              <Badge
                key={`tag-${index}`}
                className="mx-1 my-1 py-2 px-4 dark:bg-[#403f3f] text-foreground text-xs lg:text-sm text-centerborder-[0.5px] border-solid border-white rounded-full hover:bg-[#403f3f] justify-center cursor-pointer"
              >
                {tag.name}
              </Badge>
            ))}
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mb-12">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index}/>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default page
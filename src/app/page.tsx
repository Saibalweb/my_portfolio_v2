
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import SocialComponent from "@/components/SocialComponent";
import { skillDetails } from "@/constants/skillsDetails";
import Image from "next/image";
import { projects } from "@/constants/projects";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import QuoteCard from "@/components/QuoteCard";
import ContactButtonHome from "@/components/ContactButtonHome";
import { getAllPostsMeta } from "@/lib/getAllPosts";
import { WorkExperience } from "@/components/work-experience";
import { workExperience } from "@/constants/workExp";
export default async function Home() {
  // Work experience data
  // const workExperience = [
  //   {
  //     company: "Trigital Technologies Pvt Ltd",
  //     position: "FrontEnd Developer Intern",
  //     period: "November 2023-Aug 2024",
  //     location: "Remote",
  //   },
  // ];

  // Blog posts data
  const blogPosts = getAllPostsMeta(2);

  // Skills data
  const skills = [
    "React",
    "Angular",
    "Express",
    "Next.js",
    "Figma",
    "Node.js",
    "Redux",
    "TypeScript",
    "React",
    "MongoDB",
    "Express",
    "Next.js",
    "Figma",
    "Node.js",
    "Redux",
    "TypeScript",
  ];
  return (
    <div className="flex flex-row justify-center w-full">
      <div className="">
        {/* Hero Section */}
        <section className="w-full flex justify-center items-center px-12 md:px-24 pt-24 pb-16 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] bg-[length:30px_30px]">
          {/* Left side with image */}
          <div className="max-w-7xl  flex flex-col lg:flex-row-reverse items-center justify-center">
            <div className=" w-full flex items-center justify-center">
              <Image
                width={300}
                height={300}
                className="w-[300px] h-[300px] lg:w-full lg:h-full object-cover"
                alt="Hero image"
                src="/My_pic.png"
                priority
              />
            </div>

            {/* Right side with text content */}
            <div className="w-full md:w-full flex flex-col gap-6 mt-8 md:mt-0">
              <h1 className="font-semibold text-foreground text-4xl font-['Inter',Helvetica]">
                Full Stack Developer
              </h1>

              <p className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
                I&apos;m a dedicated full-stack developer with expertise in
                React JS, React Native, and backend technologies like Express,
                MongoDB, SQL, and Docker.
                <br />
                <br />I specialize in creating seamless web and mobile
                experiences, from crafting intuitive front-end interfaces to
                designing robust and scalable back-end architectures.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-[#10e649] text-[#0a4f1c] font-medium px-[22px] py-1 rounded-[5px] text-xs">
                  Technical Leadership
                </Badge>
                <Badge className="bg-[#f28912] text-[#8b4d07] font-medium px-[22px] py-1 rounded-[5px] text-xs">
                  Cracked Developer
                </Badge>
                <Badge className="bg-[#21b5f4] text-[#084f6f] font-medium px-[22px] py-1 rounded-[5px] text-xs">
                  Technical Leadership
                </Badge>
              </div>
              <ContactButtonHome />
              <SocialComponent className="mt-4" />
            </div>
          </div>
        </section>
        <section className="px-12 md:px-24 2xl:px-48 py-12 max-w-[1800px] mx-auto">
          <WorkExperience experiences={workExperience}/>
        </section>
        {/* What I Do Section */}
        <section className="px-12 md:px-24 2xl:px-48 py-12">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-semibold text-foreground text-5xl font-['Montserrat',Helvetica] mb-2">
              What I Do
            </h2>
            <Separator className="w-[262px] h-[3px] bg-foreground" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {skillDetails.map((skill, index) => (
              <Card
                key={index}
                className="max-w-[450px] [background:linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] border border-gray-200 dark:border-gray-600 rounded-[11px]"
              >
                <CardContent className="flex flex-col gap-2 p-[25px]">
                  <div className="">
                    <Image
                      className="w-11 h-11"
                      alt="Developer icon"
                      src={skill.icon}
                      width={44}
                      height={44}
                    />
                    <h3 className="my-1 font-medium text-foreground text-xl sm:text-2xl font-['Inter',Helvetica]">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="font-normal text-foreground text-base font-['Inter',Helvetica]">
                    {skill.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* My Skills Section */}
        <section className="px-12 md:px-24 2xl:px-48 py-12">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-semibold text-foreground text-5xl font-['Montserrat',Helvetica] mb-2">
              My Skills
            </h2>
            <Separator className="w-[231px] h-[3px] bg-foreground" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-[#084f6f] text-white px-4 py-2 text-sm rounded"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* My Works Section */}
        <section className="px-12 md:px-24 2xl:px-48 py-12">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-semibold text-foreground text-5xl font-['Montserrat',Helvetica] mb-2">
              My Works
            </h2>
            <Separator className="w-[257px] h-[3px] bg-foreground" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center items-stretch">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="px-12 md:px-24 2xl:px-48 py-12 max-w-[1800px]">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-semibold text-foreground text-5xl font-['Montserrat',Helvetica]">
              My Blogs
            </h2>
            <Separator className="w-[257px] h-[3px] bg-foreground" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 ">
            <div className="lg:w-2/3">
              <div className="flex flex-col gap-6">
                {blogPosts.map((post, index) => (
                  <Link href={`/blog/${post.slug}`} key={index}>
                    <Card
                      className={`bg-background rounded-[10px] border-none cursor-pointer dark:hover:bg-[#1E1E1E] hover:bg-gray-200`}
                    >
                      <CardContent className="flex flex-col gap-[17px] p-[30px]">
                        <div className="relative w-[110px] h-[27px]">
                          <div className="w-px h-[27px] bg-[#c6c6c6]"></div>
                          <p className="absolute top-[5px] left-4 font-normal text-[#c6c6c6] text-sm font-['Inter',Helvetica]">
                            {post.date}
                          </p>
                        </div>

                        <h3 className="font-semibold text-foreground text-2xl font-['Inter',Helvetica]">
                          {post.title}
                        </h3>

                        <p className="font-normal text-foreground text-base font-['Inter',Helvetica]">
                          {post.subtitle}
                        </p>

                        <Button
                          variant="link"
                          className="p-0 h-auto font-medium text-[#21b5f4] text-base font-['Inter',Helvetica] justify-start"
                        >
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
            {/* Aside Section */}
            <aside className="lg:w-1/3 px-8">
              {/* Gears Section */}
              <h3 className="font-semibold text-foreground text-xl font-['Inter',Helvetica] mb-2 pb-2">
                Gears
              </h3>

              <div className="my-3">
                <h3 className="font-semibold text-foreground text-xl font-['Inter',Helvetica]  mb-1">
                  Custom Built PC
                </h3>
                <p className="font-normal text-foreground text-sm font-['Inter',Helvetica] leading-relaxed mb-1">
                  My main machine for development work. Custom built with
                  high-end specs for optimal performance. Specs-Ryzen 3 3300x,
                  16GB RAM, 512GB SSD, and a GTX 710
                </p>
              </div>
              <div className="my-3">
                <h3 className="font-semibold text-foreground text-xl font-['Inter',Helvetica] mb-1">
                  Cosmic Byte Keyboard
                </h3>
                <p className="font-normal text-foreground text-sm font-['Inter',Helvetica] leading-relaxed">
                  My main keyboard for development work. Keyboard with Brown
                  switches. Keyboard model- Cosmic Byte CB-GK-12 Neon
                </p>
              </div>
              <div className="my-3">
                <h3 className="font-semibold text-foreground text-xl font-['Inter',Helvetica] mb-1">
                  Corsair Mouse
                </h3>
                <p className="font-normal text-foreground text-sm font-['Inter',Helvetica] leading-relaxed">
                  Corsair mouse for development work. High precision and the
                  thumb buttons. I use it with a mousepad. Mouse model- Corsair
                  Harpoon RGB.
                </p>
              </div>
              <div className="my-3">
                <h3 className="font-semibold text-foreground text-xl font-['Inter',Helvetica] mb-1">
                  Two Monitors
                </h3>
                <p className="font-normal text-foreground text-sm font-['Inter',Helvetica] leading-relaxed">
                  I have two monitors for development work. One is a 21-inch
                  monitor and the other is a 18-inch monitor. I use them for
                  multitasking and productivity. 
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section className="px-12 md:px-24 2xl:px-48 py-12">
          <QuoteCard />
        </section>
      </div>
    </div>
  );
}

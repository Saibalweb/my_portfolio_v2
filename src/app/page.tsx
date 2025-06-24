'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { DownloadIcon, GithubIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import socialLinks from "@/constants/socialLinks";
import mobileIcon from '../assets/icons/mobile_icon.png'
export default function Home () {
  // Work experience data
  const workExperience = [
    {
      company: "Trigital Technologies Pvt Ltd",
      position: "FrontEnd Developer Intern",
      period: "November 2023-Aug 2024",
      location: "Remote",
    },
  ];

  // Services data
  const services = [
    {
      title: "Mobile Development",
      description:
        "I specialize in mobile app development using React Native and Expo,",
      icon: mobileIcon,
    },
    {
      title: "Web Development",
      description:
        "I excel in web application development with a strong foundation",
      icon: mobileIcon,
    },
    {
      title: "Mobile Development",
      description:
        "I specialize in mobile app development using React Native and Expo,",
      icon: mobileIcon,
    },
  ];

  // Projects data
  const projects = [
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/DocRx_cover.png",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/DocRx_cover.png",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/DocRx_cover.png",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/DocRx_cover.png",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/DocRx_cover.png",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
  ];

  // Blog posts data
  const blogPosts = [
    {
      date: "April 10, 2024",
      title: "What is Website template",
      content:
        "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
      isDark: false,
    },
    {
      date: "April 12, 2024",
      title: "What is Blog template",
      content:
        "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
      isDark: true,
    },
  ];

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

        <section className="w-dvw flex justify-center items-center px-12 md:px-24 pt-24 pb-16 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] bg-[length:30px_30px]">
          {/* Left side with image */}
          <div className="max-w-7xl  flex flex-col lg:flex-row-reverse items-center justify-center">
          <div className=" w-full flex items-center justify-center">
            <img
              className="w-[300px] h-[300px] lg:w-full lg:h-full object-cover"
              alt="Hero image"
              src="/My_pic.png"
            />
          </div>

          {/* Right side with text content */}
          <div className="w-full md:w-full flex flex-col gap-6 mt-8 md:mt-0">
            <h1 className="font-semibold text-foreground text-4xl font-['Inter',Helvetica]">
              Full Stack Developer
            </h1>

            <p className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
              I&apos;m a dedicated full-stack developer with expertise in React
              JS, React Native, and backend technologies like Express, MongoDB,
              SQL, and Docker.
              <br />
              <br />I specialize in creating seamless web and mobile
              experiences, from crafting intuitive front-end interfaces to
              designing robust and scalable back-end architectures.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Badge className="bg-[#10e649] text-[#0a4f1c] font-medium px-[22px] py-1 rounded-[5px] text-xs">
                Technical Leadership
              </Badge>
              <Badge className="bg-[#f28912] text-[#8b4d07] font-medium px-[22px] py-1 rounded-[5px] text-xs">
                Technical Leadership
              </Badge>
              <Badge className="bg-[#21b5f4] text-[#084f6f] font-medium px-[22px] py-1 rounded-[5px] text-xs">
                Technical Leadership
              </Badge>
            </div>

            <div className="flex gap-6 mt-4">
              <Button className="bg-primary text-white text-[28px] font-medium px-8 py-6 rounded-sm flex items-center gap-2.5 cursor-pointer">
                <DownloadIcon className="w-20 h-20" />
                Resume
              </Button>
              <Button className="bg-primary text-white text-[28px] font-medium px-8 py-6 rounded-sm flex items-center gap-2.5 cursor-pointer">
                {/* <div className="relative w-7 h-7">
                  <img
                    className="absolute w-[25px] h-[23px] top-0.5 left-px"
                    alt="Hire me icon"
                    src="/group-2.png"
                  />
                </div> */}
                Hire Me
              </Button>
            </div>

            <div className="mt-4">
              <p className="font-normal text-foreground text-2xl font-['Inter',Helvetica] mb-2">
                Follow me on:
              </p>
              {/* Social icons would go here */}
              <div className="flex gap-8 mt-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="w-[35px] h-[35px] mt-2 cursor-pointer"
                      alt={`${link.name} icon`}
                      src={link.icon}
                      width={35}
                      height={35}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="px-12 md:px-24 2xl:px-48 py-12">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-semibold text-foreground text-5xl font-['Montserrat',Helvetica] mb-2">
              What I Do
            </h2>
            <Separator className="w-[262px] h-[3px] bg-foreground" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="[background:linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] border-primary rounded-[11px]"
              >
                <CardContent className="flex flex-col gap-4 p-[25px]">
                  <div className="relative h-[82px]">
                    <img
                      className="w-11 h-11"
                      alt="Developer icon"
                      src={service.icon.src}
                    />
                    <h3 className="absolute top-[53px] left-2 font-medium text-foreground text-2xl font-['Inter',Helvetica]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-normal text-foreground text-base font-['Inter',Helvetica]">
                    {service.description}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-0 w-full max-w-[480px] rounded-[10px] overflow-hidden border-primary [background:linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] cursor-pointer"
              >
                <CardContent className="p-0">
                  <img
                    className="w-full h-60 object-cover"
                    alt={`${project.title} cover`}
                    src={project.image}
                  />

                  <div className="p-8 pb-12 pt-6">
                    <h3 className="font-bold text-foreground text-[28px] font-['Montserrat',Helvetica] mb-4">
                      {project.title}
                    </h3>

                    <p className="font-normal text-foreground text-[18px] font-['Montserrat',Helvetica] mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-[#084f6f] text-white text-[11px] px-[11px] py-px rounded-md text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="default"
                      className="dark:bg-[#ffffff26] bg-primary text-background dark:text-foreground text-xl rounded-[5px] flex items-center gap-1 px-[7px] py-1 hover:bg-cyan-500 dark:hover:bg-[#ffffff40] cursor-pointer"
                    >
                      <GithubIcon className="w-[15px] h-[15px] " />
                      Github
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="px-12 md:px-24 2xl:px-48 py-12">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-semibold text-foreground text-5xl font-['Montserrat',Helvetica] mb-2">
              My Blogs
            </h2>
            <Separator className="w-[257px] h-[3px] bg-foreground" />
          </div>
          <div className="flex flex-col gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`w-4/5 bg-background rounded-[10px] border-none cursor-pointer dark:hover:bg-[#1E1E1E] hover:bg-gray-200`}
              >
                <CardContent className="flex flex-col gap-[17px] p-[30px]">
                  <div className="relative w-[110px] h-[27px]">
                    <img
                      className="w-px h-[27px] absolute left-0"
                      alt="Date separator"
                      src="/line-5.svg"
                    />
                    <p className="absolute top-[5px] left-4 font-normal text-[#c6c6c6] text-sm font-['Inter',Helvetica]">
                      {post.date}
                    </p>
                  </div>

                  <h3 className="font-semibold text-foreground text-2xl font-['Inter',Helvetica]">
                    {post.title}
                  </h3>

                  <p className="font-normal text-foreground text-base font-['Inter',Helvetica]">
                    {post.content}
                  </p>

                  <Button
                    variant="link"
                    className="p-0 h-auto font-medium text-[#21b5f4] text-base font-['Inter',Helvetica] justify-start"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
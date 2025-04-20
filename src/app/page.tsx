import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { DownloadIcon, GithubIcon } from "lucide-react";
import React from "react";

export const Wireframe = ()=> {
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
      icon: "/ic-round-developer-mode.svg",
    },
    {
      title: "Web Development",
      description:
        "I excel in web application development with a strong foundation",
      icon: "/ic-round-developer-mode.svg",
    },
    {
      title: "Mobile Development",
      description:
        "I specialize in mobile app development using React Native and Expo,",
      icon: "/ic-round-developer-mode.svg",
    },
  ];

  // Projects data
  const projects = [
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/docrx-cover-1.png",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/docrx-cover-1-2.png",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/docrx-cover-1-4.png",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/docrx-cover-1-3.png",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/docrx-cover-1-1.png",
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
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="[background:url(..//wireframe---2.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)] w-full max-w-[1440px] relative [background-image:radial-gradient(rgba(90,199,248,0.1)_1px,transparent_1px),radial-gradient(rgba(90,199,248,0.1)_1px,transparent_1px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 pt-24 pb-16">
          {/* Left side with animated graphics */}
          <div className="relative w-full md:w-[561px] h-[560px]">
            <div className="absolute w-[490px] h-[492px] top-[68px] left-[52px]">
              <div className="relative w-[861px] h-[939px] top-[-237px] left-[-150px]">
                <div className="absolute w-[345px] h-[345px] top-[290px] left-56 bg-[#5ac7f8b8] rounded-[172.64px] blur-[118.7px]" />
                <img
                  className="absolute w-[697px] h-[655px] top-0.5 left-[163px]"
                  alt="Polygon background element"
                  src="/polygon-1.svg"
                />
                <img
                  className="absolute w-[636px] h-[665px] top-0 left-0"
                  alt="Polygon background element"
                  src="/polygon-2.svg"
                />
                <img
                  className="absolute w-[834px] h-[740px] top-[199px] left-0"
                  alt="Star background element"
                  src="/star-1.svg"
                />
              </div>
            </div>

            <div className="absolute w-[521px] h-[513px] top-0 left-10">
              <div className="relative h-[513px]">
                <div className="absolute w-[433px] h-[433px] top-20 left-11 bg-[url(/ellipse-1.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[101px] h-[167px] top-[58px] left-[332px]"
                    alt="Ellipse decoration"
                    src="/ellipse-2.svg"
                  />
                </div>
                <img
                  className="absolute w-[433px] h-[433px] top-20 left-11"
                  alt="Profile image"
                  src="/mask-group.png"
                />
                <img
                  className="absolute w-[521px] h-[472px] top-0 left-0"
                  alt="Project illustration"
                  src="/new-project-2.png"
                />
              </div>
            </div>

            {/* Floating tech icons */}
            <img
              className="absolute w-[65px] h-[65px] top-[100px] left-[477px]"
              alt="Edge node icon"
              src="/carbon-edge-node.svg"
            />
            <img
              className="absolute w-[104px] h-[104px] top-[308px] left-0"
              alt="Web icon"
              src="/mdi-web.svg"
            />
            <div className="absolute w-[57px] h-[57px] top-[360px] left-[485px] bg-[url(/group.png)] bg-[100%_100%]" />
            <img
              className="absolute w-[30px] h-[30px] top-[514px] left-[129px]"
              alt="ReactOS icon"
              src="/file-icons-reactos.svg"
            />
            <div className="absolute w-[90px] h-[90px] top-[87px] left-[69px] bg-[url(/group-1.png)] bg-[100%_100%]" />
          </div>

          {/* Right side with text content */}
          <div className="w-full md:w-[505px] flex flex-col gap-6 mt-8 md:mt-0">
            <h1 className="font-semibold text-white text-4xl font-['Inter',Helvetica]">
              Full Stack Developer
            </h1>

            <p className="font-normal text-white text-xl font-['Inter',Helvetica]">
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
              <Button className="bg-[#5ac7f8] text-white text-[28px] font-medium px-[27px] py-[13px] rounded flex items-center gap-2.5">
                <DownloadIcon className="w-7 h-7" />
                Resume
              </Button>
              <Button className="bg-[#5ac7f8] text-white text-[28px] font-medium px-[27px] py-[13px] rounded flex items-center gap-2.5">
                <div className="relative w-7 h-7">
                  <img
                    className="absolute w-[25px] h-[23px] top-0.5 left-px"
                    alt="Hire me icon"
                    src="/group-2.png"
                  />
                </div>
                Hire Me
              </Button>
            </div>

            <div className="mt-4">
              <p className="font-normal text-white text-2xl font-['Inter',Helvetica]">
                Follow me on:
              </p>
              {/* Social icons would go here */}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="px-6 md:px-24 py-12 flex flex-col md:flex-row gap-8 justify-center">
          {workExperience.map((job, index) => (
            <Card
              key={index}
              className="backdrop-blur-[76.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(76.85px)_brightness(100%)] [background:url(..//frame-24-1.png)_50%_50%_/_cover,linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] border-none shadow-[0px_0px_11.6px_#00000040] rounded-[10px]"
            >
              <CardContent className="flex flex-col gap-[23px] p-8">
                <div className="w-full">
                  <div className="flex items-center gap-2.5">
                    <img
                      className="w-6 h-6"
                      alt="Work icon"
                      src="/hugeicons-work.svg"
                    />
                    <h3 className="font-medium text-white text-2xl font-['Inter',Helvetica]">
                      {job.company}
                    </h3>
                  </div>
                  <p className="font-normal text-white text-base font-['Inter',Helvetica] mt-2">
                    {job.position}
                  </p>
                </div>
                <div>
                  <p className="font-normal text-white text-xl font-['Inter',Helvetica]">
                    {job.period}
                  </p>
                  <p className="font-normal text-white text-base font-['Inter',Helvetica] mt-2">
                    {job.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Connecting vector between work experience cards */}
          <img
            className="w-[228px] h-[69px] mx-auto"
            alt="Vector connecting work experiences"
            src="/vector-3.svg"
          />
        </section>

        {/* What I Do Section */}
        <section className="px-6 md:px-24 py-12">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-semibold text-white text-5xl font-['Montserrat',Helvetica] mb-2">
              What I Do
            </h2>
            <Separator className="w-[262px] h-[3px] bg-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="[background:url(..//frame-24-1.png)_50%_50%_/_cover,linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] border-none rounded-[11px]"
              >
                <CardContent className="flex flex-col gap-4 p-[25px]">
                  <div className="relative h-[82px]">
                    <img
                      className="w-11 h-11"
                      alt="Developer icon"
                      src={service.icon}
                    />
                    <h3 className="absolute top-[53px] left-2 font-medium text-white text-2xl font-['Inter',Helvetica]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-normal text-white text-base font-['Inter',Helvetica]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* My Skills Section */}
        <section className="px-6 md:px-24 py-12">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-semibold text-white text-5xl font-['Montserrat',Helvetica] mb-2">
              My Skills
            </h2>
            <Separator className="w-[231px] h-[3px] bg-white" />
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
        <section className="px-6 md:px-24 py-12">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-semibold text-white text-5xl font-['Montserrat',Helvetica] mb-2">
              My Works
            </h2>
            <Separator className="w-[257px] h-[3px] bg-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="w-full rounded-[10px] overflow-hidden border-none [background:url(..//frame-24-1.png)_50%_50%_/_cover,linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)]"
              >
                <CardContent className="p-0">
                  <img
                    className="w-full h-[193px] object-cover"
                    alt={`${project.title} cover`}
                    src={project.image}
                  />

                  <div className="p-8 pt-6">
                    <h3 className="font-bold text-white text-[28px] font-['Montserrat',Helvetica] mb-4">
                      {project.title}
                    </h3>

                    <p className="font-normal text-white text-[13px] font-['Montserrat',Helvetica] mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-[#084f6f] text-white text-[11px] px-[11px] py-px rounded-md"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="bg-[#ffffff26] text-white text-sm rounded-[5px] flex items-center gap-1 px-[7px] py-1 hover:bg-[#ffffff40]"
                    >
                      <GithubIcon className="w-[15px] h-[15px]" />
                      GithubIcon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="px-6 md:px-24 py-12">
          <div className="flex flex-col gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`w-full ${post.isDark ? "bg-black" : "bg-[#1e1e1e]"} rounded-[10px] border-none`}
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

                  <h3 className="font-semibold text-white text-2xl font-['Inter',Helvetica]">
                    {post.title}
                  </h3>

                  <p className="font-normal text-white text-base font-['Inter',Helvetica]">
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

        {/* Footer */}
        <footer className="px-6 md:px-24 py-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="font-medium text-white text-2xl font-['Inter',Helvetica] mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li className="font-normal text-white text-xl font-['Inter',Helvetica]">
                  Home
                </li>
                <li className="font-normal text-white text-xl font-['Inter',Helvetica]">
                  About Me
                </li>
                <li className="font-normal text-white text-xl font-['Inter',Helvetica]">
                  My Works
                </li>
                <li className="font-normal text-white text-xl font-['Inter',Helvetica]">
                  Blogs
                </li>
              </ul>
            </div>

            {/* Contact Me */}
            <div>
              <h3 className="font-medium text-white text-2xl font-['Inter',Helvetica] mb-6">
                Contact Me
              </h3>
              <p className="font-normal text-white text-xl font-['Inter',Helvetica] mb-4">
                saibalkole@gmail.com
              </p>
              <p className="font-normal text-white text-xl font-['Inter',Helvetica]">
                +(91) 8116658972
              </p>
            </div>

            {/* Follow Me */}
            <div>
              <h3 className="font-medium text-white text-2xl font-['Inter',Helvetica] mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <img
                  className="w-[35px] h-[35px]"
                  alt="Social media icon"
                  src="/frame-2.svg"
                />
                <img
                  className="w-[35px] h-[35px]"
                  alt="Social media icon"
                  src="/frame-1.svg"
                />
                <img
                  className="w-[35px] h-[35px]"
                  alt="Social media icon"
                  src="/frame.svg"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-normal text-white text-xl font-['Inter',Helvetica]">
              © 2025 Saibal Kole . All right reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
import React from "react";
import { TProject } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { GithubIcon } from "lucide-react";

const ProjectCard = ({
  project,
}: {
  project: TProject;
}) => {
    console.log(project);
  return (
    <Link href={`/project/${project.title.toLowerCase()}`}>
      <Card
        className="p-0 w-full max-w-[480px] rounded-[10px] overflow-hidden border border-t-0 border-l-0 border-primary [background:linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] cursor-pointer h-full flex flex-col"
      >
        <CardContent className="p-0 flex flex-col h-full">
          <Image
            className="w-full h-60 object-cover"
            alt={`${project.title} cover`}
            src={project.image}
            width={480}
            height={240}
          />
          <div className="p-8 pb-12 pt-6 flex flex-col flex-1">
            <h3 className="font-bold text-foreground text-[28px] font-['Montserrat',Helvetica] mb-4">
              {project.title}
            </h3>
            <p className="font-normal text-foreground text-[18px] font-['Montserrat',Helvetica] mb-4 min-h-[72px]">
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
              className="w-[180px] dark:bg-[#ffffff26] bg-primary text-background dark:text-foreground text-xl rounded-[5px] flex items-center gap-1 px-[7px] py-1 hover:bg-cyan-500 dark:hover:bg-[#ffffff40] cursor-pointer"
            >
              <GithubIcon className="w-[15px] h-[15px] " />
              Github
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;

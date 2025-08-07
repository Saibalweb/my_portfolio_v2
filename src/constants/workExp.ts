import { ExperienceItemType } from "@/components/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "1",
    companyName: "Trigital Technologies Pvt Ltd",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    isCurrentEmployer: false,
    positions: [
      {
        id: "1-1",
        title: "FrontEnd Software Engineer",
        employmentPeriod: "Nov 2023 - Dec 2024",
        employmentType: "Full-time",
        description:
        `-Architected and executed seamless updates for CashMe, Calonex, and eParisheva,
        enhancing user experience and functionality; achieved a 40% decrease in reported app
        crashes, improving overall user satisfaction
        -Created visually appealing and functional UI designs utilizing React Native; recognized as
        most junior member on team contributing innovative solutions resulting in reduced
        bounce rates of application
        -Integrated APIs and handled data binding to enhance app functionality and performance.
        -Implemented OAuth for secure user authentication and authorization.
        -Added deep linking capabilities for improved app navigation and user experience.
        -Collaborated seamlessly with design and QA departments while addressing software bugs;
        implemented solutions that improved app performance ratings from users .
        Optimized app performance and ensured compatibility with multiple Android/iOS devices.`,
        icon: "code",
        skills: ["JavaScript", "React","React Native", "Node.js", "MongoDB","Firebase"],
        isExpanded: true,
      },
      {
        id: "1-2",
        title: "Software Engineer",
        employmentPeriod: "Jan 2020 - Dec 2021",
        employmentType: "Full-time",
        description:
          "Developed and maintained web applications using modern technologies.",
        icon: "code",
        skills: ["HTML", "CSS", "JavaScript"],
      },
    ],
  },
];
export const workExperience = WORK_EXPERIENCE as ExperienceItemType[];

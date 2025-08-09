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
        employmentPeriod: "Feb 2024 - Dec 2024",
        employmentType: "Full-time",
        description: `- Architected and executed seamless updates for CashMe, Calonex, and eParisheva, enhancing user experience and functionality; achieved a 40% decrease in reported app crashes, improving overall user satisfaction.
- Created visually appealing and functional UI designs utilizing React Native; recognized as most junior member on team contributing innovative solutions resulting in reduced bounce rates of application.
- Integrated APIs and handled data binding to enhance app functionality and performance.
- Implemented OAuth for secure user authentication and authorization.
- Added deep linking capabilities for improved app navigation and user experience.
- Collaborated seamlessly with design and QA departments while addressing software bugs; implemented solutions that improved app performance ratings from users.
- Optimized app performance and ensured compatibility with multiple Android/iOS devices.`,

        icon: "code",
        skills: [
          "JavaScript",
          "React",
          "React Native",
          "Node.js",
          "MongoDB",
          "Firebase",
        ],
        isExpanded: true,
      },
      {
        id: "1-2",
        title: "FrontEnd Intern",
        employmentPeriod: "Nov 2023 - Jan 2024",
        employmentType: "Internship",
         description : `- Built and refined UI components for Calonex and eParisheva, translating Figma/design specs into responsive, reusable React/React Native views with consistent styling and accessibility.
- Fixed UI and functional bugs across multiple flows, improving layout consistency, form validation, and navigation behavior; reduced visual regressions by addressing edge cases and device-specific issues.
- Collaborated with designers and QA to triage issues, reproduce bugs, and ship quick fixes; wrote clear commit messages and PR descriptions to streamline reviews.
- Integrated front-end with existing APIs by wiring data props, handling loading/error states, and improving state management for smoother user interactions.`,

        icon: "code",
        skills: ["HTML", "CSS", "JavaScript","React","React Native"],
      },
    ],
  },
];
export const workExperience = WORK_EXPERIENCE as ExperienceItemType[];

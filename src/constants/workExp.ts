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
        employmentPeriod: "Feb 2024 - Feb 2025",
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
        isExpanded: false,
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
  {
    id: "2",
    companyName: "Freelance & Open Source",
    companyLogo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    isCurrentEmployer: true,
    positions: [
      {
        id: "2-1",
        title: "Freelance Mobile & Web Developer",
        employmentPeriod: "Feb 2025 - Present",
        employmentType: "Freelance / Contract",
        description: `- Delivered cross-platform mobile apps using React Native / Expo and responsive web applications with React / Next.js for multiple clients; prioritized performance and accessibility.
- Designed and implemented scalable APIs and backend services with Node.js and TypeScript, integrated databases (MongoDB / Firebase) and implemented secure authentication flows.
- Containerized applications and managed deployments using Docker and Kubernetes (EKS/GKE), set up CI/CD pipelines (GitHub Actions) for automated builds, tests, and rollouts.
- Improved app start times and runtime performance through profiling, code-splitting, and native module optimization; reduced bundle sizes and improved Lighthouse scores for web.
- Implemented observability using logging and monitoring tools, set up health checks and automated rollbacks for production services to improve reliability.`,
        icon: "code",
        skills: [
          "React Native",
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Firebase",
          "MongoDB",
        ],
        isExpanded: false,
      },
      {
        id: "2-2",
        title: "Open Source Contributor — Mobile & Cloud Tooling",
        employmentPeriod: "Feb 2025 - Present",
        employmentType: "Volunteer",
        description: `- Contributed features, bug fixes, and documentation to multiple open-source libraries focused on mobile tooling, developer DX, and Kubernetes operators.
- Implemented unit and integration tests, improved package CI pipelines, and helped maintain semantic-release workflows to streamline releases.
- Triaged issues, reviewed PRs, and collaborated with maintainers to improve library stability and cross-platform compatibility for React Native ecosystems.
- Authored guides and example apps demonstrating Kubernetes-native deployment patterns for mobile backend services and edge cases for cloud-native mobile apps.`,
        icon: "code",
        skills: [
          "Open Source",
          "Kubernetes",
          "Go",
          "TypeScript",
          "React Native",
          "Testing",
          "CI/CD",
          "Documentation",
        ],
      },
    ],
  },
];
export const workExperience = WORK_EXPERIENCE as ExperienceItemType[];

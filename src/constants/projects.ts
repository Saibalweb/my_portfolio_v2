 export type TProject = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveLink?: string;
}
export const projects: TProject[] = [
    {
      title: "DocRx",
      description:
        "Prescription creation and storage for doctors. Patient information management with secure digital records.",
      image: "/Projects/DocRx_cover.webp",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "Friendly",
      description:
        "A Socila Media App where you can connect with other people.User authentication, posts with likes",
      image: "/Projects/Friendly_cover.webp",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title: "NadPlay",
      description:
        "A movie streaming app with a focus on user experience. Features include playlists, favorites, and a personalized library.",
      image: "/Projects/NadPlay_cover.webp",
      technologies: ["Expo", "Node", "Express", "React Native"],
    },
    {
      title:"My_portfolio_v2",
      description:"My personal portfolio showcasing my projects and skills.",
      image:"/MetaImg/home-meta.png",
      technologies:["Next.js", "TypeScript", "Tailwind CSS","Mdx"],
      liveLink: "https://my-portfolio.com"
    }
  ];

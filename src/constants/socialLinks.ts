import icons from "@/assets/icon";

const socialLinks = [
  {
    name: "Github",
    icon: icons.github,
    link: "https://github.com/Saibalweb",
  },
  {
    name: "LinkedIn",
    icon: icons.linkdin,
    link: "https://www.linkedin.com/in/saibal-kole-549b41209/",
  },
  {
    name: "x",
    icon: icons.x,
    link: "https://x.com/SaibalKole",
  },
];
export default socialLinks;
export type TSocialLink = {
  name: string;
  icon: string;
  link: string;
};

export type TContactMe = {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
  userId: string;
};
import icons from "@/assets/icon";
export const contactMe: TContactMe[] = [
  {
    id: "email",
    icon: icons.gmailReal,
    title: "Email Me",
    description:
      "Drop me a line and I'll get back to you as soon as possible. Let's discuss your project!",
    link: "saibalkole@gmail.com",
    userId: "saibalkole@gmail.com",
  },
  {
    id: "x",
    icon: icons.x,
    title: "Follow on X",
    description:
      "Stay updated with my latest projects, thoughts on tech, and development insights.",
    link: "https://x.com/SaibalKole",
    userId: "SaibalKole",
  },
  {
    id: "github",
    icon: icons.github,
    title: "Follow on GitHub",
    description:
      "Check out my code, contribute to projects, and see what I'm currently working on",
    link: "https://github.com/Saibalweb",
    userId: "Saibalweb",
  },
];

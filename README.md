# 🧑‍💻 Fullstack Portfolio Website — Built with Next.js (App Router)

A full-featured portfolio website built using **Next.js (App Router)** with TypeScript, Tailwind CSS, and MDX. This portfolio includes pages for Home, Blog, Projects, and Contact — designed to showcase your skills, articles, and resume in a professional and responsive layout.


## Built with 

<div>
   <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="ts" />
   <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
   <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt='tailwind'/> 
  <img src="https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white" alt='mdx'/> 

</div>

---

## 🚀 Pages & Features

### 🏠 Home Page
- Introduction & profile image
- Resume download (`/public/SaibalKole_resume.pdf`)
- Navigation to all sections
- Contact button

### 📚 Blog Page
- Dynamic blog rendering from markdown files in `/posts`
- Slugs handled via dynamic route: `/app/blog/[slug]/page.tsx`
- Custom blog layout in `components/ui/BlogLayout.tsx`
- MDX support via `lib/parseMdx.ts`
- Syntax highlighting & metadata

### 💼 Projects Page
- Projects stored in `constants/projects.ts`
- Rendered on `/app/project/page.tsx`
- Includes title, description, stack, links

### 📬 Contact Page
- Form with validation
- Sends email via API using `lib/email.ts`
- Contact info via `constants/contactMe.ts`
- Button component: `ContactButtonHome.tsx`

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

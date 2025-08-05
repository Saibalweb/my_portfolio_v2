# 🧑‍💻 Fullstack Portfolio Website — Built with Next.js (App Router)

A full-featured portfolio website built using **Next.js (App Router)** with TypeScript, Tailwind CSS, and MDX. This portfolio includes pages for Home, Blog, Projects, and Contact — designed to showcase your skills, articles, and resume in a professional and responsive layout.

---

## 🔧 Tech Stack

- **Framework**: [Next.js 13+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown Rendering**: MDX
- **Email API**: Nodemailer / Resend (via `lib/email.ts`)
- **Deployment**: Vercel (recommended)
- **Assets**: WebP, SVGs, PNGs
- **Blog**: File-based Markdown (in `/posts`)

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

## 📁 Project Structure
.
├── public/ # Static assets
│ ├── My_pic.png
│ ├── Friendly_cover.webp
│ ├── globe.svg, next.svg, etc.
│ └── SaibalKole_resume.pdf
├── src/
│ ├── app/
│ │ ├── page.tsx # Home page
│ │ ├── blog/
│ │ │ ├── page.tsx # Blog list
│ │ │ └── [slug]/ # Dynamic blog details
│ │ │ ├── page.tsx
│ │ │ └── loading.tsx
│ │ ├── project/
│ │ │ └── page.tsx
│ │ ├── contact/
│ │ │ └── page.tsx
│ │ ├── layout.tsx
│ │ └── globals.css
│ ├── components/
│ │ ├── Footer.tsx
│ │ ├── MDXContent.tsx
│ │ └── ui/
│ │ ├── BlogLayout.tsx
│ │ ├── ContactButtonHome.tsx
├── constants/ # Data files
│ ├── contactMe.ts
│ ├── projects.ts
│ ├── skillsDetails.ts
│ └── socialLinks.ts
├── lib/ # Utilities & logic
│ ├── email.ts
│ ├── getAllPosts.ts
│ ├── getPostBySlug.ts
│ ├── parseMdx.ts
│ ├── pdf.ts
│ └── utils.ts
├── posts/ # Blog markdown content
│ ├── introduction-to-generative-ai.md
│ ├── javascript-guide.md
│ └── react-native-beginner-guide.md
├── .env # Environment variables
├── README.md # You are here
├── next.config.ts
├── tsconfig.json
├── package.json
└── other config files...


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

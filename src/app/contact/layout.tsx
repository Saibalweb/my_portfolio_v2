import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Saibal Kole",
  description: "Get in touch with me for collaborations, freelance work, or just to say hello!",
  openGraph: {
    title: "Contact | Saibal Kole",
    description: "Get in touch with me for collaborations, freelance work, or just to say hello!",
    url: "https://saibal.dev/contact",
    siteName: "Saibal Kole's Portfolio",
    images: [
      {
        url: "https://saibal.dev/MetaImg/contact-meta.png",
        width: 1200,
        height: 630,
        alt: "Saibal Kole - Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saibal Kole - Contact",
    description: "Get in touch with me for collaborations, freelance work, or just to say hello!",
    images: ["https://saibal.dev/MetaImg/contact-meta.png"],
  },
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background ">
      <div className="bg-background">
        {children}
      </div>
    </div>
  );
}
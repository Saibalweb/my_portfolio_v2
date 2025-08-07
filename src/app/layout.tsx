import type { Metadata } from "next";
import {Inter,Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saibal Kole",
  description:
    "I am Saibal Kole.Welcome to my portfolio showcasing my skills as a full-stack developer, featuring projects in React, Node.js, MongoDB, and more.",
  openGraph:{
    title: "Saibal Kole, cracked software engineer",
    description: "I am Saibal Kole, a cracked software engineer specializing in full-stack development.",
    url: "https://saibal.dev",
    siteName: "Saibal Kole's Portfolio",
    images: [
      {
        url: "https://saibal.dev/MetaImg/home-meta.png",
        width: 1200,
        height: 630,
        alt: "Saibal Kole - a cracked Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saibal Kole, cracked software engineer",
    description: "I am Saibal Kole, a cracked software engineer specializing in full-stack development.",
    images: ["https://saibal.dev/MetaImg/home-meta.png"],
    site: "@SaibalKole",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

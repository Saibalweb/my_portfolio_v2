import { SearchIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Topic tags data for reusability
const topicTags = [
  { name: "React Native" },
  { name: "Next Js" },
  { name: "Expo" },
  { name: "Tailwind" },
  { name: "React Native" },
  { name: "Next Js" },
  { name: "Expo" },
  { name: "Tailwind" },
];

// Blog posts data
const blogPosts = [
  {
    image: "/DocRx_cover.webp",
    date: "April 10, 2024",
    title: "What is Website template",
    description:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
  },
  {
    image: "/Friendly_cover.webp",
    date: "April 10, 2024",
    title: "What is Website template",
    description:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
  },
  {
    image: "/DocRx_cover.webp",
    date: "April 10, 2024",
    title: "What is Website template",
    description:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
  },
  {
    image: "/Friendly_cover.webp",
    date: "April 10, 2024",
    title: "What is Website template",
    description:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
  },
  {
    image: "/DocRx_cover.webp",
    date: "April 10, 2024",
    title: "What is Website template",
    description:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
  },
  {
    image: "/Friendly_cover.webp",
    date: "April 10, 2024",
    title: "What is Website template",
    description:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
  },
];

// Blog Post Card Component
const BlogPostCard = ({ post }: { post: (typeof blogPosts)[0] }) => (
  <div className="flex flex-col w-full max-w-[361px] mx-auto items-start pb-3 cursor-pointer hover:shadow">
    <img
      className="w-full h-[203px] object-cover rounded-t-lg"
      alt="Blog post cover"
      src={post.image}
    />

    <Card className="w-full bg-background rounded-[10px] overflow-hidden border-0 shadow-none">
      <CardContent className="flex flex-col items-start gap-[17px] px-4 lg:px-[31px] py-6 lg:py-[30px] ">
        <div className="relative flex items-center">
          <div className="w-px h-[27px] bg-[#c6c6c6]"></div>
          <span className="ml-4 font-normal text-sm text-[#c6c6c6] font-sans">
            {post.date}
          </span>
        </div>

        <h2 className="self-stretch font-semibold text-foreground text-xl lg:text-2xl font-sans">
          {post.title}
        </h2>

        <p className="self-stretch font-normal text-foreground text-sm lg:text-base font-sans">
          {post.description}
        </p>

        <a
          href="#"
          className="self-stretch font-medium text-[#21b5f4] text-sm lg:text-base font-sans hover:underline transition-all"
        >
          Read More
        </a>
      </CardContent>
    </Card>
  </div>
);
const page = () => {
  return (
    <div className="bg-background flex flex-row justify-center w-full min-h-screen">
      <div className="bg-background w-full max-w-[768px] relative">
        <main className="flex flex-col items-center px-4 lg:px-8">
          <section className="w-full mt-11 mb-8">
            <h1 className="font-bold text-2xl lg:text-3xl text-foreground mb-6 font-['Inter',Helvetica]">
              Blogs
            </h1>

            <p className="text-lg lg:text-xl text-foreground font-['Inter',Helvetica] font-normal leading-relaxed">
              I have a passion for blogging, primarily focusing on topics such
              as technology, success, and spirituality. However, my main
              emphasis is on technology, and my content consistently addresses
              the common challenges encountered in software engineering. I delve
              into subjects like overcoming failure and problem-solving
              strategies.
            </p>
          </section>

          <div className="w-full mb-4">
            <div className="flex items-center gap-2.5 px-[19px] py-3 dark:bg-[#1e1e1e] rounded-[9px] overflow-hidden border-[0.5px] border-solid border-[#21b5f4]">
              <SearchIcon className="w-6 h-6 text-foreground flex-shrink-0 " />
              <input
              placeholder="Search Article"
              className="border-none outline-none w-full dark:bg-[#1e1e1e]"
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap mb-8">
            {topicTags.map((tag, index) => (
              <Badge
                key={`tag-${index}`}
                className="mx-1 my-1 py-2 px-4 dark:bg-[#403f3f] text-foreground text-xs lg:text-sm text-centerborder-[0.5px] border-solid border-white rounded-full hover:bg-[#403f3f] justify-center cursor-pointer"
              >
                {tag.name}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mb-12">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default page;

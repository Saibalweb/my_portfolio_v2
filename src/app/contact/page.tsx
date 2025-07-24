"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Twitter, X } from "lucide-react";
import icons from "@/assets/icon";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full max-w-[1800px] min-h-screen">
      {/* Main Contact Section */}
      <section className="px-6 md:px-24 py-12 ">
        <div className="flex flex-col items-center mb-16">
          <h1 className="font-semibold text-foreground text-6xl md:text-7xl font-['Montserrat',Helvetica] mb-4 text-center">
            Get In Touch
          </h1>
          <div className="w-[300px] h-[4px] bg-[#5ac7f8] rounded-full"></div>
          <p className="font-normal text-foreground text-xl md:text-2xl font-['Inter',Helvetica] mt-8 text-center max-w-3xl">
            Ready to bring your ideas to life? Let's connect and discuss how we
            can work together to create something amazing.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Me Section */}
          <Card className="[background:linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] border rounded-[15px] hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <CardContent className="flex flex-col items-center justify-center p-12 h-[400px] text-center">
              <div className="w-24 h-24  rounded-full flex items-center justify-center mb-8 transition-colors">
                <Image
                  src={icons.gmailReal}
                  width={70}
                  height={70}
                  alt="gmail-icons"
                />
              </div>

              <h2 className="font-bold text-foreground text-3xl md:text-4xl font-['Montserrat',Helvetica] mb-6">
                Email Me
              </h2>

              <p className="font-normal text-foreground text-lg font-['Inter',Helvetica] mb-8 leading-relaxed">
                Drop me a line and I'll get back to you as soon as possible.
                Let's discuss your project!
              </p>

              <Button
                className="bg-[#5ac7f8] text-foreground text-xl font-semibold px-8 py-4 rounded-lg hover:bg-[#4ab5e6] transition-colors"
                onClick={() =>
                  (window.location.href = "mailto:saibalkole@gmail.com")
                }
              >
                saibalkole@gmail.com
              </Button>
            </CardContent>
          </Card>

          {/* Follow on X/Twitter Section */}
          <Card className="[background:linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] border rounded-[15px] hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <CardContent className="flex flex-col items-center justify-center p-12 h-[400px] text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-colors">
                <Image
                  src={icons.xReal}
                  width={70}
                  height={70}
                  alt="x-icons"
                  className="dark:invert"
                />
              </div>

              <h2 className="font-bold text-foreground text-3xl md:text-4xl font-['Montserrat',Helvetica] mb-6">
                Follow on X
              </h2>

              <p className="font-normal text-foreground text-lg font-['Inter',Helvetica] mb-8 leading-relaxed">
                Stay updated with my latest projects, thoughts on tech, and
                development insights.
              </p>

              <Button
                className="bg-primary text-foreground text-xl font-semibold px-8 py-4 rounded-lg hover:bg-[#1a91da] transition-colors"
                onClick={() =>
                  window.open("https://twitter.com/saibalkole", "_blank")
                }
              >
                @saibalkole
              </Button>
            </CardContent>
          </Card>

          {/* Follow on GitHub Section */}
          <Card className="[background:linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] border rounded-[15px] hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <CardContent className="flex flex-col items-center justify-center p-12 h-[400px] text-center">
              <div className="w-24 h-24  rounded-full flex items-center justify-center mb-8 transition-colors">
                <Image
                  src={icons.githubReal}
                  width={70}
                  height={70}
                  alt="github-icons"
                  className="dark:invert"
                />
              </div>

              <h2 className="font-bold text-foreground text-3xl md:text-4xl font-['Montserrat',Helvetica] mb-6">
                Follow on GitHub
              </h2>

              <p className="font-normal text-foreground text-lg font-['Inter',Helvetica] mb-8 leading-relaxed">
                Check out my code, contribute to projects, and see what I'm
                currently working on.
              </p>

              <Button
                className="bg-primary text-foreground text-xl font-semibold px-8 py-4 rounded-lg hover:bg-[#24292e] transition-colors"
                onClick={() =>
                  window.open("https://github.com/Saibalweb", "_blank")
                }
              >
                @Saibalweb
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-20 text-center">
          <Card className="[background:linear-gradient(135deg,rgba(90,199,248,0.29)_0%,rgba(90,199,248,0)_100%)] border- rounded-[15px] max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="font-bold text-foreground text-3xl font-['Montserrat',Helvetica] mb-6">
                Let's Build Something Great Together
              </h3>
              <p className="font-normal text-foreground text-xl font-['Inter',Helvetica] leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with
                amazing people. Whether you have a specific project in mind or
                just want to chat about technology, don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#10e649] rounded-full"></div>
                  <span className="font-medium text-foreground text-lg font-['Inter',Helvetica]">
                    Available for freelance work
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#f28912] rounded-full"></div>
                  <span className="font-medium text-foreground text-lg font-['Inter',Helvetica]">
                    Open to collaboration
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default page;

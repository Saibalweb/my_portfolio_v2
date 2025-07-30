import Link from "next/link"
import SocialComponent from "./SocialComponent";
import QuoteCard from "./QuoteCard";

const Footer = () => {
  return (
    <footer className="mx-auto mt-12 px-12 md:px-24 2xl:px-48 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 xl:max-w-[1560px] mx-auto">
        {/* Quick Links */}
        <div>
          <h3 className="font-medium text-foreground text-3xl font-['Inter',Helvetica] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-4">
            <li className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
              <Link href={"/project"}>Projects</Link>
            </li>
            <li className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
              <Link href={"/blog"}>Blogs</Link>
            </li>
            <li className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Me */}
        <div className="flex flex-col md:items-center my-8 md:my-0">
          <h3 className="font-medium text-foreground text-3xl font-['Inter',Helvetica] mb-6">
            Contact Me
          </h3>
          <p className="font-normal text-foreground text-xl font-['Inter',Helvetica] mb-4">
            saibalkole@gmail.com
          </p>
          <p className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
            +(91) 8116658972
          </p>
        </div>

        {/* Follow Me */}
        <SocialComponent className="md:items-end"/>
      </div>

      <div className="text-center">
        <p className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
          © 2025 Saibal Kole . All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import socialLinks from "@/constants/socialLinks";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto mt-12 sm:px-16 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Quick Links */}
        <div>
          <h3 className="font-medium text-foreground text-3xl font-['Inter',Helvetica] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-4">
            <li className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
              <Link href={"#"}>Home</Link>
            </li>
            <li className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
              <Link href={"#"}>About Me</Link>
            </li>
            <li className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
              <Link href={"#"}>My Works</Link>
            </li>
            <li className="font-normal text-foreground text-xl font-['Inter',Helvetica]">
              Blogs
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
        <div className="flex flex-col md:items-end">
          <h3 className="font-medium text-foreground text-3xl font-['Inter',Helvetica] mb-6 mr-4">
            Follow Me
          </h3>
          <div className="flex gap-8 mt-2">
            {socialLinks.map((link, index) => (
              
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              > 
                <Image
                  className="w-[35px] h-[35px] mt-2 cursor-pointer"
                  alt={`${link.name} icon`}
                  src={link.icon}
                  width={35}
                  height={35}
                />
              </a>
            ))}
          </div>
        </div>
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

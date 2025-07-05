import React from 'react';
import socialLinks from '@/constants/socialLinks';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
interface MyComponentProps {
  className?: ClassValue;
}

const SocialComponent:React.FC<MyComponentProps> = ({className}) => {
  return (
    <div className={cn("flex flex-col",className)}>
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
  )
}

export default SocialComponent
'use client';
import React from "react";
import { Button } from "./ui/button";
import { openPDF } from "@/lib/pdf";
import { sendEmail } from "@/lib/email";
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

interface MyComponentProps {
  className?: ClassValue;
}

const ContactButtonHome: React.FC<MyComponentProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-6 mt-4", className)}>
      <Button onClick={openPDF}>Resume</Button>
      <Button onClick={sendEmail}>Hire Me</Button>
    </div>
  );
};

export default ContactButtonHome;

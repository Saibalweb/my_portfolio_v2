import Image from "next/image";
import React from "react";
import icons from "@/assets/icon";

const QuoteCard = () => {
  return (
    <div className="inline-block p-4 my-2 bg-background border-primary border-r border-b  rounded-md shadow-sm relative">
        <Image
        src={icons.quote}
        alt="Quote Icon"
        width={80}
        height={80}
        className="mb-4 absolute left-10  opacity-30 dark:invert dark:opacity-70"
        />
      <blockquote className="text-foreground">
        “A man who is master of patience is master of everything else. Lorem
        ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, saepe?”
      </blockquote>
      <p className="text-primary mt-2">- George Savile</p>
    </div>
  );
};

export default QuoteCard;

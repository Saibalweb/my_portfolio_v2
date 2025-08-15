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
        className="mb-4 absolute left-10  opacity-30 dark:invert dark:opacity-50"
        />
      <blockquote className="text-foreground">
        “Making a choice that is 1 percent better or 1 percent worse seems insignificant in the moment, but over the span of moments that make up a lifetime these choices determine the difference between who you are and who you could be. Success is the product of daily habits—not once-in-a-lifetime transformations.”
      </blockquote>
      <p className="text-primary text-lg mt-2">- James Clear, Author of Atomic Habit</p>
    </div>
  );
};

export default QuoteCard;

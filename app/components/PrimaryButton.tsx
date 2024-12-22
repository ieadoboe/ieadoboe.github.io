// ButtonLink.tsx
import React from "react";
import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    >
      {text}
    </Link>
  );
};

export default PrimaryButton;

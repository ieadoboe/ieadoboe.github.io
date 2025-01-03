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
      key={href}
      href={href}
      className="font-semibold text-sm rounded-lg px-4 py-2 bg-teal-500 text-white hover:bg-teal-600 dark:hover:bg-teal-600 transition-all border border-solid border-transparent flex items-center justify-center gap-2 sm:text-base h-10 sm:h-12 sm:px-5 sm:min-w-44"
    >
      {text}
    </Link>
  );
}; 

export default PrimaryButton;

// ButtonLink.tsx
import React from "react";
import Link from "next/link";

interface AccentButtonProps {
  href: string;
  text: string;
}

const AccentButton: React.FC<AccentButtonProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="font-semibold text-sm rounded-lg px-4 py-2 text-zinc-900 dark:text-zinc-100 
      bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all 
      border-2 border-solid border-zinc-900 dark:border-zinc-300 flex items-center justify-center 
      gap-2 sm:text-base h-10 sm:h-12 sm:px-5 sm:min-w-44"
    >
      {text}
    </Link>
  );
};

export default AccentButton;

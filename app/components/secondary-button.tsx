// ButtonLink.tsx
import React from "react";
import Link from "next/link";

interface SecondaryButtonProps {
  href: string;
  text: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="font-semibold text-sm rounded-lg px-4 py-2 text-zinc-100 bg-zinc-800 dark:bg-zinc-700 hover:bg-zinc-700 dark:hover:bg-zinc-600  transition-all border border-solid border-transparent flex items-center justify-center gap-2 sm:text-base h-10 sm:h-12 sm:px-5 sm:min-w-44"
    >
      {text}
    </Link>
  );
};

export default SecondaryButton;

"use client"

import { useRouter } from "next/navigation";
import { Icons } from "./site-icons";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="flex items-center pb-10">
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center w-10 h-10 rounded-full shadow-md border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 fill-zinc-800 dark:fill-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
        aria-label="Go Back"
      >
        <Icons.backarrow />
      </button>
    </div>
  );
};

export default BackButton;

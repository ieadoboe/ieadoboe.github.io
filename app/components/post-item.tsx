import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Icons } from "./site-icons";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  useGridLayout?: boolean; // New prop for layout control
}

const PostItem = ({
  title,
  slug,
  date,
  description,
  useGridLayout = true, // Default to `true` to preserve current behavior
}: PostItemProps) => {
  const formattedDate = formatDate(date);

  return (
    <article
      className={`${
        useGridLayout
          ? "md:grid md:grid-cols-4 md:items-baseline"
          : "flex flex-col"
      }`}
    >
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
          <Link href={slug}>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </Link>
        </h2>
        <time
          className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
          dateTime={date}
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          {formattedDate}
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
          Read more
          <Icons.arrowright />
        </div>
      </div>
      <time
        className={`${
          useGridLayout ? "mt-1 hidden md:flex" : "mt-3 flex"
        } relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500`}
        dateTime={date}
      >
        {formattedDate}
      </time>
    </article>
  );
};

export default PostItem;

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Icons } from "@/app/components/site-icons";
import CategoryBadge from "./category-badge";

interface LatestPostItemProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  reading_time?: string;
}

const LatestPostItem = ({
  title,
  slug,
  date,
  description,
  category,
  reading_time,
}: LatestPostItemProps) => {
  const formattedDate = formatDate(date);

  return (
    <Link href={slug} passHref>
      <article className="group relative flex flex-col items-start cursor-pointer">
        {/* Hover overlay */}
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>

        {/* Category Badge */}
        {category && (
          <div className="relative z-10 mb-2">
            <CategoryBadge category={category} />
          </div>
        )}

        {/* Date and Reading Time */}
        <div className="relative z-10 mb-3 flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          <time dateTime={date}>{formattedDate}</time>
          {reading_time && (
            <>
              <span>•</span>
              <span>{reading_time}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h2 className="relative z-10 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{title}</span>
        </h2>

        {/* Description */}
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        {/* Read Article */}
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
          Read more
          <Icons.arrowright />
        </div>
      </article>
    </Link>
  );
};

export default LatestPostItem;

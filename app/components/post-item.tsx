import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Icons } from "./site-icons";
import { TagList } from "./tag-badge";
import CategoryBadge from "./category-badge";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  category?: string;
  reading_time?: string;
  useGridLayout?: boolean; // New prop for layout control
}

const PostItem = ({
  title,
  slug,
  date,
  description,
  tags,
  category,
  reading_time,
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
        {/* Category Badge */}
        {category && (
          <div className="relative z-10 order-first mb-2">
            <CategoryBadge category={category} />
          </div>
        )}

        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
          <Link href={slug}>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </Link>
        </h2>

        {/* Mobile Date with Reading Time */}
        <div className="md:hidden relative z-10 order-first mb-3 flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
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

        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="relative z-10 mt-3">
            <TagList tags={tags.slice(0, 3)} />
          </div>
        )}

        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
          Read more
          <Icons.arrowright />
        </div>
      </div>

      {/* Desktop Date with Reading Time */}
      <div
        className={`${
          useGridLayout ? "mt-1 hidden md:flex" : "mt-3 flex"
        } relative z-10 order-first mb-3 flex-col gap-1 text-sm text-zinc-400 dark:text-zinc-500`}
      >
        <time dateTime={date}>{formattedDate}</time>
        {reading_time && <span className="text-xs">{reading_time}</span>}
      </div>
    </article>
  );
};

export default PostItem;

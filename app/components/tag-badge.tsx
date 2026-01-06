import Link from "next/link";

interface TagBadgeProps {
  tag: string;
  clickable?: boolean;
}

export default function TagBadge({ tag, clickable = false }: TagBadgeProps) {
  const badgeClasses =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-colors";

  if (clickable) {
    return (
      <Link
        href={`/blog?tag=${encodeURIComponent(tag)}`}
        className={badgeClasses}
      >
        #{tag}
      </Link>
    );
  }

  return <span className={badgeClasses}>#{tag}</span>;
}

export function TagList({ tags }: { tags: string[] | undefined }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {tags.map((tag) => (
        <TagBadge key={tag} tag={tag} />
      ))}
    </div>
  );
}


import Link from "next/link";

interface CategoryBadgeProps {
  category: string;
  clickable?: boolean;
}

const categoryColors: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
  "Data Science": {
    bg: "bg-blue-100",
    text: "text-blue-800",
    darkBg: "dark:bg-blue-900/30",
    darkText: "dark:text-blue-400",
  },
  "Machine Learning": {
    bg: "bg-purple-100",
    text: "text-purple-800",
    darkBg: "dark:bg-purple-900/30",
    darkText: "dark:text-purple-400",
  },
  "Statistics": {
    bg: "bg-indigo-100",
    text: "text-indigo-800",
    darkBg: "dark:bg-indigo-900/30",
    darkText: "dark:text-indigo-400",
  },
  "Web Development": {
    bg: "bg-green-100",
    text: "text-green-800",
    darkBg: "dark:bg-green-900/30",
    darkText: "dark:text-green-400",
  },
  "Tutorial": {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    darkBg: "dark:bg-yellow-900/30",
    darkText: "dark:text-yellow-400",
  },
  "AI & Deep Learning": {
    bg: "bg-pink-100",
    text: "text-pink-800",
    darkBg: "dark:bg-pink-900/30",
    darkText: "dark:text-pink-400",
  },
  "Software Engineering": {
    bg: "bg-cyan-100",
    text: "text-cyan-800",
    darkBg: "dark:bg-cyan-900/30",
    darkText: "dark:text-cyan-400",
  },
  "Personal": {
    bg: "bg-orange-100",
    text: "text-orange-800",
    darkBg: "dark:bg-orange-900/30",
    darkText: "dark:text-orange-400",
  },
  "Opinion": {
    bg: "bg-red-100",
    text: "text-red-800",
    darkBg: "dark:bg-red-900/30",
    darkText: "dark:text-red-400",
  },
};

export default function CategoryBadge({ category, clickable = false }: CategoryBadgeProps) {
  const colors = categoryColors[category] || {
    bg: "bg-gray-100",
    text: "text-gray-800",
    darkBg: "dark:bg-gray-900/30",
    darkText: "dark:text-gray-400",
  };

  const badgeClasses = `inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold ${colors.bg} ${colors.text} ${colors.darkBg} ${colors.darkText} hover:opacity-80 transition-opacity`;

  if (clickable) {
    return (
      <Link
        href={`/blog?category=${encodeURIComponent(category)}`}
        className={badgeClasses}
      >
        {category}
      </Link>
    );
  }

  return <span className={badgeClasses}>{category}</span>;
}


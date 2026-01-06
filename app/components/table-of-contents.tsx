"use client";

import { useEffect, useState } from "react";

interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCHeading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the page
    const elements = document.querySelectorAll("main h2, main h3");
    const tocHeadings: TOCHeading[] = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: parseInt(element.tagName.charAt(1)),
    }));
    setHeadings(tocHeadings);

    // Intersection Observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? "ml-4" : ""}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block text-sm py-1 px-2 rounded-md transition-all duration-200 ${
                activeId === heading.id
                  ? "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/30 font-medium"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              }`}
            >
              <span className="line-clamp-2">{heading.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


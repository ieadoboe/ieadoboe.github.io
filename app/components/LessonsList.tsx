import Link from "next/link";
import React from "react";

const LessonsList = () => {
  const lessons = [
    {
      level: 1,
      phase: "Introduction to Data Science",
      name: "Planetaria",
      description:
        "Creating technology to empower civilians to explore space on their own terms.",
      link: "/planetaria",
    },
    {
      level: 1,
      phase: "Introduction to Data Science",
      name: "Animaginary",
      description:
        "High performance web animation library, hand-written in optimized WASM.",
    },
    {
      level: 2,
      phase: "Data Science Fundamentals",
      name: "HelioStream",
      description:
        "Real-time video streaming library, optimized for interstellar transmission.",
    },
    {
      level: 2,
      phase: "Data Science Fundamentals",
      name: "cosmOS",
      description:
        "The operating system that powers our Planetaria space shuttles.",
    },
  ];

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {lessons.map((lesson, index) => (
        <li key={index} className="group relative flex flex-col items-start">
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
            <Link href={lesson.link || "#"}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{lesson.name}</span>
            </Link>
          </h2>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {lesson.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LessonsList;

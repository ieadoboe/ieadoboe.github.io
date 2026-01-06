import React from "react";
import Image from "next/image";
import { education } from "#site/content";

const EducationHistory = () => {
  // Sort education by order field
  const sortedEducation = [...education].sort((a, b) => a.order - b.order);

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M12 3L1 9l11 6 11-6-11-6z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="M12 22v-7"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
          <path
            d="M7 12v4.5c0 .667.333 1 1 1h8c.667 0 1-.333 1-1V12"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {sortedEducation.map((edu) => (
          <li key={edu.slug} className="flex gap-4">
            <div
              style={{
                backgroundColor: "white",
                width: "32px",
                height: "32px",
                display: "inline-block",
                overflow: "hidden",
              }}
              className="object-cover relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
            >
              <Image
                alt={edu.institution}
                loading="lazy"
                width={32}
                height={32}
                src={edu.logo}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Institution</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {edu.institution}
              </dd>
              <dt className="sr-only">Degree</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {edu.degree}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={edu.date_range}
              >
                <time dateTime={edu.start_date}>
                  {edu.start_date}
                </time>
                <span aria-hidden="true">—</span>
                <time dateTime={edu.end_date}>
                  {edu.end_date}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default EducationHistory;

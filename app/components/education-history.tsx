import React from "react";
import Image from "next/image";
import munLogo from "@/public/logo-mun.png";
import knustLogo from "@/public/logo-knust.png";

const EducationHistory = () => {
  const education = [
        {
      organization: "Memorial University of Newfoundland",
      role: "MSc in Scientific Computing", 
      period: "2025-present", 
      logoSrc: munLogo, 
    },
    {
      organization: "Memorial University of Newfoundland",
      role: "Master of Data Science", 
      period: "2024—2025", 
      logoSrc: munLogo, 
    },
    {
      organization: "Kwame Nkrumah University of Science and Technology",
      role: "BSc Electrical Engineering", 
      period: "2017—2021",
      logoSrc: knustLogo,
    },
  ];

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
        {education.map((education, index) => (
          <li key={index} className="flex gap-4">
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
                alt={education.organization}
                loading="lazy"
                width={32}
                height={32}
                src={education.logoSrc}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {education.organization}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {education.role}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={education.period}
              >
                <time dateTime={education.period.split("—")[0]}>
                  {education.period.split("—")[0]}
                </time>
                <span aria-hidden="true">—</span>
                <time dateTime={education.period.split("—")[1]}>
                  {education.period.split("—")[1]}
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

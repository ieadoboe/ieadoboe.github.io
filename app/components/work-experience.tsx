import React from "react";
import Image from "next/image";
import vraLogo from "@/public/logo-vra.png";
import newmontLogo from "@/public/logo-newmont.png";
import envisionLogo from "@/public/logo-envision.png";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Newmont Corporation",
      role: "Technology Portfolio Support",
      date: "2022—2024",
      logoSrc: newmontLogo,
    },
    {
      company: "Newmont Corporation",
      role: "End-User Support Analyst",
      date: "2021—2022",
      logoSrc: newmontLogo,
    },
    {
      company: "Envision Digital ",
      role: "Full-Stack Developer",
      date: "2020—2021",
      logoSrc: envisionLogo,
    },
    {
      company: "Volta River Authority",
      role: "Electrical Engineer",
      date: "2018—2018",
      logoSrc: vraLogo,
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {experiences.map((experience, index) => (
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
                alt={experience.company}
                loading="lazy"
                width={32}
                height={32}
                src={experience.logoSrc}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {experience.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {experience.role}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={experience.date}
              >
                <time dateTime={experience.date.split("—")[0]}>
                  {experience.date.split("—")[0]}
                </time>
                <span aria-hidden="true">—</span>
                <time dateTime={experience.date.split("—")[1]}>
                  {experience.date.split("—")[1]}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default WorkExperience;

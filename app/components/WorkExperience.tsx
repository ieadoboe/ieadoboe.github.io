import React from "react";
import Image from "next/image";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Newmont Corporation",
      role: "Tech Portfolio Support",
      date: "2022—2024",
      logoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27pE1X2C5wm5AtFGM1VzcXdLx_bdAL3Cqzw&s",
    },
    {
      company: "Newmont Corporation",
      role: "EUC Analyst",
      date: "2021—2022",
      logoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27pE1X2C5wm5AtFGM1VzcXdLx_bdAL3Cqzw&s",
    },
    {
      company: "Envision Digital ",
      role: "Front-End Developer",
      date: "2014—2019",
      logoSrc:
        "data:image/png;base64,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",
    },
    {
      company: "Volta River Authority",
      role: "Electrical Engineer",
      date: "2011—2014",
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/VRA_Logo.png",
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
        <span className="ml-3">Work</span>
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
              {/* <img
                alt={experience.company}
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                className="h-7 w-7"
                src={experience.logoSrc}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              /> */}
              <Image
                alt={experience.company}
                loading="lazy"
                // layout="intrinsic"
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
        href="https://drive.google.com/file/d/10eDhioLAzP0r42rpYs7OBXRRBAUYq5IS/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
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

import React from "react";
import Image from "next/image";
import Link from "next/link";
import mpgCover from "@/public/projects-mpg-cover.jpg";
import heartCover from "@/public/projects-heart-cover.jpg";
import airbnbCover from "@/public/projects-airbnb-cover.webp";
import motorCover from "@/public/projects-motor-cover.webp";

const ProjectsList = () => {
  const projects = [
    {
      name: "Regression Analysis of the Automobile MPG Dataset",
      description:
        "Deep statistical dive into the Automobile MPG Dataset to uncover fuel efficiency secrets.",
      cover_image: mpgCover,
      link: "/Regression-Analysis-of-the-Auto-MPG-Dataset.pdf",
      githubLink: "Report",
      date: "December 2024",
      newPage: true,
    },
    {
      name: "Los Angeles Airbnb Listings Exploratory Analysis",
      description:
        "Explore the trends, pricing, and hidden gems of Los Angeles’ Airbnb scene—discover what makes a listing shine!",
      cover_image: airbnbCover,
      link: "https://github.com/ieadoboe/los-angeles-airbnb.git",
      githubLink: "GitHub",
      date: "December 2024",
      newPage: true,
    },
    {
      name: "Non-invasive Heart Disease Prediction",
      description:
        "Predict heart disease using machine learning for early detection and better health outcomes.",
      cover_image: heartCover,
      link: "/blog/heart-disease-prediction/cvd",
      githubLink: "Article",
      date: "November 2024",
      newPage: false,
    },
    {
      name: "Real-Time Fault Detection in Induction Motors Using CNNs and CWT Analysis",
      description:
        "A stepping stone in motor maintenance with real-time fault detection using CNNs and CWT analysis.",
      cover_image: motorCover,
      link: "/blog/fault-detection-in-induction-motors/motor-faults",
      githubLink: "Article",
      date: "Jan 2021 - Sep 2021",
      newPage: false,
    },
  ];

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <li key={index} className="group relative flex flex-col items-start">
          <div className="relative z-10 flex items-center justify-center h-[12rem] w-full overflow-hidden rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              alt={project.name}
              src={project.cover_image}
              layout="fill" // For fully covering a container
              objectFit="cover" // Maintains aspect ratio and ensures the image fills the container
              objectPosition="center"
              priority={false}
            />
          </div>
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
            <Link
              href={project.link}
              target={project.newPage ? "_blank" : "_self"}
              rel={project.newPage ? "noopener noreferrer" : undefined}
            >
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{project.name}</span>
            </Link>
          </h2>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.date}
          </p>
          <p className="relative items-center z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 flex-none"
            >
              <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="ml-2">{project.githubLink}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;

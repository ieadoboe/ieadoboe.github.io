"use client";

import React from "react";
import ProjectsList from "../components/projects-list";
import { pagesContent } from "@/data/siteContent";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  // Physics-based animation variants for header elements
  const headerVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
      mass: 2,
    },
  };

  // Animation for text elements
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <div className="w-full flex min-h-dvh">
      <div className="relative flex w-full flex-col">
        <main className="flex-auto">
          <div className="sm:px-8 mt-10 sm:mt-20">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <motion.header
                    className="max-w-2xl pt-4"
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h1
                      className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
                      variants={textVariants}
                    >
                      {pagesContent.projects.header}
                    </motion.h1>
                    <motion.p
                      className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base"
                      variants={textVariants}
                    >
                      {pagesContent.projects.description}
                    </motion.p>
                  </motion.header>
                  <motion.div
                    className="mt-16 sm:mt-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.5,
                    }}
                  >
                    <ProjectsList />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;

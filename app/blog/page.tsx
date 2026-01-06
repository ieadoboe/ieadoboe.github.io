"use client";

import { motion } from "framer-motion";
import React from "react";
import PostItem from "@/app/components/post-item";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import { pagesContent } from "@/data/siteContent";

// Physics-based animation variants for reusability
const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
    mass: 2,
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05, // Slightly faster staggering for physics-based animations
      delayChildren: 0.02, // Small initial delay
    },
  },
};

export default function BlogPage() {
  // Sort and filter posts
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

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
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                  >
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      {pagesContent.blogs.header}
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                      {pagesContent.blogs.description}
                    </p>
                  </motion.header>
                  <div className="mt-16 sm:mt-20">
                    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                      <motion.div
                        className="flex max-w-3xl flex-col space-y-16"
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                      >
                        {sortedPosts.length > 0 ? (
                          <motion.ul
                            className="flex max-w-3xl flex-col space-y-16"
                            variants={staggerContainer}
                          >
                            {sortedPosts.map((post) => {
                              const { slug, title, date, description, tags, category, reading_time } = post;
                              return (
                                <motion.li key={slug} variants={fadeInUp}>
                                  <PostItem
                                    slug={slug}
                                    date={date}
                                    title={title}
                                    description={description || ""}
                                    tags={tags}
                                    category={category}
                                    reading_time={reading_time}
                                  />
                                </motion.li>
                              );
                            })}
                          </motion.ul>
                        ) : (
                          <motion.p variants={fadeInUp}>
                            No posts found
                          </motion.p>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

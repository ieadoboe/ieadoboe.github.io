"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, Suspense } from "react";
import PostItem from "@/app/components/post-item";
import { notes } from "#site/content";
import { sortPosts } from "@/lib/utils";
import { pagesContent } from "@/data/siteContent";
import { useSearchParams } from "next/navigation";

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

function NotesContent() {
  const searchParams = useSearchParams();
  const tagParam = searchParams?.get("tag") || null;
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Update selected tag when URL param changes
  useEffect(() => {
    setSelectedTag(tagParam);
  }, [tagParam]);

  // Sort and filter notes
  let filteredNotes = notes.filter((note) => note.published);

  // Filter by tag if selected
  if (selectedTag) {
    filteredNotes = filteredNotes.filter(
      (note) => note.tags && note.tags.includes(selectedTag)
    );
  }

  const sortedNotes = sortPosts(filteredNotes);

  const clearFilter = () => {
    setSelectedTag(null);
    window.history.pushState({}, "", "/notes");
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
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                  >
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      {pagesContent.notes.header}
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                      {pagesContent.notes.description}
                    </p>

                    {/* Active Filter Badge */}
                    {selectedTag && (
                      <div className="mt-6 flex items-center gap-2">
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Filtering by:
                        </span>
                        <button
                          onClick={clearFilter}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-colors"
                        >
                          #{selectedTag}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </motion.header>
                  <div className="mt-16 sm:mt-20">
                    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                      <motion.div
                        className="flex max-w-3xl flex-col space-y-16"
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                      >
                        {sortedNotes.length > 0 ? (
                          <motion.ul
                            className="flex max-w-3xl flex-col space-y-16"
                            variants={staggerContainer}
                          >
                            {sortedNotes.map((note) => {
                              const { slug, title, date, description, tags, category, reading_time } = note;
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
                          <motion.div variants={fadeInUp} className="text-center py-12">
                            <p className="text-zinc-600 dark:text-zinc-400">
                              No notes found{selectedTag && ` with tag "${selectedTag}"`}.
                            </p>
                            {selectedTag && (
                              <button
                                onClick={clearFilter}
                                className="mt-4 text-sm text-teal-600 dark:text-teal-400 hover:underline"
                              >
                                Clear filter
                              </button>
                            )}
                          </motion.div>
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

export default function NotesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotesContent />
    </Suspense>
  );
}


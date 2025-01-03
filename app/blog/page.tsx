import React from "react";
import PostItem from "@/app/components/PostItem";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import QueryPagination from "../components/QueryPagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on data science and more.",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams?: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = parseInt(searchParams?.page || "1", 10) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <div className="w-full flex min-h-screen">
      <div className="relative flex w-full flex-col">
        <main className="flex-auto">
          <div className="sm:px-8 mt-16 sm:mt-32">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <header className="max-w-2xl pt-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      Writing on data science, life, and the exciting world of
                      innovation.
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                      Dive deep into the data with me! All my ramblings on data
                      science, statistical wizardry, and how to make sense of a
                      world that runs on data—laid out in a timeline of
                      occasional brilliance and unfiltered curiosity.
                    </p>
                  </header>
                  <div className="mt-16 sm:mt-20">
                    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                      <div className="flex max-w-3xl flex-col space-y-16">
                        {displayPosts.length > 0 ? (
                          <ul className="flex max-w-3xl flex-col space-y-16">
                            {displayPosts.map((post) => {
                              const { slug, title, date, description } = post;
                              return (
                                <li key={slug}>
                                  <PostItem
                                    slug={slug}
                                    date={date}
                                    title={title}
                                    description={description || ""}
                                  />
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <p>No posts found</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <QueryPagination totalPages={totalPages} />
      </div>
    </div>
  );
}

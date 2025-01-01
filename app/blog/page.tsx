import React from "react";
import Article from "../components/ArticleItem";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

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
                      Writing on data science, machine learning, and the
                      exciting world of innovation.
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                      Dive deep into the numbers with me! All my musings on data
                      science, statistical wizardry, and how to make sense of a
                      world that runs on data—laid out in a timeline of
                      occasional brilliance and unfiltered curiosity.
                    </p>
                  </header>
                  <div className="mt-16 sm:mt-20">
                    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                      <div className="flex max-w-3xl flex-col space-y-16">
                        {displayPosts?.length > 0 ? (
                          <ul className="flex max-w-3xl flex-col space-y-16">
                            {displayPosts.map((post) => {
                              const { slug, title, date, description } = post;
                              return (
                                <li key={slug}>
                                  <Article
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
                        <Article
                          title="Crafting a design system for a multiplanetary future"
                          slug="crafting-a-design-system-for-a-multiplanetary-future"
                          date="2022-09-05"
                          description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
                        />
                        <Article
                          title="Crafting a design system for a multiplanetary future"
                          slug="crafting-a-design-system-for-a-multiplanetary-future"
                          date="2022-09-05"
                          description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
                        />
                        <Article
                          title="Crafting a design system for a multiplanetary future"
                          slug="crafting-a-design-system-for-a-multiplanetary-future"
                          date="2022-09-05"
                          description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
                        />
                      </div>
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

import { posts } from "#site/content";
import BackButton from "@/app/components/back-button";
import { MDXContent } from "@/app/components/mdx-component";
import { TagList } from "@/app/components/tag-badge";
import CategoryBadge from "@/app/components/category-badge";
import ReadingProgress from "@/app/components/reading-progress";
import AuthorCard from "@/app/components/author-card";
import SocialShare from "@/app/components/social-share";
import ReadingTimeIndicator from "@/app/components/reading-time-indicator";
import ImageLightbox from "@/app/components/image-lightbox";
import TableOfContents from "@/app/components/table-of-contents";
import ArticleFooter from "@/app/components/article-footer";
import { formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPostFromParams(params: Awaited<BlogPageProps["params"]>) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  Awaited<BlogPageProps["params"]>[]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function BlogPage({
  params,
}: {
  params: BlogPageProps["params"];
}) {
  const resolvedParams = await params;
  const post = await getPostFromParams(resolvedParams);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="w-full flex min-h-screen">
      <ReadingProgress />
      <div className="relative flex w-full flex-col">
        <div className="flex-auto">
          <div className="sm:px-8 mt-10 sm:mt-10">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="sticky top-24 z-10">
                  <BackButton />
                </div>

                {/* Hero Header with Gradient Background - Full Width */}
                <div className="relative -mx-4 sm:-mx-8 lg:-mx-12 mb-12 sm:mb-16">
                  <header className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12">
                    {/* Category Badge */}
                    {post.category && (
                      <div className="mb-6 flex justify-center">
                        <CategoryBadge category={post.category} />
                      </div>
                    )}

                    {/* Title */}
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-tight sm:leading-tight text-center max-w-4xl mx-auto">
                      {post.title}
                    </h1>

                    {/* Description */}
                    {post.description && (
                      <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 text-center mx-auto max-w-3xl">
                        {post.description}
                      </p>
                    )}
                    {/* Featured Image */}
                    {post.cover_image && (
                      <div className="mt-10 sm:mt-12 max-w-4xl mx-auto">
                        <div className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-xl">
                          <ImageLightbox
                            src={post.cover_image}
                            alt={post.cover_image_alt || post.title}
                            className="w-full h-auto [&_img]:!shadow-none [&_img]:!rounded-none"
                            width={1200}
                            height={630}
                            priority
                          />
                        </div>
                        {post.cover_image_alt && (
                          <p className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-500 italic">
                            {post.cover_image_alt}
                          </p>
                        )}
                      </div>
                    )}
                    {/* Metadata Row with Reading Time Indicator */}
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                      </div>

                      {/* Reading Time Indicator */}
                      {post.reading_time && (
                        <ReadingTimeIndicator readingTime={post.reading_time} />
                      )}
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-8 flex justify-center">
                        <TagList tags={post.tags} />
                      </div>
                    )}
                  </header>
                </div>

                {/* Two Column Layout: Main Content + Aside */}
                <div className="mx-auto max-w-7xl">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 xl:gap-16">
                    {/* Main Content Column */}
                    <div className="min-w-0">
                      {/* Blog Content */}
                      <main className="prose prose-zinc dark:prose-invert prose-base sm:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:leading-relaxed prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-a:text-neutral-800 dark:prose-a:text-neutral-100 prose-a:no-underline hover:prose-a:underline [&_h1_a]:no-underline [&_h1_a:hover]:no-underline [&_h2_a]:no-underline [&_h2_a:hover]:no-underline [&_h3_a]:no-underline [&_h3_a:hover]:no-underline [&_h4_a]:no-underline [&_h4_a:hover]:no-underline [&_h5_a]:no-underline [&_h5_a:hover]:no-underline [&_h6_a]:no-underline [&_h6_a:hover]:no-underline prose-img:rounded-xl prose-img:shadow-md">
                        <MDXContent code={post.body} />
                      </main>

                      {/* Article Footer */}
                      <ArticleFooter
                        tags={post.tags}
                        currentPost={{
                          slug: post.slugAsParams,
                          title: post.title,
                          description: post.description,
                          date: post.date,
                          tags: post.tags,
                          category: post.category,
                          reading_time: post.reading_time,
                          cover_image: post.cover_image,
                        }}
                        allPosts={posts
                          .filter((p) => p.published)
                          .map((p) => ({
                            slug: p.slugAsParams,
                            title: p.title,
                            description: p.description,
                            date: p.date,
                            tags: p.tags,
                            category: p.category,
                            reading_time: p.reading_time,
                            cover_image: p.cover_image,
                          }))}
                      />
                    </div>

                    {/* Aside - TOC, Social Share & Author */}
                    <aside className="lg:sticky lg:top-32 lg:self-start space-y-6 h-fit">
                      {/* Table of Contents */}
                      <TableOfContents />

                      {/* Social Share */}
                      <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                        <SocialShare title={post.title} />
                      </div>

                      {/* Author Card */}
                      <div>
                        <AuthorCard author={post.author} showBio={false} />
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

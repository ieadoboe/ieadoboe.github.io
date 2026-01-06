import { posts } from "#site/content";
import BackButton from "@/app/components/back-button";
import { MDXContent } from "@/app/components/mdx-component";
import { TagList } from "@/app/components/tag-badge";
import CategoryBadge from "@/app/components/category-badge";
import ReadingProgress from "@/app/components/reading-progress";
import ContentDivider from "@/app/components/content-divider";
import { formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
import { notFound } from "next/navigation";
import Image from "next/image";

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
                <div className="mx-auto max-w-3xl lg:max-w-3xl">
                  <header className="pt-2 sm:pt-4">
                    {/* Category Badge */}
                    {post.category && (
                      <div className="mb-6 flex justify-center">
                        <CategoryBadge category={post.category} />
                      </div>
                    )}

                    {/* Title */}
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-tight sm:leading-tight text-center">
                      {post.title}
                    </h1>

                    {/* Description */}
                    {post.description && (
                      <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 text-center mx-auto max-w-2xl">
                        {post.description}
                      </p>
                    )}

                    {/* Metadata: Author, Date, Reading Time */}
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                      {post.author && (
                        <div className="flex items-center gap-1">
                          <span className="font-medium">By {post.author}</span>
                        </div>
                      )}
                      <span
                        aria-hidden="true"
                        className="text-zinc-300 dark:text-zinc-600"
                      >
                        •
                      </span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      {post.reading_time && (
                        <>
                          <span
                            aria-hidden="true"
                            className="text-zinc-300 dark:text-zinc-600"
                          >
                            •
                          </span>
                          <span>{post.reading_time}</span>
                        </>
                      )}
                    </div>

                    {/* Featured Image */}
                    {post.cover_image && (
                      <div className="mt-10 sm:mt-12 relative aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 mx-auto">
                        <Image
                          src={post.cover_image}
                          alt={post.cover_image_alt || post.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    )}

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-8 flex justify-center">
                        <TagList tags={post.tags} />
                      </div>
                    )}
                  </header>

                  <ContentDivider />

                  <main className="mx-auto max-w-2xl prose prose-zinc dark:prose-invert prose-base sm:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:leading-relaxed prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-a:text-neutral-800 dark:prose-a:text-neutral-100 prose-a:no-underline hover:prose-a:underline [&_h1_a]:no-underline [&_h1_a:hover]:no-underline [&_h2_a]:no-underline [&_h2_a:hover]:no-underline [&_h3_a]:no-underline [&_h3_a:hover]:no-underline [&_h4_a]:no-underline [&_h4_a:hover]:no-underline [&_h5_a]:no-underline [&_h5_a:hover]:no-underline [&_h6_a]:no-underline [&_h6_a:hover]:no-underline prose-img:rounded-xl prose-img:shadow-md">
                    <MDXContent code={post.body} />
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

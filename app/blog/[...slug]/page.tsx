import { posts } from "#site/content";
import BackButton from "@/app/components/back-button";
import { MDXContent } from "@/app/components/mdx-component";
import { TagList } from "@/app/components/tag-badge";
import CategoryBadge from "@/app/components/category-badge";
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
      <div className="relative flex w-full flex-col">
        <div className="flex-auto">
          <div className="sm:px-8 mt-10 sm:mt-10">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="sticky top-24 z-10">
                  <BackButton />
                </div>
                <div className="mx-auto max-w-3xl lg:max-w-3xl">
                  <header className="max-w-2xl pt-4">
                    {/* Category Badge */}
                    {post.category && (
                      <div className="mb-4">
                        <CategoryBadge category={post.category} />
                      </div>
                    )}

                    {/* Title */}
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      {post.title}
                    </h1>

                    {/* Metadata: Author, Date, Reading Time */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {post.author && (
                        <div className="flex items-center gap-1">
                          <span className="font-medium">By {post.author}</span>
                        </div>
                      )}
                      <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">
                        •
                      </span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      {post.reading_time && (
                        <>
                          <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">
                            •
                          </span>
                          <span>{post.reading_time}</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    {post.description && (
                      <p className="mt-6 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base text-prettier">
                        {post.description}
                      </p>
                    )}

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-6">
                        <TagList tags={post.tags} />
                      </div>
                    )}

                    {/* Featured Image */}
                    {post.cover_image && (
                      <div className="mt-8 relative aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                        <Image
                          src={post.cover_image}
                          alt={post.cover_image_alt || post.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    )}
                  </header>

                  <main className="max-w-3xl mt-16 sm:mt-20 prose prose-zinc dark:prose-invert">
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

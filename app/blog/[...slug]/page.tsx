import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/MDXComponent";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import "@/styles/mdx.css";

// Function to fetch the post based on the params
async function getPostFromParams(slug: string): Promise<{
  title: string;
  description?: string;
  body: string;
  published: boolean;
} | null> {
  const post = posts.find((post) => post.slugAsParams === slug);
  return post ?? null;
}

// Function to generate metadata for the article page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params; // Await the params promise
  const slug = resolvedParams.slug?.join("/") ?? "";
  const post = await getPostFromParams(slug);

  if (!post) {
    return {}; // Return empty metadata if no post is found
  }

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
  };
}

// Function to generate static params based on posts
export async function generateStaticParams(): Promise<
  { slug: string[] }[]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

// Main article page component
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params; // Await the params promise
  const slug = resolvedParams.slug?.join("/") ?? "";
  const post = await getPostFromParams(slug);

  if (!post || !post.published) {
    // If no post found or the post is unpublished, trigger a 404 page
    notFound();
  }

  return (
    <article>
      <div className="w-full flex min-h-screen">
        <div className="relative flex w-full flex-col">
          <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-3xl lg:max-w-5xl">
                    <header className="max-w-2xl pt-4">
                      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        {post.title}
                      </h1>
                      {post.description && (
                        <p className="mt-6 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base text-prettier">
                          {post.description}
                        </p>
                      )}
                    </header>
                    <div className="max-w-3xl mt-16 sm:mt-20 prose prose-zinc dark:prose-invert">
                      <MDXContent code={post.body} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </article>
  );
}
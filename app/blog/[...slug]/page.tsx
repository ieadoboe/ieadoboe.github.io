import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/mdx-component";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import "@/styles/mdx.css";

async function getPostFromParams(slug: string): Promise<{
  title: string;
  description?: string;
  body: string;
  published: boolean;
} | null> {
  return posts.find((post) => post.slugAsParams === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}): Promise<Metadata> {
  const slug = params.slug?.join("/") ?? "";
  const post = await getPostFromParams(slug);

  if (!post) {
    return { title: "Post Not Found", description: "" };
  }

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function ArticlePage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.join("/") ?? "";
  const post = await getPostFromParams(slug);

  if (!post || !post.published) {
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
                  <div className="mx-auto max-w-3xl lg:max-w-3xl">
                    <header className="max-w-2xl pt-4">
                      <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
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

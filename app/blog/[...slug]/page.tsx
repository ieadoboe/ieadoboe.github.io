import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/MDXComponent";


interface ArticlePageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: ArticlePageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  ArticlePageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const post = await getPostFromParams(params);

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
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <header className="max-w-2xl pt-4">
                      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        {post.title}
                      </h1>
                      {post.description ? (
                        <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                          {post.description}
                        </p>
                      ) : null}
                    </header>
                    <div className="mt-16 sm:mt-20 prose prose-zinc dark:prose-invert">
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

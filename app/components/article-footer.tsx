import Link from "next/link";
import ContactCard from "./contact-card";
import RelatedPosts from "./related-posts";

interface ArticleFooterProps {
  tags?: string[];
  currentPost: {
    slug: string;
    title: string;
    description?: string;
    date: string;
    tags?: string[];
    category?: string;
    reading_time?: string;
    cover_image?: string;
  };
  allPosts: Array<{
    slug: string;
    title: string;
    description?: string;
    date: string;
    tags?: string[];
    category?: string;
    reading_time?: string;
    cover_image?: string;
  }>;
  contentType?: "blog" | "notes";
}

export default function ArticleFooter({
  tags,
  currentPost,
  allPosts,
  contentType = "blog",
}: ArticleFooterProps) {
  const basePath = contentType === "notes" ? "/notes" : "/blog";
  const backLinkText =
    contentType === "notes" ? "Back to all notes" : "Back to all articles";

  return (
    <footer className="mt-16 sm:mt-20">
      {/* Decorative Divider */}
      <div className="relative mb-12 sm:mb-16">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-700" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-zinc-950 px-4 text-sm text-zinc-500 dark:text-zinc-500">
            ✦
          </span>
        </div>
      </div>

      {/* Clickable Tags Section */}
      {tags && tags.length > 0 && (
        <section className="mb-12 sm:mb-16">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-gradient-to-br from-zinc-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-950 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0">
                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
                  Explore by topic
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`${basePath}?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-all duration-200 hover:scale-105"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      <RelatedPosts
        currentPost={currentPost}
        allPosts={allPosts}
        maxPosts={3}
        contentType={contentType}
      />

      {/* Contact CTA */}
      <section className="mt-12 sm:mt-16 mb-12">
        <ContactCard
          title="Enjoyed this post?"
          description="I'd love to hear your thoughts. Reach out by email or connect with me on LinkedIn."
        />
      </section>

      {/* Back to Blog/Notes Navigation */}
      <section className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
        <div className="flex justify-center">
          <Link
            href={basePath}
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>{backLinkText}</span>
          </Link>
        </div>
      </section>
    </footer>
  );
}

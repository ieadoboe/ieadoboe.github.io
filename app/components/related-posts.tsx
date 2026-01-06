import PostItem from "./post-item";

interface Post {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  category?: string;
  reading_time?: string;
  cover_image?: string;
}

interface RelatedPostsProps {
  currentPost: Post;
  allPosts: Post[];
  maxPosts?: number;
  contentType?: "blog" | "notes";
}

/**
 * Calculate similarity score between two posts based on tags and category
 */
function calculateSimilarity(post1: Post, post2: Post): number {
  let score = 0;

  // Same category gives high score
  if (post1.category && post2.category && post1.category === post2.category) {
    score += 10;
  }

  // Shared tags give score
  if (post1.tags && post2.tags) {
    const sharedTags = post1.tags.filter((tag) => post2.tags?.includes(tag));
    score += sharedTags.length * 5;
  }

  return score;
}

/**
 * Get related posts based on tags and category
 */
function getRelatedPosts(
  currentPost: Post,
  allPosts: Post[],
  maxPosts: number = 3
): Post[] {
  // Filter out the current post and unpublished posts
  const otherPosts = allPosts.filter(
    (post) => post.slug !== currentPost.slug
  );

  // Calculate similarity scores
  const postsWithScores = otherPosts.map((post) => ({
    post,
    score: calculateSimilarity(currentPost, post),
  }));

  // Sort by score (descending) and then by date (newest first)
  const sortedPosts = postsWithScores
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .slice(0, maxPosts)
    .map((item) => item.post);

  return sortedPosts;
}

export default function RelatedPosts({
  currentPost,
  allPosts,
  maxPosts = 3,
  contentType = "blog",
}: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentPost, allPosts, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  const title = contentType === "notes" ? "Explore other notes" : "Related Articles";
  const subtitle = contentType === "notes" 
    ? "Continue learning with these notes" 
    : "Continue exploring similar topics";
  const basePath = contentType === "notes" ? "/notes" : "/blog";

  return (
    <section className="mt-16 sm:mt-20 border-t border-zinc-200 dark:border-zinc-700 pt-12 sm:pt-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            {title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </div>

        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex flex-col space-y-16">
            {relatedPosts.map((post) => (
              <PostItem
                key={post.slug}
                slug={`${basePath}/${post.slug}`}
                title={post.title}
                date={post.date}
                description={post.description || ""}
                tags={post.tags}
                category={post.category}
                reading_time={post.reading_time}
                useGridLayout={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


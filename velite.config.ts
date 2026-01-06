import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";

// Calculate reading time based on word count
// Average reading speed: 200-250 words per minute
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 225;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

const computedFields = <T extends { slug: string; body: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
  reading_time: calculateReadingTime(data.body),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      // Core fields
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),

      // Featured image
      cover_image: s.string().optional(),
      cover_image_alt: s.string().optional(),

      // Author and categorization
      author: s.string().default("Isaac Adoboe"),
      tags: s.array(s.string()).optional(),
      category: s.string().optional(),

      // SEO fields
      seo_title: s.string().optional(),
      keywords: s.array(s.string()).optional(),

      // Content
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark-dimmed",
            light: "github-light",
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
      [rehypeKatex, { strict: true, throwOnError: false }],
    ],
  },
});

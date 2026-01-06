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

const notes = defineCollection({
  name: "Note",
  pattern: "notes/**/*.mdx",
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

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      name: s.string().max(150),
      description: s.string().max(500),
      date: s.string(), // e.g., "April 2025" or "Jan 2021 - Sep 2021"
      cover_image: s.string(),
      link: s.string().url(),
      link_text: s.string().default("GitHub"), // "GitHub", "Report", "Post", etc.
      new_page: s.boolean().default(true),
      featured: s.boolean().default(false),
      tags: s.array(s.string()).optional(),
      order: s.number().default(999), // For manual ordering
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split("/").slice(1).join("/"),
    })),
});

const workExperience = defineCollection({
  name: "WorkExperience",
  pattern: "work/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      company: s.string().max(100),
      role: s.string().max(150),
      start_date: s.string(), // e.g., "2022"
      end_date: s.string(), // e.g., "2024" or "Present"
      logo: s.string(),
      order: s.number().default(999),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split("/").slice(1).join("/"),
      date_range: `${data.start_date}—${data.end_date}`,
    })),
});

const education = defineCollection({
  name: "Education",
  pattern: "education/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      institution: s.string().max(150),
      degree: s.string().max(150),
      start_date: s.string(),
      end_date: s.string(),
      logo: s.string(),
      order: s.number().default(999),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split("/").slice(1).join("/"),
      date_range: `${data.start_date}—${data.end_date}`,
    })),
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
  collections: { posts, notes, projects, workExperience, education },
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

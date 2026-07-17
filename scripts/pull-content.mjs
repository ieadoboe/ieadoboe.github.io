/**
 * Build-time content pull: Sanity -> .velite/*.json (velite-compatible shape)
 * plus data/siteContent.json and config/site.json.
 *
 * The site remains fully static; this runs before `next dev` / `next build`.
 * Reads are public (published documents); no token required.
 */
import { compile } from "@mdx-js/mdx";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import fs from "node:fs";
import path from "node:path";

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "bt9eskrx";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const API_VERSION = "2026-07-01";
const OUT = path.join(process.cwd(), ".velite");

async function groq(query) {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}&perspective=published`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity query failed (${res.status}): ${await res.text()}`);
  return (await res.json()).result;
}

// Matches the MDX pipeline previously configured in velite.config.ts
async function compileMdx(source) {
  const compiled = await compile(source ?? "", {
    outputFormat: "function-body",
    development: false,
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: { dark: "github-dark-dimmed", light: "github-light" } }],
      [
        rehypeAutolinkHeadings,
        { behavior: "wrap", properties: { className: ["subheading-anchor"], ariaLabel: "Link to section" } },
      ],
      [rehypeKatex, { strict: true, throwOnError: false }],
    ],
  });
  return String(compiled);
}

// Computed on the raw markdown source (more accurate than velite's compiled-body count)
function readingTime(content) {
  const wordCount = content.trim().split(/\s+/).length;
  return `${Math.ceil(wordCount / 225)} min read`;
}

function coverImageObject(img) {
  if (!img?.url) return undefined;
  const { width, height } = img.dimensions ?? {};
  return {
    src: img.url,
    height,
    width,
    blurDataURL: img.lqip,
    blurWidth: 8,
    blurHeight: width && height ? Math.round((8 * height) / width) : 8,
  };
}

function clean(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined && v !== null));
}

const IMG = `{"url": asset->url, "dimensions": asset->metadata.dimensions{width, height}, "lqip": asset->metadata.lqip}`;

async function pullArticles(type, prefix) {
  const docs = await groq(
    `*[_type == "${type}"] | order(slug.current asc){
      title, "slugCurrent": slug.current, description, date, published, author,
      tags, category, seo_title, keywords, cover_image_alt, body,
      "cover": cover_image${IMG}
    }`
  );
  return Promise.all(
    docs.map(async (d) => {
      const body = await compileMdx(d.body);
      return clean({
        slug: `${prefix}/${d.slugCurrent}`,
        title: d.title,
        description: d.description,
        date: new Date(d.date).toISOString(),
        published: d.published !== false,
        cover_image: coverImageObject(d.cover),
        cover_image_alt: d.cover_image_alt,
        author: d.author || "Isaac Adoboe",
        tags: d.tags,
        category: d.category,
        seo_title: d.seo_title,
        keywords: d.keywords,
        body,
        slugAsParams: d.slugCurrent,
        reading_time: readingTime(d.body ?? ""),
      });
    })
  );
}

async function pullProjects() {
  const docs = await groq(
    `*[_type == "project"] | order(slug.current asc){
      name, "slugCurrent": slug.current, description, date, link, link_text,
      new_page, featured, tags, order, body, "cover": cover_image${IMG}
    }`
  );
  return Promise.all(
    docs.map(async (d) =>
      clean({
        slug: `projects/${d.slugCurrent}`,
        name: d.name,
        description: d.description,
        date: d.date,
        cover_image: d.cover?.url,
        link: d.link,
        link_text: d.link_text || "GitHub",
        new_page: d.new_page !== false,
        featured: d.featured === true,
        tags: d.tags,
        order: d.order ?? 999,
        body: await compileMdx(d.body),
        slugAsParams: d.slugCurrent,
      })
    )
  );
}

async function pullTimeline(type, prefix, fields) {
  const docs = await groq(
    `*[_type == "${type}"] | order(slug.current asc){
      ${fields.join(", ")}, "slugCurrent": slug.current, start_date, end_date,
      order, body, "logoUrl": logo.asset->url
    }`
  );
  return Promise.all(
    docs.map(async (d) => {
      const entry = clean({
        slug: `${prefix}/${d.slugCurrent}`,
        ...Object.fromEntries(fields.map((f) => [f, d[f]])),
        start_date: d.start_date,
        end_date: d.end_date,
        logo: d.logoUrl,
        order: d.order ?? 999,
        body: await compileMdx(d.body),
        slugAsParams: d.slugCurrent,
        date_range: `${d.start_date}—${d.end_date}`,
      });
      return entry;
    })
  );
}

async function pullSingleton(id) {
  const doc = await groq(`*[_id == "${id}"][0]`);
  if (!doc) throw new Error(`Missing singleton document: ${id}`);
  const { _id, _type, _rev, _createdAt, _updatedAt, ...rest } = doc;
  return rest;
}

const INDEX_JS = `// This file is generated by scripts/pull-content.mjs (Sanity)

export { default as posts } from './posts.json'
export { default as notes } from './notes.json'
export { default as projects } from './projects.json'
export { default as workExperience } from './workExperience.json'
export { default as education } from './education.json'
`;

const INDEX_DTS = `// This file is generated by scripts/pull-content.mjs (Sanity)

export interface CoverImage {
  src: string
  height: number
  width: number
  blurDataURL: string
  blurWidth: number
  blurHeight: number
}

export interface Post {
  slug: string
  title: string
  description?: string
  date: string
  published: boolean
  cover_image?: CoverImage
  cover_image_alt?: string
  author: string
  tags?: string[]
  category?: string
  seo_title?: string
  keywords?: string[]
  body: string
  slugAsParams: string
  reading_time: string
}

export type Note = Post

export interface Project {
  slug: string
  name: string
  description: string
  date: string
  cover_image: string
  link: string
  link_text: string
  new_page: boolean
  featured: boolean
  tags?: string[]
  order: number
  body: string
  slugAsParams: string
}

export interface WorkExperience {
  slug: string
  company: string
  role: string
  start_date: string
  end_date: string
  logo: string
  order: number
  body: string
  slugAsParams: string
  date_range: string
}

export interface Education {
  slug: string
  institution: string
  degree: string
  start_date: string
  end_date: string
  logo: string
  order: number
  body: string
  slugAsParams: string
  date_range: string
}

export declare const posts: Post[]
export declare const notes: Note[]
export declare const projects: Project[]
export declare const workExperience: WorkExperience[]
export declare const education: Education[]
`;

async function main() {
  console.log(`[sanity-pull] ${PROJECT_ID}/${DATASET}`);
  const [posts, notes, projects, work, education, siteContent, siteConfig] = await Promise.all([
    pullArticles("post", "blog"),
    pullArticles("note", "notes"),
    pullProjects(),
    pullTimeline("workExperience", "work", ["company", "role"]),
    pullTimeline("education", "education", ["institution", "degree"]),
    pullSingleton("siteContent"),
    pullSingleton("siteConfig"),
  ]);

  fs.mkdirSync(OUT, { recursive: true });
  const write = (name, data) =>
    fs.writeFileSync(path.join(OUT, name), JSON.stringify(data, null, 2));
  write("posts.json", posts);
  write("notes.json", notes);
  write("projects.json", projects);
  write("workExperience.json", work);
  write("education.json", education);
  fs.writeFileSync(path.join(OUT, "index.js"), INDEX_JS);
  fs.writeFileSync(path.join(OUT, "index.d.ts"), INDEX_DTS);

  fs.writeFileSync(
    path.join(process.cwd(), "data/siteContent.json"),
    JSON.stringify(siteContent, null, 2) + "\n"
  );
  fs.writeFileSync(
    path.join(process.cwd(), "config/site.json"),
    JSON.stringify(siteConfig, null, 2) + "\n"
  );

  console.log(
    `[sanity-pull] wrote ${posts.length} posts, ${notes.length} notes, ${projects.length} projects, ` +
      `${work.length} work, ${education.length} education, 2 singletons`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

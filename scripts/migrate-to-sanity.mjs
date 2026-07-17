/**
 * One-time migration: content/*.mdx + data/config JSON -> Sanity.
 * Idempotent: looks up existing documents by type+slug and replaces them.
 * Run: node --env-file=.env.local scripts/migrate-to-sanity.mjs
 */
import { createClient } from "@sanity/client";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2026-07-01",
  useCdn: false,
});

const assetCache = new Map(); // absolute file path -> asset document

async function uploadImage(absPath) {
  if (assetCache.has(absPath)) return assetCache.get(absPath);
  if (!fs.existsSync(absPath)) {
    console.warn(`  ! missing image: ${absPath}`);
    return null;
  }
  const asset = await client.assets.upload("image", fs.createReadStream(absPath), {
    filename: path.basename(absPath),
  });
  assetCache.set(absPath, asset);
  console.log(`  ^ uploaded ${path.basename(absPath)} -> ${asset._id}`);
  return asset;
}

function imageRef(asset) {
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

// Rewrite relative markdown image refs to Sanity CDN URLs.
async function rewriteBodyImages(body, fileDir) {
  const refs = [...body.matchAll(/!\[[^\]]*\]\((\.\/[^)\s]+|[^)/:\s][^):\s]*\.(?:png|jpe?g|webp|gif|svg))\)/g)];
  let out = body;
  for (const m of refs) {
    const rel = m[1];
    const abs = path.resolve(fileDir, rel);
    const asset = await uploadImage(abs);
    if (asset) out = out.replaceAll(`(${rel})`, `(${asset.url})`);
  }
  return out;
}

function walkMdx(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkMdx(p));
    else if (entry.name.endsWith(".mdx")) out.push(p);
  }
  return out;
}

async function upsert(type, slug, content) {
  const existing = await client.fetch(
    `*[_type == $type && slug.current == $slug][0]{_id}`,
    { type, slug }
  );
  const doc = { _type: type, slug: { _type: "slug", current: slug }, ...content };
  if (existing?._id) {
    await client.createOrReplace({ _id: existing._id, ...doc });
    console.log(`  = replaced ${type}/${slug}`);
  } else {
    await client.create(doc);
    console.log(`  + created ${type}/${slug}`);
  }
}

function isoDate(d) {
  const date = d instanceof Date ? d : new Date(d);
  return date.toISOString().slice(0, 10);
}

async function migratePostsAndNotes(contentDir, type) {
  const base = path.join(ROOT, "content", contentDir);
  for (const file of walkMdx(base)) {
    const { data: fm, content: rawBody } = matter(fs.readFileSync(file, "utf8"));
    const fileDir = path.dirname(file);
    const slug = path
      .relative(base, file)
      .replace(/\.mdx$/, "")
      .split(path.sep)
      .join("/");
    console.log(`${type}: ${slug}`);
    const body = await rewriteBodyImages(rawBody.trim(), fileDir);
    const doc = {
      title: fm.title,
      description: fm.description || undefined,
      date: isoDate(fm.date),
      published: fm.published !== false,
      author: fm.author || "Isaac Adoboe",
      tags: fm.tags || undefined,
      category: fm.category || undefined,
      seo_title: fm.seo_title || undefined,
      keywords: fm.keywords || undefined,
      cover_image_alt: fm.cover_image_alt || undefined,
      body,
    };
    if (fm.cover_image) {
      const asset = await uploadImage(path.resolve(fileDir, fm.cover_image));
      if (asset) doc.cover_image = imageRef(asset);
    }
    await upsert(type, slug, doc);
  }
}

async function migratePublicImageDocs(contentDir, type, imageField, mapFields) {
  const base = path.join(ROOT, "content", contentDir);
  for (const file of walkMdx(base)) {
    const { data: fm, content: rawBody } = matter(fs.readFileSync(file, "utf8"));
    const slug = path.basename(file, ".mdx");
    console.log(`${type}: ${slug}`);
    const doc = { ...mapFields(fm), body: rawBody.trim() };
    const imgPath = fm[imageField];
    if (imgPath) {
      const asset = await uploadImage(path.join(ROOT, "public", imgPath.replace(/^\//, "")));
      if (asset) doc[imageField === "logo" ? "logo" : "cover_image"] = imageRef(asset);
    }
    await upsert(type, slug, doc);
  }
}

async function migrateSingletons() {
  const siteContent = JSON.parse(fs.readFileSync(path.join(ROOT, "data/siteContent.json"), "utf8"));
  await client.createOrReplace({ _id: "siteContent", _type: "siteContent", ...siteContent });
  console.log("  = siteContent singleton");
  const siteConfig = JSON.parse(fs.readFileSync(path.join(ROOT, "config/site.json"), "utf8"));
  await client.createOrReplace({ _id: "siteConfig", _type: "siteConfig", ...siteConfig });
  console.log("  = siteConfig singleton");
}

async function main() {
  await migratePostsAndNotes("blog", "post");
  await migratePostsAndNotes("notes", "note");
  await migratePublicImageDocs("projects", "project", "cover_image", (fm) => ({
    name: fm.name,
    description: fm.description,
    date: String(fm.date),
    link: fm.link,
    link_text: fm.link_text || "GitHub",
    new_page: fm.new_page !== false,
    featured: fm.featured === true,
    tags: fm.tags || undefined,
    order: fm.order ?? 999,
  }));
  await migratePublicImageDocs("work", "workExperience", "logo", (fm) => ({
    company: fm.company,
    role: fm.role,
    start_date: String(fm.start_date),
    end_date: String(fm.end_date),
    order: fm.order ?? 999,
  }));
  await migratePublicImageDocs("education", "education", "logo", (fm) => ({
    institution: fm.institution,
    degree: fm.degree,
    start_date: String(fm.start_date),
    end_date: String(fm.end_date),
    order: fm.order ?? 999,
  }));
  await migrateSingletons();
  console.log("\nDone.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

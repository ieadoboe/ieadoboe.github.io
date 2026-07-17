# Reimagined Umbrella - My Personal Website

Welcome to my personal website project, built with [Next.js](https://nextjs.org), [TailwindCSS](https://tailwindcss.com/), and [Sanity](https://www.sanity.io/) as the headless CMS. This site serves as a portfolio to showcase my projects, blog posts, and articles, all while leveraging modern web development tools.

## Content Management (Sanity)

All content (blog posts, notes, projects, work experience, education, and page copy) lives in Sanity project `bt9eskrx`, dataset `production`.

- **Edit content**: https://ieadoboe.sanity.studio/ (post and note bodies are Markdown with GFM, KaTeX math, and fenced code blocks)
- **Content flow**: `scripts/pull-content.mjs` runs before every dev/build (`predev`/`prebuild` hooks and a CI step). It fetches published documents, compiles Markdown bodies with the same remark/rehype pipeline as before, and writes `.velite/*.json`, `data/siteContent.json`, and `config/site.json`. The site itself stays fully static.
- **Local dev**: `npm run dev` (pulls latest content first; re-run `npm run pull-content` to refresh mid-session)
- **Publishing**: pushing to `main` rebuilds and deploys. To make Studio publishes rebuild the site automatically, add a Sanity webhook (Manage > API > Webhooks) that POSTs to the GitHub API `repository_dispatch` endpoint with event type `sanity-rebuild` (requires a GitHub personal access token with `repo` scope in the webhook's Authorization header).
- The one-time migration from the old MDX files is preserved in `scripts/migrate-to-sanity.mjs`; the old `content/` directory is an inert archive.

## Getting Started

To get started with the development server, run one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

- **app/**: Contains the main application code, including pages and components.
- **assets/**: Stores static assets like images and fonts.
- **config/**: Configuration files for the project.
- **content/**: Markdown and MDX content for the blog.
- **lib/**: Utility functions and libraries.
- **public/**: Publicly accessible files.
- **styles/**: Global styles and Tailwind CSS configuration.

## Blog Posts

Blog posts are written in MDX and stored in the `content/blog` directory. Building My Personal Website with Next.js, Tailwind CSS, and a Sprinkle of Velite](content/blog/building-my-personal-website/my-website-journey.mdx)

## Features

- **MDX Integration**: Write JSX in Markdown documents for rich content pages.
- **ESLint**: Maintain code quality and consistency with `eslint-config-next`.
- **Math and LaTeX Support**: Render mathematical expressions with `katex`, `react-katex`, `rehype-katex`, and `remark-math`.
- **Remark and Rehype Plugins**: Enhance Markdown processing with plugins like `remark-gfm`, `rehype-autolink-headings`, `rehype-pretty-code`, and `rehype-slug`.
- **DaisyUI**: Use pre-designed components built on top of Tailwind CSS.
- **Brevo Integration**: Manage newsletter signups with Brevo (formerly Sendinblue).
- **Google Analytics**: Track website traffic and user interactions.

## Deployment

The project is deployed on GitHub Pages using GitHub Actions for automated builds and deployments. For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

I used [GitHub Pages](https://pages.github.com/).

import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import LatestPostItem from "./components/LatestPostItem";
import NewsletterForm from "./components/NewsletterForm";
import WorkExperience from "./components/WorkExperience";
import { Icons } from "./components/Icons";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import { siteConfig } from "@/config/site";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  return (
    <div className="w-full flex min-h-screen">
      <div className="relative flex w-full flex-col">
        <main className="flex-auto sm:px-8 mt-9">
          <div className="flex-none min-h-40"></div>
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Data scientist, hobbyist chef, and part-time overthinker. 🤔
                  </h1>
                  <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                    Hey there! I’m Isaac—a data scientist and perpetual learner
                    with a passion for transforming complexity into clarity. I
                    thrive on uncovering actionable insights from data,
                    empowering businesses and individuals to make informed
                    decisions.
                  </p>
                  <div className="flex pt-6 gap-2 sm:gap-4 flex-col sm:flex-row">
                    <PrimaryButton href="/projects" text="View my projects" />
                    <SecondaryButton href="/blog" text="Read my blog" />
                  </div>
                  <div className="mt-6 flex gap-6">
                    <a
                      className="group -m-1 p-1"
                      aria-label="Follow on X"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={siteConfig.links.twitter}
                    >
                      <Icons.twitter />
                    </a>
                    <a
                      className="group -m-1 p-1"
                      aria-label="Follow on GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={siteConfig.links.github}
                    >
                      <Icons.github />
                    </a>
                    <a
                      className="group -m-1 p-1"
                      aria-label="Follow on LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={siteConfig.links.linkedin}
                    >
                      <Icons.linkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:px-8 mt-24 md:mt-28">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <ul className="flex flex-col gap-16">
                      {latestPosts.map((post) => (
                        <li key={post.slug}>
                          <LatestPostItem
                            slug={post.slug}
                            title={post.title}
                            date={post.date}
                            description={post.description ?? ""}
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                      <NewsletterForm />
                      <WorkExperience />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

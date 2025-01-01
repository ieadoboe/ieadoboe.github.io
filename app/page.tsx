import SecondaryButton from "./components/SecondaryButton";
import PrimaryButton from "./components/PrimaryButton";
import ArticleCard from "./components/ArticleCard";
import NewsletterForm from "./components/NewsletterForm";
import WorkExperience from "./components/WorkExperience";
import { Icons } from "./components/Icons";

export default function Home() {
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
                      href="https://x.com/beezy_AIE"
                    >
                      <Icons.twitter />
                    </a>
                    <a
                      className="group -m-1 p-1"
                      aria-label="Follow on GitHub"
                      href="https://github.com/ieadoboe"
                    >
                      <Icons.github />
                    </a>
                    <a
                      className="group -m-1 p-1"
                      aria-label="Follow on LinkedIn"
                      href="www.linkedin.com/in/isaacedemadoboe"
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
                    <div className="flex flex-col gap-16">
                      <ArticleCard
                        title="Crafting a design system for a multiplanetary future"
                        date="2022-09-05"
                        description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
                        link="/articles/crafting-a-design-system-for-a-multiplanetary-future"
                      />
                      <ArticleCard
                        title="Crafting a design system for a multiplanetary future"
                        date="2024-10-28"
                        description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
                        link="/articles/crafting-a-design-system-for-a-multiplanetary-future"
                      />
                      <ArticleCard
                        title="Crafting a design system for a multiplanetary future"
                        date="2024-10-28"
                        description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
                        link="/articles/crafting-a-design-system-for-a-multiplanetary-future"
                      />
                    </div>
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

"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/app/components/primary-button";
import SecondaryButton from "@/app/components/secondary-button";
import AccentButton from "@/app/components/accent-button";
import LatestPostItem from "@/app/components/latest-post-item";
import NewsletterForm from "@/app/components/newsletter-form";
import WorkExperience from "@/app/components/work-experience";
import EducationHistory from "@/app/components/education-history";
import { Icons } from "@/app/components/site-icons";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import { siteConfig } from "@/config/site";
import { pagesContent } from "@/data/siteContent";

// Physics-based animation variants for reusability
const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
    mass: 2,
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05, // Slightly faster staggering for physics-based animations
      delayChildren: 0.02, // Small initial delay
    },
  },
};

export default function Home() {
  const latestPosts = sortPosts(posts.filter((post) => post.published)).slice(
    0,
    3
  );
  return (
    <div className="w-full flex min-h-dvh">
      <div className="relative flex w-full flex-col">
        {/* Use motion.main for overall entry, though optional */}
        <motion.main
          initial="initial" // Use initial state defined in variants
          animate="animate" // Use animate state defined in variants
          variants={{ animate: { transition: { delayChildren: 0.2 } } }} // Add slight delay before children start
          className="flex-auto sm:px-8 mt-9"
        >
          <div className="flex-none min-h-28"></div>
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                {/* Animate the header container */}
                <motion.div
                  className="max-w-2xl"
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer} // Apply stagger for children
                  transition={{ delayChildren: 0.3 }} // Start animating children after a small delay
                >
                  <motion.h1
                    className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
                    variants={fadeInUp} // Fade in + slide up
                  >
                    {pagesContent.home.header}
                  </motion.h1>
                  <motion.p
                    className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base"
                    variants={fadeInUp} // Fade in + slide up
                    transition={{ ...fadeInUp.transition, delay: 0.1 }} // Add slight delay
                  >
                    {pagesContent.home.description}
                  </motion.p>
                  {/* Animate Button Group */}
                  <motion.div
                    className="flex pt-6 gap-2 sm:gap-4 flex-col sm:flex-row"
                    variants={fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.2 }}
                  >
                    <PrimaryButton href="/projects" text="View my projects" />
                    <SecondaryButton href="/blog" text="Read all posts" />
                    <AccentButton
                      href="/quarto-learn"
                      text="Learn data science →"
                    />
                  </motion.div>
                  {/* Animate Social Links Group */}
                  <motion.div
                    className="mt-6 flex gap-6"
                    variants={fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.3 }}
                  >
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
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Animate the second major section */}
          <motion.div
            className="sm:px-8 mt-24 md:mt-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }} // Delay this whole section slightly
          >
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    {/* Animate Post List with Stagger */}
                    <motion.ul
                      className="flex flex-col gap-16"
                      initial="initial" // Use initial state defined in variants (though handled by stagger parent)
                      animate="animate" // Use animate state defined in variants
                      variants={staggerContainer} // Apply stagger effect
                    >
                      {latestPosts.map((post) => (
                        // Animate each list item
                        <motion.li key={post.slug} variants={fadeInUp}>
                          <LatestPostItem
                            slug={post.slug}
                            title={post.title}
                            date={post.date}
                            description={post.description ?? ""}
                          />
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Animate the right column container */}
                    <motion.div
                      className="space-y-10 lg:pl-16 xl:pl-24"
                      initial="initial"
                      animate="animate"
                      variants={staggerContainer} // Stagger the items inside
                      transition={{ delayChildren: 0.2 }} // Delay children slightly
                    >
                      {/* Animate each component within the right column */}
                      <motion.div variants={fadeInUp}>
                        <NewsletterForm />
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <EducationHistory />
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <WorkExperience />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}

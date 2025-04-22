"use client";

import React from "react";
import Image from "next/image";
import profileImage from "@/public/profile_img.jpg";
import { siteConfig } from "@/config/site";
import { Icons } from "@/app/components/site-icons";
import { pagesContent } from "@/data/siteContent";

// export const metadata: Metadata = {
//   title: "About Isaac Adoboe",
//   description:
//     "Learn more about Isaac Adoboe, a Christian, a curious soul, and an unapologetic life explorer based in Canada.",
// };

// const AboutPage = () => {
//   return (
//     <div className="w-full flex min-h-dvh">
//       <div className="relative flex w-full flex-col">
//         <main className="flex-auto">
//           <div className="sm:px-8 mt-10 sm:mt-20">
//             <div className="mx-auto w-full max-w-7xl lg:px-8">
//               <div className="relative px-4 sm:px-8 lg:px-12">
//                 <div className="mx-auto max-w-2xl lg:max-w-5xl">
//                   <div className="grid grid-cols-1 gap-y-16 pt-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
//                     <div className="lg:pl-20 pt-6">
//                       <div className="max-w-xs px-2.5 lg:max-w-none">
//                         <Image
//                           src={profileImage}
//                           width={400}
//                           height={400}
//                           alt="Photo of Isaac Adoboe"
//                           className="aspect-square grayscale rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
//                         />
//                       </div>
//                     </div>
//                     <div className="lg:order-first lg:row-span-2">
//                       <h1 className="text-4xl text-pretty font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
//                         {pagesContent.about.header}
//                       </h1>
//                       <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty">
//                         {pagesContent.about.p1}
//                       </p>
//                       <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty">
//                         {pagesContent.about.p2}
//                       </p>
//                       <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty">
//                         {pagesContent.about.p3}
//                       </p>
//                       <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty">
//                         {pagesContent.about.p4}
//                       </p>
//                     </div>
//                     <div className="lg:pl-20">
//                       <ul role="list">
//                         <li className="mt-4 flex">
//                           <a
//                             className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
//                             href={siteConfig.links.linkedin}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <Icons.linkedin />
//                             <span className="ml-4">Follow on LinkedIn</span>
//                           </a>
//                         </li>
//                         <li className="mt-4 flex">
//                           <a
//                             className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
//                             href={siteConfig.links.twitter}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <Icons.twitter />
//                             <span className="ml-4">Follow on X</span>
//                           </a>
//                         </li>
//                         <li className="mt-4 flex">
//                           <a
//                             className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
//                             href={siteConfig.links.github}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <Icons.github />
//                             <span className="ml-4">Follow on GitHub</span>
//                           </a>
//                         </li>
//                         <li className="mt-4 flex">
//                           <a
//                             className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
//                             href={siteConfig.links.vsco}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <Icons.vsco />
//                             <span className="ml-4">Check out VSCO</span>
//                           </a>
//                         </li>

//                         <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
//                           <a
//                             className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
//                             href="mailto:ikeadoboe1@gmail.com"
//                           >
//                             <svg
//                               viewBox="0 0 24 24"
//                               aria-hidden="true"
//                               className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
//                             >
//                               <path
//                                 fillRule="evenodd"
//                                 d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
//                               ></path>
//                             </svg>
//                             <span className="ml-4">Send me an email</span>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

// ("use client");

// import React from "react";
// import Image from "next/image";
// import profileImage from "@/public/profile_img.jpg";
// import { siteConfig } from "@/config/site";
// import { Icons } from "@/app/components/site-icons";
// import { pagesContent } from "@/data/siteContent";
import { motion } from "framer-motion";

// Note: metadata needs to be in a separate file for client components in Next.js 13+
// The metadata is kept in the page.tsx file, and this component would be imported there

const AboutPage = () => {
  // Physics-based animation variants
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
      mass: 1,
    },
  };

  // Container for staggered children animations
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Subtle hover animation for links
  const linkHoverVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-full flex min-h-dvh">
      <div className="relative flex w-full flex-col">
        <main className="flex-auto">
          <div className="sm:px-8 mt-10 sm:mt-20">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="grid grid-cols-1 gap-y-16 pt-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <motion.div
                      className="lg:pl-20 pt-6"
                      initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3,
                      }}
                    >
                      <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                          src={profileImage}
                          width={400}
                          height={400}
                          alt="Photo of Isaac Adoboe"
                          className="aspect-square grayscale rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="lg:order-first lg:row-span-2"
                      variants={containerVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <motion.h1
                        className="text-4xl text-pretty font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
                        variants={fadeInUp}
                      >
                        {pagesContent.about.header}
                      </motion.h1>
                      <motion.p
                        className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty"
                        variants={fadeInUp}
                      >
                        {pagesContent.about.p1}
                      </motion.p>
                      <motion.p
                        className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty"
                        variants={fadeInUp}
                      >
                        {pagesContent.about.p2}
                      </motion.p>
                      <motion.p
                        className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty"
                        variants={fadeInUp}
                      >
                        {pagesContent.about.p3}
                      </motion.p>
                      <motion.p
                        className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty"
                        variants={fadeInUp}
                      >
                        {pagesContent.about.p4}
                      </motion.p>
                    </motion.div>

                    <motion.div
                      className="lg:pl-20"
                      variants={containerVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delayChildren: 0.6, staggerChildren: 0.1 }}
                    >
                      <motion.ul role="list" variants={fadeIn}>
                        <motion.li className="mt-4 flex" variants={fadeInUp}>
                          <motion.a
                            whileHover="hover"
                            initial="initial"
                            className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icons.linkedin />
                            <motion.span
                              className="ml-4"
                              variants={linkHoverVariants}
                            >
                              Follow on LinkedIn
                            </motion.span>
                          </motion.a>
                        </motion.li>

                        <motion.li className="mt-4 flex" variants={fadeInUp}>
                          <motion.a
                            whileHover="hover"
                            initial="initial"
                            className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icons.twitter />
                            <motion.span
                              className="ml-4"
                              variants={linkHoverVariants}
                            >
                              Follow on X
                            </motion.span>
                          </motion.a>
                        </motion.li>

                        <motion.li className="mt-4 flex" variants={fadeInUp}>
                          <motion.a
                            whileHover="hover"
                            initial="initial"
                            className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icons.github />
                            <motion.span
                              className="ml-4"
                              variants={linkHoverVariants}
                            >
                              Follow on GitHub
                            </motion.span>
                          </motion.a>
                        </motion.li>

                        <motion.li className="mt-4 flex" variants={fadeInUp}>
                          <motion.a
                            whileHover="hover"
                            initial="initial"
                            className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={siteConfig.links.vsco}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icons.vsco />
                            <motion.span
                              className="ml-4"
                              variants={linkHoverVariants}
                            >
                              Check out VSCO
                            </motion.span>
                          </motion.a>
                        </motion.li>

                        <motion.li
                          className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex"
                          variants={fadeInUp}
                        >
                          <motion.a
                            whileHover="hover"
                            initial="initial"
                            className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href="mailto:ikeadoboe1@gmail.com"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                              ></path>
                            </svg>
                            <motion.span
                              className="ml-4"
                              variants={linkHoverVariants}
                            >
                              Send me an email
                            </motion.span>
                          </motion.a>
                        </motion.li>
                      </motion.ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;

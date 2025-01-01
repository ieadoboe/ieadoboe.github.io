import React from "react";
import Image from "next/image";
import profileImage from "../../public/profile_img.jpg";
import { Icons } from "../components/Icons";
import { siteConfig } from "@/config/site";

const AboutPage = () => {
  return (
    <div className="w-full flex min-h-screen">
      <div className="relative flex w-full flex-col">
        <main className="flex-auto">
          <div className="sm:px-8 mt-16 sm:mt-32">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="grid grid-cols-1 gap-y-16 pt-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20 pt-6">
                      <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                          src={profileImage}
                          width={400}
                          height={400}
                          alt="Photo of Isaac Adoboe"
                          className="aspect-square grayscale rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                      </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                      <h1 className="text-4xl text-pretty font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I am Isaac Edem Adoboe.
                      </h1>
                      <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty">
                        I’m a Christian, a curious soul and an unapologetic life
                        explorer based in Canada. My life is a tapestry of
                        diverse passions, quirky adventures, and a relentless
                        thirst for discovery. My faith is the foundation of
                        everything I do, grounding me and inspiring the way I
                        live, dream, and connect with others.
                      </p>
                      <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty">
                        At my core, I’m the guy who can lose track of time
                        debating whether jollof rice needs to go with some stew
                        on top (spoiler: it does) or attempting to perfect the
                        spiciest groundnut soup recipe known to humankind. When
                        I’m not experimenting in the kitchen, you’ll probably
                        find me glued to the screen, cheering for my favorite
                        teams in soccer (The Reds - Liverpool FC), basketball
                        (Clutch City - Houston Rockets), or Formula 1 (The
                        Prancing Horse - Scuderia Ferrari)—because who doesn’t
                        love a good adrenaline rush?
                      </p>
                      <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty">
                        I’ve got a thing for capturing the beauty of life, one
                        frame at a time, through photography. Whether it’s a
                        candid street shot or a breathtaking landscape, I’m
                        always chasing that perfect moment. And when I’m not
                        behind the lens, I’m curating travel dreams on Airbnb,
                        pinning creative inspiration on Pinterest, or cooking up
                        something unconventional (both literally and
                        figuratively) on my YouTube playlist.
                      </p>
                      <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-pretty">
                        As much as I love the thrill of adventure, I also have a
                        soft spot for meaningful conversations. Whether it’s
                        about the latest tech trends, the philosophy of
                        happiness, or just sharing stories over a cup of coffee,
                        I believe the best moments in life are the ones we
                        create with others.
                      </p>
                    </div>
                    <div className="lg:pl-20">
                      <ul role="list">
                        <li className="mt-4 flex">
                          <a
                            className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icons.linkedin />
                            <span className="ml-4">Follow on LinkedIn</span>
                          </a>
                        </li>
                        <li className="mt-4 flex">
                          <a
                            className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icons.twitter />
                            <span className="ml-4">Follow on X</span>
                          </a>
                        </li>
                        <li className="mt-4 flex">
                          <a
                            className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icons.github />
                            <span className="ml-4">Follow on GitHub</span>
                          </a>
                        </li>
                        <li className="mt-4 flex">
                          <a
                            className="group flex text-sm items-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={siteConfig.links.vsco}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icons.vsco />
                            <span className="ml-4">Check out VSCO</span>
                          </a>
                        </li>

                        <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                          <a
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
                            <span className="ml-4">Send me an email</span>
                          </a>
                        </li>
                      </ul>
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
};

export default AboutPage;

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 flex-none">
      <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <Link
                  key="home"
                  href="/"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                >
                  Home
                </Link>
                <Link
                  key="about"
                  href="/about"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                >
                  About
                </Link>
                <Link
                  key="blog"
                  href="/blog"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                >
                  Articles
                </Link>

                {/* <Link
                  key="products"
                  href="/products"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                >
                  Products
                </Link> */}
                <Link
                  key="projects"
                  href="/projects"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                >
                  Projects
                </Link>
                <Link
                  key="spotify"
                  href="/spotify"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                >
                  Spotify
                </Link>
              </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                © {new Date().getFullYear()} - Powered by God. All rights reserved.
                </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

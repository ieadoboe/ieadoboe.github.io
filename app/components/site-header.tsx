"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Icons } from "./site-icons";
import { motion, AnimatePresence } from "framer-motion";
import { NewsletterProvider } from "./newsletter-popup";
import JoinNewsletter from "./newsletter-join";

const Navbar = () => {
  // Calculate height to handle iOS Safari issues with vh units
  const [windowHeight, setWindowHeight] = useState("100vh");

  useEffect(() => {
    const setHeight = () => {
      setWindowHeight(`${window.innerHeight}px`);
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/70 dark:bg-zinc-900/70 flex-none transition-colors duration-500 lg:z-50 border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] border-zinc-200 dark:border-zinc-800">
      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-8 lg:px-16">
        <div className="px-2 py-4 sm:px-8">
          <div className="flex justify-between items-center">
            {/* Navbar Start */}
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  width={40}
                  alt="logo of a stick man holding a beer"
                  priority
                  className="rounded-full"
                />
                <p className="text-xl tracking-tighter text-zinc-900 dark:text-zinc-100 pl-2">
                  Isaac
                  <strong>
                    <em className="font-extrabold">A.&reg;</em>
                  </strong>
                </p>
              </Link>
            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="hidden md:flex items-center rounded-full shadow-md bg-zinc-0 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-6 py-2">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link
                    href="/"
                    className={`font-semibold rounded-full hover:text-teal-500 transition ${
                      isActive("/") ? "text-teal-500" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`font-semibold rounded-full hover:text-teal-500 transition ${
                      isActive("/blog") ? "text-teal-500" : ""
                    }`}
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className={`font-semibold rounded-full hover:text-teal-500 transition ${
                      isActive("/projects") ? "text-teal-500" : ""
                    }`}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quarto-learn"
                    className={`font-semibold rounded-full hover:text-teal-500 transition flex items-center ${
                      isActive("/quarto-learn") ? "text-teal-500" : ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="currentColor"
                      className="ml-1"
                      aria-hidden="true"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`font-semibold rounded-full hover:text-teal-500 transition ${
                      isActive("/about") ? "text-teal-500" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li className="relative">
                  <Popover>
                    <PopoverButton className="font-semibold hover:text-teal-500 transition focus:outline-none">
                      More
                    </PopoverButton>
                    <PopoverPanel
                      transition
                      className="absolute z-10 mt-4 w-38 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg bg-white dark:bg-zinc-800 dark:border dark:border-zinc-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="p-1">
                        <Link
                          href="/airbnb"
                          className="block px-4 py-2 font-semibold rounded-lg text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-teal-500 transition-colors"
                        >
                          Airbnb
                        </Link>
                        <Link
                          href="/spotify"
                          className="block px-4 py-2 font-semibold rounded-lg text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-teal-500 transition-colors"
                        >
                          Spotify
                        </Link>
                      </div>
                    </PopoverPanel>
                  </Popover>
                </li>
              </ul>
            </div>

            {/* Navbar End */}
            <NewsletterProvider>
              <JoinNewsletter />
            </NewsletterProvider>

            {/* Hamburger Menu Button - Improved for accessibility */}
            <div className="md:hidden">
              <button
                className="flex items-center justify-center w-10 h-10 text-zinc-600 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 z-50"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">
                  {isMenuOpen ? "Close menu" : "Open menu"}
                </span>
                {isMenuOpen ? (
                  <Icons.menuclose aria-hidden="true" className="text-white" />
                ) : (
                  <Icons.menuhamburg aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden fixed inset-0 z-50 bg-teal-800 flex flex-col justify-center px-6"
            style={{ height: windowHeight }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button for full-screen menu */}
            <div className="absolute top-4 right-4">
              <button
                className="p-3 text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <Icons.menuclose aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="flex items-center justify-center w-full"
            >
              <ul className="flex flex-col space-y-8 text-white text-center w-full max-w-xs">
                <li>
                  <Link
                    href="/"
                    className={`block text-2xl font-bold text-zinc-100 hover:text-teal-300 transition ${
                      isActive("/") ? "text-teal-300" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`block text-2xl font-bold text-zinc-100 hover:text-teal-300 transition ${
                      isActive("/blog") ? "text-teal-300" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className={`block text-2xl font-bold text-zinc-100 hover:text-teal-300 transition ${
                      isActive("/projects") ? "text-teal-300" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    href="/quarto-learn"
                    className={`block text-2xl font-bold text-zinc-100 hover:text-teal-300 transition ${
                      isActive("/quarto-learn") ? "text-teal-300" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center">
                      Learn
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16px"
                        viewBox="0 -960 960 960"
                        width="16px"
                        fill="currentColor"
                        className="ml-2"
                        aria-hidden="true"
                      >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`block text-2xl font-bold text-zinc-100 hover:text-teal-300 transition ${
                      isActive("/about") ? "text-teal-300" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/spotify"
                    className={`block text-2xl font-bold text-zinc-100 hover:text-teal-300 transition ${
                      isActive("/spotify") ? "text-teal-300" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Spotify
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

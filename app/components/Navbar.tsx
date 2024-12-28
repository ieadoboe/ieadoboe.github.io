"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logoLight from "../../public/logoN.svg";
import logoDark from "../../public/logoDark.svg";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu on Escape key
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

  return (
    <div className="fixed top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 border-b  lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 ">
      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-8 lg:px-16">
        <div className="px-2 py-4 sm:px-8">
          <div className="flex justify-between items-center">
            {/* Navbar Start */}
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src={logoLight}
                  width={170}
                  height={43}
                  alt="Logo"
                  className="dark:hidden"
                />
                <Image
                  src={logoDark}
                  width={156}
                  height={27}
                  alt="Logo"
                  className="hidden dark:block"
                />
              </Link>
            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="hidden md:flex items-center rounded-full shadow-md bg-zinc-0 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-6 py-2">
              <ul className="flex space-x-6 text-sm">
                <li className="relative">
                  <details className="group">
                    <summary className="font-semibold cursor-pointer rounded-full hover:text-teal-500 focus:outline-none transition">
                      About
                    </summary>
                    <ul className="hidden group-open:block mt-4 p-2 space-y-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg absolute left-0 w-40">
                      <li>
                        <Link
                          href="/story"
                          className="block px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          My Story
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/spotify"
                          className="block px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          Spotify
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products"
                          className="block px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          Products
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="font-semibold rounded-full hover:text-teal-500 transition"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="font-semibold rounded-full hover:text-teal-500 transition"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn"
                    className="font-semibold rounded-full hover:text-teal-500 transition"
                  >
                    Learn
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navbar End */}
            <div className="hidden md:flex">
              <Link
                href="/contact"
                className="font-semibold text-sm rounded-full px-4 py-2 bg-teal-500 text-white hover:bg-teal-600 transition"
              >
                Contact
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="flex items-center justify-center w-10 h-10 text-zinc-600 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Open Menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      <div
        className={`lg:hidden absolute inset-0 z-40 bg-teal-800 p-4 h-fit transition-transform transform hidden`}
        ref={menuRef}
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <div className="flex justify-end">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(false)} // Close menu
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-6 text-white">
          <li>
            <Link
              href="/about"
              className="block text-2xl font-bold text-zinc-100 hover:text-teal-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block text-2xl font-bold text-zinc-100 hover:text-teal-500"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="block text-2xl font-bold text-zinc-100 hover:text-teal-500"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/learn"
              className="block text-2xl font-bold text-zinc-100 hover:text-teal-500"
            >
              Learn
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-2xl font-bold text-zinc-100 hover:text-teal-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

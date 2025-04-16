"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Icons } from "./site-icons";
import { motion, AnimatePresence } from "framer-motion";
import { NewsletterProvider } from "./newsletter-popup";
import JoinNewsletter from "./newsletter-join";

// Helper function to find focusable elements
const getFocusableElements = (parent: HTMLElement | null): HTMLElement[] => {
  if (!parent) return [];
  return Array.from(
    parent.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(
    (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
  ) as HTMLElement[];
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close menu when route changes
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent scrolling and handle focus trapping/escape key when menu is open
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      } else if (event.key === "Tab") {
        // Focus Trapping Logic
        const focusableElements = getFocusableElements(menuRef.current);
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);

      // Store the element focused before opening the menu
      const previousFocusedElement = document.activeElement as HTMLElement;

      // Focus the first focusable element in the menu (e.g., the close button)
      requestAnimationFrame(() => {
        // Use rAF to ensure elements are rendered
        const focusableElements = getFocusableElements(menuRef.current);
        focusableElements[0]?.focus();
      });

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleKeyDown);
        // Return focus to the trigger button when menu closes
        previousFocusedElement?.focus();
      };
    } else {
      // Ensure overflow is unset if component unmounts while open
      document.body.style.overflow = "unset";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isMenuOpen]);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Menu animation variants
  const backdropVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const panelVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/70 dark:bg-zinc-900/70 flex-none transition-colors duration-500 lg:z-50 border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] border-zinc-200 dark:border-zinc-800">
        <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-8 lg:px-16">
          <div className="px-2 py-4 sm:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center" onClick={closeMenu}>
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
                    <em className="font-extrabold">A.®</em>
                  </strong>
                </p>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center rounded-full shadow-md bg-zinc-0 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-6 py-2">
                {/* Desktop links... (same as before) */}
                <ul className="flex space-x-6 text-sm">
                  {/* ... your desktop menu items ... */}
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

              {/* Newsletter (Desktop) */}
              <div className="hidden md:block">
                <NewsletterProvider>
                  <JoinNewsletter />
                </NewsletterProvider>
              </div>

              {/* Hamburger Menu Button */}
              <div className="md:hidden">
                <button
                  ref={triggerRef} // Add ref to the trigger button
                  className="flex items-center justify-center p-2 text-zinc-600 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu-panel" // Controls the panel
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  onClick={toggleMenu}
                >
                  <span className="sr-only">
                    {isMenuOpen ? "Close menu" : "Open menu"}
                  </span>
                  {/* Animated Icon (Optional but nice) */}
                  <motion.div
                    animate={isMenuOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                      open: { rotate: 90 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? (
                      <Icons.menuclose className="w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Icons.menuhamburg
                        className="w-6 h-6"
                        aria-hidden="true"
                      />
                    )}
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              aria-hidden="true"
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={closeMenu} // Close menu when clicking backdrop
            />

            {/* Menu Panel */}
            <motion.div
              ref={menuRef} // Add ref to the menu container
              id="mobile-menu-panel"
              role="dialog" // Use role="dialog" for modal behavior
              aria-modal="true" // Indicate it's a modal dialog
              aria-label="Mobile Navigation Menu" // Label the dialog
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-zinc-900 shadow-xl md:hidden flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={panelVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between px-4 py-5 border-b border-zinc-200 dark:border-zinc-700">
                {/* Optional: Logo inside menu */}
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={closeMenu}
                >
                  <Image
                    src={logo}
                    width={32} // Slightly smaller inside menu
                    alt="logo of a stick man holding a beer"
                    priority
                    className="rounded-full"
                  />
                  <p className="text-lg tracking-tighter text-zinc-900 dark:text-zinc-100 pl-2">
                    Isaac
                    <strong>
                      <em className="font-extrabold">A.®</em>
                    </strong>
                  </p>
                </Link>

                <button
                  className="p-2 text-zinc-500 dark:text-zinc-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <Icons.menuclose className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav
                className="flex-1 px-4 py-6 overflow-y-auto"
                aria-label="Mobile navigation"
              >
                <ul className="flex flex-col space-y-1">
                  {/* Use slightly smaller text, consistent padding/hover */}
                  {[
                    { href: "/", label: "Home" },
                    { href: "/blog", label: "Articles" },
                    { href: "/projects", label: "Projects" },
                    { href: "/quarto-learn", label: "Learn", external: true },
                    { href: "/about", label: "About" },
                    { href: "/airbnb", label: "Airbnb" }, // Added Airbnb here for consistency
                    { href: "/spotify", label: "Spotify" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className={`flex items-center justify-start px-3 py-3 text-base font-medium rounded-md transition-colors duration-150 ${
                          isActive(item.href)
                            ? "bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                        }`}
                        onClick={closeMenu}
                      >
                        {item.label}
                        {item.external && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="14px"
                            viewBox="0 -960 960 960"
                            width="14px"
                            fill="currentColor"
                            className="ml-1.5 opacity-70"
                            aria-hidden="true"
                          >
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                          </svg>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Newsletter (Mobile) - Placed at bottom for better reach */}
              <div className="p-4 mt-auto border-t border-zinc-200 dark:border-zinc-700">
                <NewsletterProvider>
                  <JoinNewsletter />
                </NewsletterProvider>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

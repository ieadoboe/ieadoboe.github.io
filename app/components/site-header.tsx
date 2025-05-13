"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Icons } from "./site-icons";
import { motion } from "framer-motion";
import { NewsletterProvider } from "./newsletter-popup";
import JoinNewsletter from "./newsletter-join";
import MobileMenu from "./mobile-menu"; // Import the new component
import ThemeToggle from "./theme-toggle"; // Import the ThemeToggle component

// Define type for navigation items
interface NavItem {
  href: string;
  label: string;
  external?: boolean; // Optional external link flag
}

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

  // Define navigation items centrally
  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Articles" },
    { href: "/projects", label: "Projects" },
    { href: "/quarto-learn", label: "Learn", external: true },
    { href: "/about", label: "About" },
  ];

  const moreMenuItems: NavItem[] = [
    // { href: "/airbnb", label: "Airbnb" },
    { href: "/spotify", label: "Spotify" },
  ];

  // Combine main nav and more items for the mobile menu
  const mobileNavItems: NavItem[] = [
    ...navItems.slice(0, 4),
    ...moreMenuItems,
    navItems[4],
  ]; // Keep 'About' last visually

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
                    <em className="font-extrabold">Adoboe.®</em>
                  </strong>
                </p>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center rounded-full shadow-md bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-6 py-2">
                <ul className="flex space-x-6 text-sm text-zinc-800 dark:text-zinc-200">
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
                      <PopoverButton className="font-semibold text-zinc-800 dark:text-zinc-200 hover:text-teal-500 transition focus:outline-none">
                        More
                      </PopoverButton>
                      <PopoverPanel
                        transition
                        className="absolute z-10 mt-4 w-38 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg bg-white dark:bg-zinc-800 dark:border dark:border-zinc-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="p-1">
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
              <div className="hidden lg:flex items-center space-x-3">
                <ThemeToggle />
                <NewsletterProvider>
                  <JoinNewsletter />
                </NewsletterProvider>
              </div>

              {/* Hamburger Menu Button */}
              <div className="lg:hidden flex items-center">
                <ThemeToggle />
                <button
                  ref={triggerRef}
                  className="ml-3 flex items-center justify-center p-2 text-zinc-600 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu-panel"
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

      {/* Render the extracted MobileMenu component */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navItems={mobileNavItems}
        isActive={isActive}
      />
    </>
  );
};

export default Navbar;

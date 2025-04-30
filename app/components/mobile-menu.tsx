"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./site-icons";
import { NewsletterProvider } from "./newsletter-popup";
import JoinNewsletter from "./newsletter-join";
import logo from "../../public/logo.png";

// Define type for navigation items (can be shared or redefined if preferred)
interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  isActive: (path: string) => boolean;
}

// Helper function to find focusable elements (copied from site-header)
// Consider extracting this to a shared utils file if used elsewhere
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

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  isActive,
}) => {
  const menuRef = useRef<HTMLDivElement>(null); // Ref for focus trapping

  // Focus trapping and Escape key logic (similar to site-header, adapted for props)
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "Tab") {
        const focusableElements = getFocusableElements(menuRef.current);
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      document.addEventListener("keydown", handleKeyDown);

      // Focus the first focusable element (e.g., the close button) when opened
      requestAnimationFrame(() => {
        const focusableElements = getFocusableElements(menuRef.current);
        // Find the close button specifically if possible, otherwise first element
        const closeButton = menuRef.current?.querySelector(
          'button[aria-label="Close menu"]'
        ) as HTMLElement | null;
        (closeButton || focusableElements[0])?.focus();
      });

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleKeyDown);
        // Focus is handled by site-header returning focus to the trigger
      };
    } else {
      document.body.style.overflow = "unset"; // Ensure reset if closed unexpectedly
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  // Animation variants (copied from site-header)
  const backdropVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const panelVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            transition={{ duration: 0.5, ease: "backInOut" }}
            onClick={onClose} // Use onClose prop
          />

          {/* Menu Panel */}
          <motion.div
            ref={menuRef}
            id="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-zinc-900 shadow-xl lg:hidden flex flex-col overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={panelVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-4 py-5 border-b border-zinc-200 dark:border-zinc-700">
              <Link href="/" className="flex items-center" onClick={onClose}>
                <Image
                  src={logo}
                  width={32}
                  alt="logo of a stick man holding a beer"
                  priority
                  className="rounded-full"
                />
                <p className="text-lg tracking-tighter text-zinc-900 dark:text-zinc-100 pl-2">
                  Isaac
                  <strong>
                    <em className="font-extrabold">Adoboe.®</em>
                  </strong>
                </p>
              </Link>
              <button
                className="p-2 text-zinc-500 dark:text-zinc-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                onClick={onClose} // Use onClose prop
                aria-label="Close menu"
              >
                <Icons.menuclose className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-4 py-6" aria-label="Mobile navigation">
              <ul className="flex flex-col space-y-1">
                {navItems.map(
                  (
                    item // Use navItems prop
                  ) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className={`flex items-center justify-start px-3 py-3 text-base font-medium rounded-md transition-colors duration-150 ${
                          isActive(item.href) // Use isActive prop
                            ? "bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                        }`}
                        onClick={onClose} // Use onClose prop
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
                  )
                )}
              </ul>
            </nav>

            {/* Newsletter (Mobile) */}
            <div className="p-4 mt-auto border-t border-zinc-200 dark:border-zinc-700">
              <NewsletterProvider>
                <JoinNewsletter />
              </NewsletterProvider>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

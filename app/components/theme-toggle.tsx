"use client";

import React from "react";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  // Simplified toggle that always cycles between light and dark
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full shadow-md border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 fill-zinc-800 dark:fill-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } theme`}
    >
      <span className="sr-only">
        {resolvedTheme === "dark" ? "Light" : "Dark"} mode
      </span>

      {resolvedTheme === "dark" ? (
        // Sun icon for dark mode (clicking will switch to light)
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-100"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.svg>
      ) : (
        // Moon icon for light mode (clicking will switch to dark)
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, rotate: 30 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-900"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      )}
    </button>
  );
};

export default ThemeToggle;

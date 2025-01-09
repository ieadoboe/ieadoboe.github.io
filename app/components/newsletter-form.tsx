"use client";

import React, { useState, FormEvent } from "react";
import { Icons } from "./site-icons";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) { // Basic email validation
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      // Call an API endpoint to save the email
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setStatus("Thanks for subscribing!");
        setEmail(""); 
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <Icons.newslettermail />
          <span className="ml-3">Stay up to date</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>
        <div className="mt-6 flex">
          <input
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
            placeholder="Email address"
            aria-label="Email address"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
            type="submit"
          >
            Join
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{status}</p>}
    </div>
  );
};

export default NewsletterForm;
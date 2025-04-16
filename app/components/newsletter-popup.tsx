"use client";

import React, { useState, FormEvent } from "react";
import { Icons } from "./site-icons";

// Creating a context to manage the popup visibility across components
import { createContext, useContext } from "react";

// Create context with a setter function
type NewsletterContextType = {
  openNewsletterPopup: () => void;
};

export const NewsletterContext = createContext<NewsletterContextType>({
  openNewsletterPopup: () => {},
});

// Hook to use the newsletter context
export const useNewsletterPopup = () => useContext(NewsletterContext);

// Provider component
export const NewsletterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const openNewsletterPopup = () => {
    setPopupVisible(true);
  };

  return (
    <NewsletterContext.Provider value={{ openNewsletterPopup }}>
      {children}
      {popupVisible && (
        <NewsletterPopup onClose={() => setPopupVisible(false)} />
      )}
    </NewsletterContext.Provider>
  );
};

// The popup component itself
const NewsletterPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [statusVisible, setStatusVisible] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      // Basic email validation
      setStatus("Please enter a valid email.");
      setStatusVisible(true);
      return;
    }

    try {
      const res = await fetch(
        "https://reimagined-umbrella-api.vercel.app/api/subscribe",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        setStatus("Thanks for subscribing!");
        setEmail(""); // Clear the email input field after successful subscription
        // Save subscription status to localStorage
        localStorage.setItem("newsletter_subscribed", "true");
        // Close popup after successful subscription (optional)
        setTimeout(() => onClose(), 3000);
      } else {
        const errorData = await res.json();
        setStatus(
          errorData?.message || "Something went wrong. Please try again."
        );
      }
      setStatusVisible(true);
    } catch (error) {
      setStatus("Network error. Please try again.");
      console.error(error);
      setStatusVisible(true);
    }
  };

  // Use the provided onClose function

  return (
    <div
      className="fixed left-0 top-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      style={{ position: "fixed", width: "100vw", height: "100vh" }}
    >
      <div
        className="absolute bg-white dark:bg-zinc-800 rounded-xl shadow-2xl w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 mx-4 sm:mx-auto animate-fadeIn"
        style={{ maxHeight: "90vh", overflow: "auto" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <h2 className="flex items-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              <Icons.newslettermail />
              <span className="ml-3">Join My Newsletter</span>
            </h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Get monthly updates on the latest insights, and unsubscribe at any
              time.
            </p>
            <div className="mt-6">
              <input
                className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                placeholder="Email address"
                aria-label="Email address"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="w-full mt-4 inline-flex items-center justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
                type="submit"
              >
                Subscribe Now
              </button>
            </div>
          </form>

          {/* Status message */}
          {statusVisible && (
            <div
              className={`mt-4 text-sm font-medium px-4 py-3 rounded-lg ${
                status === "Thanks for subscribing!"
                  ? "bg-teal-100 text-teal-800"
                  : status === "Please enter a valid email."
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
              } transition-all duration-300 ease-in-out`}
            >
              <p>{status}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;

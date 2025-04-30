"use client";

import React from "react";
import { useNewsletterPopup } from "./newsletter-popup";

const JoinNewsletter: React.FC = () => {
  const { openNewsletterPopup } = useNewsletterPopup();

  return (
    <div className="hidden sm:flex">
      <button
        onClick={openNewsletterPopup}
        className="font-semibold text-sm rounded-full px-4 py-2 bg-teal-500 text-white hover:bg-teal-600 transition"
      >
        Subscribe
      </button>
    </div>
  );
};

export default JoinNewsletter;

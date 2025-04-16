"use client";

import React from "react";
import { useNewsletterPopup } from "./newsletter-popup";

// This component replaces the original "Get in touch" button
const JoinNewsletter: React.FC = () => {
  const { openNewsletterPopup } = useNewsletterPopup();
  
  return (
    <div className="hidden md:flex">
      <button
        onClick={openNewsletterPopup}
        className="font-semibold text-sm rounded-full px-4 py-2 bg-teal-500 text-white hover:bg-teal-600 transition"
      >
        Join Newsletter
      </button>
    </div>
  );
};

export default JoinNewsletter;
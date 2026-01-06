"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function ImageLightbox({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
  width,
  height,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <>
      {/* Clickable Image */}
      <span
        className={`relative rounded-xl cursor-zoom-in group block ${className}`}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-xl block"
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-xl block"
            priority={priority}
          />
        )}

        {/* Zoom indicator overlay */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm inline-block">
            <svg
              className="h-5 w-5 text-zinc-900 dark:text-zinc-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </span>
        </span>
      </span>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-10"
            onClick={() => setIsOpen(false)}
            aria-label="Close lightbox"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Instructions */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md text-white text-xs z-10">
            Press{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-white/20 font-mono">
              ESC
            </kbd>{" "}
            or click outside to close
          </div>

          {/* Image container - Full viewport minus UI padding */}
          <div
            className="relative w-full h-full p-4 sm:p-8 lg:p-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Caption */}
          {alt && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-3xl px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md text-white text-sm text-center z-10">
              {alt}
            </div>
          )}
        </div>
      )}
    </>
  );
}

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Icons } from "./site-icons";
import Link from "next/link";

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

export default function QueryPagination({
  totalPages,
  className = "",
}: QueryPaginationProps) {
  const pathname = usePathname(); // No need to wrap with use()
  const searchParams = useSearchParams(); // No need to wrap with use()
  const currentPage = Math.max(Number(searchParams?.get("page")) || 1, 1);

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={`flex justify-center pt-10 ${className}`}>
      <div className="flex justify-between items-center space-x-2 font-semibold px-2 py-3 w-full max-w-5xl">
        {/* Previous Button */}
        <div className="flex-shrink-0">
          {currentPage > 1 && (
            <Link
              href={createPageURL(currentPage - 1)}
              className="inline-flex items-center justify-center space-x-1 py-2 px-3 sm:px-4 rounded-lg border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all text-sm sm:text-base"
              aria-label="Previous page"
            >
              <Icons.arrowcircleleft />
              <span>Prev</span>
            </Link>
          )}
        </div>

        {/* Page Numbers - Visible on larger screens only */}
        <div className="justify-center items-center flex-1 space-x-2 overflow-x-auto hidden sm:flex">
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <Link
                key={pageNumber}
                href={createPageURL(pageNumber)}
                className={`px-3 py-2 sm:px-4 rounded-lg ${
                  currentPage === pageNumber
                    ? "bg-teal-500 text-white"
                    : "text-zinc-600 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                } text-sm sm:text-base`}
                aria-current={currentPage === pageNumber ? "page" : undefined}
                aria-label={`Page ${pageNumber}`}
              >
                {pageNumber}
              </Link>
            );
          })}
        </div>

        {/* Next Button */}
        <div className="flex-shrink-0">
          {currentPage < totalPages && (
            <Link
              href={createPageURL(currentPage + 1)}
              className="inline-flex items-center justify-center space-x-1 py-2 px-3 sm:px-4 rounded-lg border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all text-sm sm:text-base"
              aria-label="Next page"
            >
              <span>Next</span>
              <Icons.arrowcircleright />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

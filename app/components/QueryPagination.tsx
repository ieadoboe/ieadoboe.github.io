"use client";

import { usePathname, useSearchParams } from "next/navigation";

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

export default function QueryPagination({
  totalPages,
  className = "",
}: QueryPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={`flex justify-center pt-20  ${className}`}>
      <div className="flex items-center space-x-2 font-semibold px-2 py-3 ">
        {/* Previous Page Button */}
        <a
          href={createPageURL(prevPage)}
          className={`py-2 px-4 rounded-lg ${
            currentPage === 1
              ? "hidden"
              : "text-zinc-600 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          }`}
          aria-disabled={currentPage === 1}
        >
          &lt; Prev
        </a>

        {/* Page Number Buttons */}
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <a
              key={pageNumber}
              href={createPageURL(pageNumber)}
              className={`px-4 py-2 rounded-lg hidden sm:inline-block ${
                currentPage === pageNumber
                  ? "bg-teal-500 text-white"
                  : "text-zinc-600 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              }`}
            >
              {pageNumber}
            </a>
          );
        })}

        {/* Next Page Button */}
        <a
          href={createPageURL(nextPage)}
          className={`py-2 px-4 rounded-lg ${
            currentPage === totalPages
              ? "hidden"
              : "text-zinc-600 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          }`}
          aria-disabled={currentPage === totalPages}
        >
          Next &gt;
        </a>
      </div>
    </div>
  );
}

"use client";

interface ReadingTimeIndicatorProps {
  readingTime?: string;
}

export default function ReadingTimeIndicator({ readingTime }: ReadingTimeIndicatorProps) {
  if (!readingTime) return null;

  // Extract minutes from reading time string (e.g., "5 min read" -> 5)
  const minutes = parseInt(readingTime.match(/\d+/)?.[0] || "0");
  
  // Calculate percentage for visual ring (cap at 20 min for visual purposes)
  const maxMinutes = 20;
  const percentage = Math.min((minutes / maxMinutes) * 100, 100);
  const circumference = 2 * Math.PI * 18; // radius is 18
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center gap-2 group">
      <div className="relative h-10 w-10">
        {/* Background circle */}
        <svg className="h-10 w-10 -rotate-90" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-zinc-200 dark:text-zinc-700"
          />
          {/* Progress circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-teal-500 dark:text-teal-400 transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>
        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="h-4 w-4 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wide font-medium">
          Read time
        </span>
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          {readingTime}
        </span>
      </div>
    </div>
  );
}


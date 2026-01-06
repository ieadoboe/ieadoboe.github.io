export default function ContentDivider() {
  return (
    <div className="relative my-12 sm:my-16">
      {/* Gradient Line */}
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />
      </div>
      {/* Decorative Center Element */}
      <div className="relative flex justify-center">
        <div className="bg-white dark:bg-zinc-900 px-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <div className="w-2 h-2 rounded-full bg-teal-600" />
          </div>
        </div>
      </div>
    </div>
  );
}


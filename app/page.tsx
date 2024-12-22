import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col  pb-20 sm:px-10">
      <Navbar />
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-8 text-center px-4">
        <div className="text-sm sm:text-base max-w-[30rem]">
          <p>
            Hey there! 👋 I’m Isaac, a Data Scientist, Analyst, and Innovator,
            passionate about transforming data into actionable insights 📊. I
            thrive on sharing knowledge—whether it’s through writing about data
            science or teaching others to unlock its potential 🔍✨.
          </p>
        </div>
        <div className="flex gap-4 sm:gap-8 flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/projects"
          >
            View my projects
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/blog"
          >
            Read my blog
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

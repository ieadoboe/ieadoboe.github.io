import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SecondaryButton from "./components/SecondaryButton";
import PrimaryButton from "./components/PrimaryButton";

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
          <PrimaryButton href="/projects" text="View my projects" />
          <SecondaryButton href="/blog" text="Read my blog" />
        </div>
      </div>
      <Footer />
      <div className="flex justify-center">
        "Do not go gentle into that good night" - Dylan Thomas
      </div>
    </div>
  );
}

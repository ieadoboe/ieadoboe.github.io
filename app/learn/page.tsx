import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LessonsList from "../components/LessonsList";

const LearnPage = () => {
  return (
    <div className="w-full flex min-h-screen">
      <div className="relative flex w-full flex-col">
        <div>
          <Navbar />
        </div>
        <main className="flex-auto">
          <div className="sm:px-8 mt-16 sm:mt-32">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <header className="max-w-2xl pt-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      The simplified data science learning journey
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                      I teach in ways i wished i was taught when i started
                      learning data science. It's not that hard, really.
                    </p>
                  </header>
                  <div className="mt-16 sm:mt-20">
                    <LessonsList />
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LearnPage;

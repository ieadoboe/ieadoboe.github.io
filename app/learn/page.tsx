import React from "react";
import LessonsList from "../components/lessons-list";

const LearnPage = () => {
  return (
    <div className="w-full flex min-h-dvh">
      <div className="relative flex w-full flex-col">
        <main className="flex-auto">
          <div className="sm:px-8 mt-10 sm:mt-20">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <header className="max-w-2xl pt-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      It&apos;s not that deep.
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                      {`Welcome to this data science adventure! Here’s a roadmap that will guide you from beginner to pro in a clear and practical way.`}
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
      </div>
    </div>
  );
};

export default LearnPage;

import React from "react";
import ProjectsList from "../components/projects-list";

const ProductsPage = () => {
  return (
    <div className="w-full flex min-h-screen">
      <div className="relative flex w-full flex-col">
        <main className="flex-auto">
          <div className="sm:px-8 mt-10 sm:mt-20">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <header className="max-w-2xl pt-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      Understanding and shaping the future of individuals and
                      society.
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                      Digging into data like a DJ spins records — blending stats
                      and machine learning to see how they groove with real
                      lives and shape the future. It’s all about turning numbers
                      into a beat that moves us forward through one question:
                      What does the data say?
                    </p>
                  </header>
                  <div className="mt-16 sm:mt-20">
                    <ProjectsList />
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

export default ProductsPage;

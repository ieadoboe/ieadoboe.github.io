import React from "react";
import AirbnbEmbed from "../components/site-airbnb";

const AirbnbPage = () => {
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
                      Book Your Stay 🏠
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                      A cheerful and heartfelt welcome to your stay at our
                      charming any of our apartments, nestled in the peaceful
                      confines of a safe gated estate. We&apos;re overjoyed to
                      have you indulge in the warm embrace of African culture
                      intertwined with rustic charm that adorns every corner of
                      our cozy abode. It&apos;s a delightful fusion where
                      comfort meets tradition, promising you an enchanting and
                      memorable experience.
                    </p>
                  </header>
                  <div className="mt-8 sm:mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <AirbnbEmbed uri="https://www.airbnb.ca/rooms/1066079155470641047?guests=1&adults=1&s=66&source=embed_widget" />
                      <AirbnbEmbed uri="https://www.airbnb.ca/rooms/1234161237694381659?guests=1&adults=1&s=66&source=embed_widget" />
                    </div>
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

export default AirbnbPage;

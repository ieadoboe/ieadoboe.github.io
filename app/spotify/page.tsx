import React from "react";
import SpotifyEmbed from "../components/site-spotify";

const SpotifyPage = () => {
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
                      Set the mood right 😉
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                      You need the right playlist to set the mood—whether you’re
                      working, relaxing, or chasing big dreams. Here are the
                      tracks that keep me inspired, focused, and vibing through
                      it all.
                    </p>
                  </header>
                  <div className="mt-8 sm:mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <SpotifyEmbed uri="playlist/37i9dQZF1DX5trt9i14X7j" />
                      <SpotifyEmbed uri="playlist/0kFx6ZQQGljgeYiZohc5l9" />
                      <SpotifyEmbed uri="playlist/4r2pzpM1kSZNA8nwtOV45l" />
                      <SpotifyEmbed uri="playlist/3G1XDKJCeRt6lvb2a73oLr" />
                      <SpotifyEmbed uri="playlist/4psxCKAHsBWOhXGzWJg23Z" />
                      <SpotifyEmbed uri="playlist/1Feh7gtcqgbjXcpwExa1lO" />
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

export default SpotifyPage;

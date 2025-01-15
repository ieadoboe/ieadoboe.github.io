import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import Navbar from "@/app/components/site-header";
import Footer from "@/app/components/site-footer";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "dark" },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-behavior-smooth scroll-pt-[4.5rem]">
      <head>
        <meta name="apple-mobile-web-app-title" content="IsaacA." />
        <meta name="theme-color" content="#14B8A6" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.20/dist/katex.min.css"
          integrity="sha384-sMefv1J1YJCHsg0mTa9YG+n/9KnJb9lGrJUUY5arg6bAL1qps/oZjmUwaHlX5Ugg"
          crossOrigin="anonymous"
        />
        <GoogleAnalytics gaId="G-VPE41GKSB9" />
      </head>
      <body
        className={`flex h-full bg-zinc-0 dark:bg-zinc-900 font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="relative flex w-full flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

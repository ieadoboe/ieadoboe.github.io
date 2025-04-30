import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import Navbar from "@/app/components/site-header";
import Footer from "@/app/components/site-footer";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@next/third-parties/google";
import StructuredData from "@/app/components/structured-data";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  keywords: [
    "data science",
    "web development",
    "portfolio",
    "blog",
    "Isaac Adoboe",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@ieadoboe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "dark" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
        {/* <meta name="theme-color" content="#14B8A6" /> */}
        <meta
          name="theme-color"
          content="#fffff"
          media="(prefers-color-scheme: light)"
        ></meta>
        <meta
          name="theme-color"
          content="#1C1D21"
          media="(prefers-color-scheme: dark)"
        ></meta>
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
        <StructuredData />
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

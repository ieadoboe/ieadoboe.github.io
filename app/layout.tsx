import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { siteConfig } from "@/config/site";

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
      <body
        className={`flex h-full bg-zinc-0 dark:bg-zinc-900 font-sans antialiased`}
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

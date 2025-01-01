import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Isaac Adoboe - Data Scientist, Analyst and Innovator",
  description: "Data Scientist, Analyst and Innovator",
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

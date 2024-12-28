import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`flex h-full bg-zinc-0 dark:bg-zinc-900 font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

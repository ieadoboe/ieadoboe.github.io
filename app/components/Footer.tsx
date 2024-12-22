import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pb-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/isaacedemadoboe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="window icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/learn"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn data science
        </Link>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:ikeadoboe1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Get in touch →
        </a>
      </footer>
    </div>
  );
};

export default Footer;

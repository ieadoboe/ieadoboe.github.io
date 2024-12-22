import React from "react";
import Image from "next/image";
import logoLight from "../../public/logo.svg";
import logoDark from "../../public/logoDark.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar dark:bg-base-900 py-4 px-6 w-full top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/projects"}>projects</Link>
            </li>
            <li>
              <Link href={"/blog"}>blog</Link>
            </li>
            <li>
              <Link href={"/learn"}>learn</Link>
            </li>
            <li>
              <a>about</a>
              <ul className="p-2">
                <li>
                  <Link href={"/story"}>my story</Link>
                </li>
                <li>
                  <Link href={"/spotify"}>spotify</Link>
                </li>
                <li>
                  <Link href={"/products"}>products</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href={"/"}>
          <Image
            src={logoLight} // Replace with the light mode logo path
            width={130 * 1.2}
            height={22.3 * 1.2}
            alt="Logo of Isaac Adoboe."
            className="dark:hidden" // Hide in dark mode
          />
          <Image
            src={logoDark} // Replace with the dark mode logo path
            width={130 * 1.2}
            height={22.3 * 1.2}
            alt="Logo of Isaac Adoboe."
            className="hidden dark:block" // Show in dark mode
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 pt-2 space-x-4">
          <li>
            <Link href={"/projects"} className="font-bold">
              projects
            </Link>
          </li>
          <li>
            <Link href={"/blog"} className="font-bold">
              blog
            </Link>
          </li>
          <li>
            <Link href={"/learn"} className="font-bold">
              learn
            </Link>
          </li>
          <li>
            <details>
              <summary className="font-bold">about</summary>
              <ul className="p-2">
                <li>
                  <Link href={"/story"}>my story</Link>
                </li>
                <li>
                  <Link href={"/spotify"}>spotify</Link>
                </li>
                <li>
                  <Link href={"/products"}>products</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

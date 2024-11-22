// src/components/Navbar.tsx
import Link from "next/link";
import styles from "@/styles/Navbar.module.css"; // We'll add some styles for the navbar

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { ReactElement } from "react";
import styles from 'components/Header/Header.module.scss';
import Link from "next/link";

export const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/blog">Blog</Link>
        <Link className={styles.link} href="/about">About</Link>
      </nav>
    </header>
  );
};

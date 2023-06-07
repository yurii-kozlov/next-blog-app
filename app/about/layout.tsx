import { ReactNode } from "react";
import styles from 'app/about/layout.module.scss';
import Link from "next/link";

export default function AboutLayout({
  children,
  parallelRouting
}: {
  children: ReactNode,
  parallelRouting: ReactNode
}) {
  return (
    <div className={styles.aboutLayout}>
      <h1 className={styles.title}>About us</h1>
      <ul className={styles.navList}>
        <li className={styles.navlistitem}>
          <Link className={styles.navlistitemLink} href="/about/contacts">
            Contacts
          </Link>
        </li>
        <li className={styles.navlistitem}>
          <Link className={styles.navlistitemLink} href="/about/team">
            Team
          </Link>
        </li>
      </ul>
      <div className={styles.wrapperForParallelRouter}>
        {parallelRouting}
      </div>
      {children}
    </div>
  )
}
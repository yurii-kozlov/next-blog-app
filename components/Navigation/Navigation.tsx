'use client';
import { NavLink } from "types/NavLink";
import { usePathname } from 'next/navigation';
import React from "react";
import Link from "next/link";
import cn from "classnames";
import styles from 'components/Navigation/Navigation.module.scss';

type NavigationProps = {
  navLinks: NavLink[];
}

export const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const pathName = usePathname();

  return (
    <nav className={styles.navigation}>
      {navLinks.map((navLink) => {
        const { label, href } = navLink;
        const isActive = pathName === href;

        return (
          <Link
            className={cn(
              styles.link,
              {[styles.activeLink]: isActive}
            )}
            href={href}
            key={label}
            >
            {label}
          </Link>
        )
      })}
  </nav>
  );
};

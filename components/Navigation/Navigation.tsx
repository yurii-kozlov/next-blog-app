'use client';
import { NavLink } from 'types/NavLink';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from 'components/Navigation/Navigation.module.scss';

type NavigationProps = {
  navLinks: NavLink[];
}

export const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const pathName = usePathname();
  const session = useSession();

  const handleSignOut = () => signOut({
    callbackUrl: '/'
  });

  return (
    <nav className={styles.block}>
      {navLinks.map((navLink) => {
        const { label, href } = navLink;
        const isActive = pathName === href;

        return (
          <Link
            className={cn(
              styles.link,
              { [styles.activeLink]: isActive }
            )}
            href={href}
            key={label}
          >
            {label}
          </Link>
        )
      })}
      {session.data && (
        <Link
          className={cn(
            styles.link,
            { [styles.activeLink]: pathName === '/profile' }
          )}
          href="/profile"
        >
          Profile
        </Link>
      )}
      {session.data ? (
        <button
          onClick={handleSignOut}
          className={styles.signOutButton}
        >
          Sign Out
        </button>
      ) : (
        <Link
          className={cn(
            styles.link,
            { [styles.activeLink]: pathName === '/signin' }
          )}
          href="/signin"
        >
          Sign In
        </Link>
      )}
    </nav>
  );
};

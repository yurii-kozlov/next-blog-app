'use client';

import { NavLink } from 'types/NavLink';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import styles from 'components/Navigation/Navigation.module.scss';
import { Cart } from '../Cart';

type NavigationProps = {
  navLinks: NavLink[];
}

export const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  const pathName = usePathname();
  const session = useSession();

  const handleSignOut = (): Promise<void> => signOut({
    callbackUrl: '/'
  });

  const handleCartVisibility = (): void => setIsCartVisible(!isCartVisible);

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
      {session.data && (
        <Link
          className={cn(
            styles.link,
            { [styles.activeLink]: pathName === '/products' }
          )}
          href="/products"
        >
          Products
        </Link>
      )}
      {session.data && (
        <div className={styles.cartAndCartButtonWrapper}>
          <button
            className={styles.cartButton}
            onClick={handleCartVisibility}
            type="button"
          >
            <FontAwesomeIcon
              className={styles.iconCart}
              color='#fff'
              icon={faCartShopping}
            />
          </button>
          <Cart isCartVisible={isCartVisible}/>
        </div>
      )}
      {session.data ? (
        <button
          className={styles.signOutButton}
          onClick={handleSignOut}
          type="button"
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

import { ReactElement } from 'react';
import { Navigation } from 'components/Navigation';
import { NavLink } from 'types/NavLink';
import styles from 'components/Header/Header.module.scss';

const navItems: NavLink [] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' }
]

export const Header = (): ReactElement => (
  <header className={styles.header}>
    <Navigation navLinks={navItems} />
  </header>
  );

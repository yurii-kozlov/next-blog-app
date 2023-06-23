import { ReactElement } from 'react';
import styles from 'components/Footer/Footer.module.scss';

export const Footer = (): ReactElement => (
  <footer className={styles.footer}>
    Created by &copy;Yurii Kozlov
  </footer>
  );

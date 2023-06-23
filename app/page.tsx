import { ReactElement } from 'react';
import styles from 'app/page.module.scss';

export default function Home(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome to NextJS world</h1>
    </div>
  )
};

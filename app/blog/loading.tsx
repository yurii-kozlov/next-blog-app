import { ReactElement } from 'react';
import styles from 'app/blog/loading.module.scss';

const LoadingPosts = (): ReactElement => (
  <div className={styles.wrapper}>
    <div className={styles.loader} />
  </div>
)

export default LoadingPosts;

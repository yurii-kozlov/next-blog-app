import { ReactElement } from 'react';
import styles from 'app/products/loading.module.scss';

const LoadingProducts = (): ReactElement => (
  <div className={styles.wrapper}>
    <div className={styles.loader} />
  </div>
)

export default LoadingProducts;

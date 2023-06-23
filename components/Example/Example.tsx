import { ReactElement } from 'react';
import styles from 'components/Example/Example.module.scss';

export const Example = (): ReactElement => (
  <p className={styles.title}>Hello world</p>
);

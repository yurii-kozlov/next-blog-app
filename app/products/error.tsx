'use client';

import { FC, ReactElement } from 'react';
import styles from 'app/blog/error.module.scss';

type ErrorProps = {
  error: Error
}

const Error: FC<ErrorProps> = ({ error }): ReactElement => (
  <h1 className={styles.title}>Ooops!!! {error.message}</h1>
)

export default Error;

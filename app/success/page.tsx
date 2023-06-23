'use client';

import { useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from 'styles/pages/Success.module.scss';
import axios from 'axios';

export default function Success(): ReactElement {
  const [error, setError] = useState<string>('');
  const [paymentData, setPaymentData] = useState('');

  const searchParams = useSearchParams();
  const session_id = searchParams.get('session_id');

  useEffect(() => {
    async function getPaymentInfo(): Promise<void> {
      try {
        const response = await axios.get(`/api/checkout_sessions/${session_id?.trim()}`)
        setPaymentData(response.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong');
        }
      }
    };

    getPaymentInfo();
  }, [session_id])

  return (
    <div className={styles.wrapper}>
      {error && (
        <h1 className={cn(styles.title, styles.errorTitle)}>
          Ooops! Something went wrong. Please try again or contact us for more information.
        </h1>
      )}
      {paymentData && (
        <h1 className={cn(styles.title, styles.successfulTitle)}> Your payment has been successful!</h1>
      )}
    </div>
  )
};

'use client';
import { FC, ReactElement } from 'react';
import styles from 'components/GoogleButton/GoogleButton.module.scss';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

export const GoogleButton: FC = (): ReactElement => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  const handleSignin = () => signIn('google', { callbackUrl });

  return (
    <button
      aria-label='sign in'
      type="button"
      className={styles.button}
      onClick={handleSignin}
    >
      Sign in with Google
    </button>
  );
};
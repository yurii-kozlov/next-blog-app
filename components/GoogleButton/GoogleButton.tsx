'use client';

import { FC, ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';
import { SignInResponse, signIn } from 'next-auth/react';
import styles from 'components/GoogleButton/GoogleButton.module.scss';

export const GoogleButton: FC = (): ReactElement => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  const handleSignin = (): Promise<SignInResponse | void> => signIn('google', { callbackUrl });

  return (
    <button
      aria-label='sign in'
      className={styles.button}
      onClick={handleSignin}
      type="button"
    >
      Sign in with Google
    </button>
  );
};

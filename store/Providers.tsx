'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import store from 'store/store';

type ProvidersProps = {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </Provider>
  )
}

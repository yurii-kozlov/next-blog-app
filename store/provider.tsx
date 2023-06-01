'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';

type ProvidersProps = {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>
}

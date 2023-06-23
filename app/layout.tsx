import { Metadata } from 'next';
import { ReactElement, ReactNode } from 'react';
import './globals.scss';
import { Roboto } from 'next/font/google';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Providers } from 'store/Providers';
import styles from 'app/layout.module.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: 'normal'
});

export const metadata: Metadata = {
  title: 'Next Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  modal
}: {
  children: ReactNode,
  modal: ReactNode
}): ReactElement {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          <main className={styles.main}>
            {modal}
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

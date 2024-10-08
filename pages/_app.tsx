import type { AppProps } from 'next/app';
import React from 'react';

import { RootLayout } from '@/components/layouts';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

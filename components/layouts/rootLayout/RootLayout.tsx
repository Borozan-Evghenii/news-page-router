import React from 'react';

import { Header } from './components/header/Header';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='container mx-auto my-0 h-[200vh] px-5'>{children}</div>
    </>
  );
}

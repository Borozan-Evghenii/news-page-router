import React from 'react';

import type { CategoryDto } from '@/@types/api';

import { Header } from './components/Header';

export function RootLayout({
  children,
  categories
}: {
  children: React.ReactNode;
  categories: CategoryDto[];
}) {
  return (
    <>
      <Header categories={categories} />
      <div className='container mx-auto my-0 h-[200vh] px-5'>{children}</div>
    </>
  );
}

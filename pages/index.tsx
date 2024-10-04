import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import localFont from 'next/font/local';

import type { CategoryDto } from '@/@types/api';
import { RootLayout } from '@/components/layouts';
import { getCategories } from '@/utils/api/requests';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});

export const getServerSideProps = (async () => {
  const response = await getCategories();
  const { categories } = response.data;

  return { props: { categories } };
}) satisfies GetServerSideProps<{ categories: CategoryDto[] }>;

export default function Home({
  categories
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className={geistSans.className}>
      <RootLayout categories={categories}>Home page</RootLayout>
    </main>
  );
}

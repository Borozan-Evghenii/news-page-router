import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});

// export const getServerSideProps = (async () => {
//   const response = await getCategories();
//   const { categories } = response.data;
// dbcskjncknd
//   return { props: { categories } };
// }) satisfies GetServerSideProps<{ categories: CategoryDto[] }>;

export default function Home() {
  return (
    <main className={geistSans.className}>
      <div>Home page</div>
    </main>
  );
}

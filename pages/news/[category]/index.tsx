import type { GetServerSideProps, GetStaticPaths, InferGetStaticPropsType } from 'next/types';

import { RootLayout } from '@/components/layouts';
import { getCategories, getSearch } from '@/utils/api/requests';

export const getStaticPaths = (async () => {
  const response = await getCategories();

  const paths = response.data.categories.map((item) => ({
    params: { category: item }
  }));
  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const { category } = params as { category: string };
  const categoriesResponse = await getCategories();
  const searchResponse = await getSearch({ params: { language: 'en', category } });

  return {
    props: { news: searchResponse.data.news, categories: categoriesResponse.data.categories }
  };
}) satisfies GetServerSideProps<{ news: NewsDto[]; categories: CategoryDto[] }>;

export default function Category({
  news,
  categories
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <RootLayout categories={categories}>
      {news.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}
    </RootLayout>
  );
}

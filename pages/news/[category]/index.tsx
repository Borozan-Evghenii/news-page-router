import type { GetServerSideProps, GetStaticPaths, InferGetStaticPropsType } from 'next/types';

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
  const searchResponse = await getSearch({ params: { language: 'en', category } });

  return {
    props: { news: searchResponse.data.news }
  };
}) satisfies GetServerSideProps<{ news: NewsDto[] }>;

export default function Category({ news }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {news.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}
    </>
  );
}

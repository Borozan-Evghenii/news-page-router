import type { GetServerSideProps } from 'next';

import { getCategories, getSearch } from '@/utils/api/requests';

export const getServerSideProps: GetServerSideProps<{ categories: CategoryDto[] }> = async () => {
  const { data } = await getCategories();
  const search = await getSearch();

  return { props: { categories: data.categories, news: search.data } };
};

export default function SearchPage() {
  return <div>Search page</div>;
}

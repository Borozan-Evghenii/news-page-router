import useSWR from 'swr';

import { getCategories } from '../requests';

export const useCategoryQuery = () => useSWR('category', () => getCategories());

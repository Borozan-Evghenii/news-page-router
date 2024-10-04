import { api } from '../instance';

export const getCategories = async (requestConfig?: RequestConfig) =>
  api.get<ApiCategoryResponseDto>('/available/categories', {
    ...requestConfig?.config
  });

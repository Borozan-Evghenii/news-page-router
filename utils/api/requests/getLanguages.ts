import { api } from '../instance';

export const getLanguages = async (requestConfig?: RequestConfig) =>
  api.get<ApiLanguagesResponseDto>('/available/languages', {
    ...requestConfig?.config
  });

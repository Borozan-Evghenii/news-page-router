import { api } from '../instance';

type GetSearchParams = {
  language?: string;
  country?: string;
  category?: string;
  keywords?: string;
  start_date?: string;
  end_date?: string;
};

type GetSearchConfig = RequestConfig<GetSearchParams>;

export const getSearch = async (requestConfig?: GetSearchConfig) =>
  api.get<ApiNewsResponseDto>('/search', {
    ...requestConfig?.config,
    params: {
      ...requestConfig?.params
    }
  });

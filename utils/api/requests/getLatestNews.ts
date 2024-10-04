import { api } from '../instance';

type GetLatestNewsParams = {
  language?: string;
  country?: string;
  category?: string;
};

type GetLatestNews = RequestConfig<GetLatestNewsParams>;

export const getLatestNews = async (requestConfig?: GetLatestNews) =>
  api.get<ApiNewsResponseDto>('/lates-news', {
    ...requestConfig?.config,
    params: { ...requestConfig?.params }
  });

import { ApiNewsResponseDto, RequestConfig } from '@/@types/api';
import axios from 'axios';

type GetLatestNewsParams = {
  language?: string;
  country?: string;
  category?: string;
};

type GetLatestNews = RequestConfig<GetLatestNewsParams>;

export const getLatestNews = (requestConfig?: GetLatestNews) => {
  return axios.get<ApiNewsResponseDto>('/lates-news', {
    ...requestConfig?.config,
    params: { ...requestConfig?.config?.params, ...requestConfig?.params }
  });
};

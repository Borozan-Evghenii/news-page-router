import { RequestConfig, ApiNewsResponseDto } from '@/@types/api';
import axios from 'axios';

type GetSearchParams = {
  language?: string;
  country?: string;
  category?: string;
  keywords?: string;
  start_date?: string;
  end_date?: string;
};

type GetSearchConfig = RequestConfig<GetSearchParams>;

export const getSearch = (requestConfig?: GetSearchConfig) => {
  return axios.get<ApiNewsResponseDto>('/search', {
    ...requestConfig?.config,
    params: { ...requestConfig?.config?.params, ...requestConfig?.params }
  });
};

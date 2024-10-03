import { ApiLanguagesResponseDto, RequestConfig } from '@/@types/api';
import axios from 'axios';

export const getLanguages = (requestConfig?: RequestConfig) => {
  return axios.get<ApiLanguagesResponseDto>('/available/languages', {
    ...requestConfig?.config
  });
};

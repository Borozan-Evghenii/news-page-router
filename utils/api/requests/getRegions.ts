import { ApiRegionsResponseDto, RequestConfig } from '@/@types/api';
import axios from 'axios';

export const getRegions = (requestConfig?: RequestConfig) => {
  return axios.get<ApiRegionsResponseDto>('/available/regions', {
    ...requestConfig?.config
  });
};

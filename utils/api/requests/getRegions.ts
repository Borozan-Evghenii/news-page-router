import { api } from '../instance';

export const getRegions = async (requestConfig?: RequestConfig) =>
  api.get<ApiRegionsResponseDto>('/available/regions', {
    ...requestConfig?.config
  });

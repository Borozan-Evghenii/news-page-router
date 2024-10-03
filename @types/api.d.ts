import { AxiosRequestConfig } from 'axios';

type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: import('axios').AxiosRequestConfig }
  : { params: Params; config?: import('axios').AxiosRequestConfig };

type NewsDto = {
  id: number;
  title: string;
  url: string;
  category: string[];
  description: string;
  image: string;
  published: string;
  language: string;
};

type LanguagesDto = {
  [string]: string;
};

type RegionDto = {
  [string]: string;
};

type CategoryDto = {
  [string]: string;
};

type ApiNewsResponseDto = {
  status: string;
  news: NewsDto[];
  page: number;
};

type ApiLanguagesResponseDto = {
  status: string;
  languages: LanguagesDto[];
  description: string;
};

type ApiRegionsResponseDto = {
  status: string;
  languages: RegionDto[];
  description: string;
};

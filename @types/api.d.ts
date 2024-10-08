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
  [key: string]: string;
};

type RegionDto = {
  [key: string]: string;
};

type CategoryDto = string;

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

type ApiCategoryResponseDto = {
  status: string;
  categories: CategoryDto[];
  description: string;
};

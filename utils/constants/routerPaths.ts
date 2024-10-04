export const ROUTES = {
  INDEX: '/',
  SEARCH: '/search',
  CATEGORY: '/news/[category]',
  REGISTER: 'auth/register',
  SIGN_IN: 'auth/signin',
  NEWS_PAGE: '/news/[slug]'
} as const;

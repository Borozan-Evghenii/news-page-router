import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  params: {
    lang: 'en'
    // for auth users lang from localestorage
  },
  headers: {
    Authorization: process.env.API_TOKEN
  }
});

import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: process.env.API_TOKEN
  }
});

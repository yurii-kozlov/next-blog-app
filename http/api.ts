import axios, { AxiosInstance } from 'axios';

export const productsApi: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL,
});

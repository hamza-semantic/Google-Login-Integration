import axios from 'axios';
import { API_URL } from '../config';
import { getLoggedInSessionToken } from '../utils/storage';

export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


httpClient.interceptors.request.use(async config => {
  const token = await getLoggedInSessionToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 401) {
      console.warn('Session expired');
    }
    return Promise.reject(error);
  },
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown): Promise<T> {
    const response = await httpClient.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: object): Promise<T> {
    const response = await httpClient.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown): Promise<T> {
    const response = await httpClient.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string): Promise<T> {
    const response = await httpClient.delete<T>(url);
    return response.data;
  }
}
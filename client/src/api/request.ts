import axios from 'axios';
import { baseURL } from '../utils';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

axios.defaults.baseURL = baseURL;

console.log(baseURL);

export const request = {
  get: async <T>(url: Paths): Promise<T> => {
    const { data } = await axios.get<T>(url);
    return data;
  },

  post: async <T>(url: Paths, redata: unknown, headers?: any): Promise<T> => {
    const { data } = await axios.post<T>(url, redata, headers);
    return data;
  },

  put: async <T>(
    url: Paths,
    redata: unknown,
    headers?: { headers: Record<string, never> }
  ): Promise<T> => {
    const { data } = await axios.put<T>(url, redata, headers);
    return data;
  },

  delete: async <T>(
    url: Paths,
    headers?: { headers: Record<string, never> }
  ): Promise<T> => {
    const { data } = await axios.delete<T>(url, headers);
    return data;
  },
};

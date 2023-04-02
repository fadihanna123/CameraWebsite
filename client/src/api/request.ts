import axios from 'axios';

export const request = {
  get: async <T>(url: string): Promise<T> => {
    const { data } = await axios.get<T>(url);
    return data;
  },

  post: async <T>(
    url: string,
    redata: unknown,
    headers?: { headers: Record<string, never> }
  ): Promise<T> => {
    const { data } = await axios.post<T>(url, redata, headers);
    return data;
  },

  put: async <T>(
    url: string,
    redata: unknown,
    headers?: { headers: Record<string, never> }
  ): Promise<T> => {
    const { data } = await axios.put<T>(url, redata, headers);
    return data;
  },

  delete: async <T>(
    url: string,
    headers?: { headers: Record<string, never> }
  ): Promise<T> => {
    const { data } = await axios.delete<T>(url, headers);
    return data;
  },
};

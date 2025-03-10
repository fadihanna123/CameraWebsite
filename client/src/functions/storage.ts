import { sessionStorageKeys } from '@core/utils';

export const getStorage = (key: sessionStorageKeys) => {
  const data = sessionStorage.getItem(key);

  if (data) {
    return data;
  }

  return null;
};

export const setStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

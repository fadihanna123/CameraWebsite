import { localStorageKeys } from '@core/utils';

export const getStorage = (key: localStorageKeys) => {
  const data = localStorage.getItem(key);

  if (data) {
    return data;
  }

  return null;
};

export const setStorage = (key: localStorageKeys, value: any) => {
  localStorage.setItem(key, value);
};

import { localStorageKeys } from '@core/utils';

// getStorage: Get data from localstorage
export const getStorage = (key: localStorageKeys) => {
  const data = localStorage.getItem(key);

  if (data) {
    return data;
  }

  return null;
};

// setStorage: Set data in localstorage
export const setStorage = (key: localStorageKeys, value: any) => {
  localStorage.setItem(key, value);
};

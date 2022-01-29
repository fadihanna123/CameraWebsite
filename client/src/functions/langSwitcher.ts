import localforage from 'localforage';
import { Dispatch } from 'redux';
import { setLang } from 'redux/actions';
import { localForageKeys } from 'utils/constants';

export const langSwitcher = (lang: string, dispatch: Dispatch<any>) => {
  localforage.setItem(localForageKeys.Lang, lang);
  dispatch(setLang(lang));
};

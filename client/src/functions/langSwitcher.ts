import localforage from 'localforage';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLang } from 'redux/reducers';
import { localForageKeys } from 'utils/constants';

/**
 * Switch to the selected language.
 *
 * @function langSwitcher
 * @param { string } lang
 * @param { Dispatch<any> } dispatch
 * @returns { void }
 * @example langSwitcher("en", dispatch);
 */
export const langSwitcher = (lang: string, dispatch: Dispatch<any>): void => {
  localforage
    .setItem(localForageKeys.Lang, lang)
    .catch((err) => toast.error((err as Error).message));

  dispatch(setLang(lang));
};

import { toast } from 'react-toastify';
import { Dispatch } from 'redux';

// Components
import { setLang } from '@redux/reducers/lang';
import { sessionStorageKeys } from '@utils/constants';
import { setStorage } from './storage';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Switch to the selected language.
 * @function langSwitcher
 * @param { string } lang
 * @param { Dispatch<any> } dispatch
 * @returns { void }
 * @example langSwitcher("en", dispatch);
 */
export const langSwitcher = (lang: string, dispatch: Dispatch<any>): void => {
  try {
    setStorage(sessionStorageKeys.Lang, lang);

    dispatch(setLang(lang));
  } catch (err) {
    toast.error((err as Error).message);
  }
};

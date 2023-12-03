import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLogin } from 'redux/reducers';
import { sessionStorageKeys } from 'utils/constants';

import { RedirectToRoute } from './helper';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Do logout functionality.
 *
 * @function doLogOut
 * @param { Dispatch<any> } dispatch
 * @returns { void }
 * @example doLogOut(dispatch);
 */
export const doLogOut = (dispatch: Dispatch<any>): void => {
  try {
    sessionStorage.removeItem(sessionStorageKeys.Token);

    sessionStorage.removeItem(sessionStorageKeys.Author);

    dispatch(setLogin(false));

    RedirectToRoute('/');
  } catch (err) {
    toast.error((err as Error).message);
  }
};

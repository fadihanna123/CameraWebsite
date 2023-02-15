import localforage from 'localforage';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLogin } from 'redux/reducers';
import { localForageKeys } from 'utils/constants';

import { RedirectToRoute } from './helper';

/**
 * Do logout functionality.
 *
 * @function doLogOut
 * @param { Dispatch<any> } dispatch
 * @returns { void }
 * @example doLogOut(dispatch);
 */
export const doLogOut = (dispatch: Dispatch<any>): void => {
  localforage
    .removeItem(localForageKeys.Token)
    .catch((err) => toast.error((err as Error).message));

  localforage
    .removeItem(localForageKeys.Author)
    .catch((err) => toast.error((err as Error).message));

  dispatch(setLogin(false));

  RedirectToRoute('/');
};

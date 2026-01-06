import { toast } from 'react-toastify';
import { Dispatch } from 'redux';

// Components
import { setLogin } from '@redux/reducers/login';
import { localStorageKeys } from '@utils/constants';

/**
 * @author Fadi Hanna
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
    localStorage.removeItem(localStorageKeys.Token);

    localStorage.removeItem(localStorageKeys.User);

    dispatch(setLogin(false));

    location.reload();
  } catch (err) {
    toast.error((err as Error).message);
  }
};

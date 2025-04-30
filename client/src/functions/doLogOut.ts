import { toast } from 'react-toastify';
import { Dispatch } from 'redux';

// Components
import { setLogin } from '@redux/reducers/login';
import { sessionStorageKeys } from '@utils/constants';

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
    sessionStorage.removeItem(sessionStorageKeys.Token);

    sessionStorage.removeItem(sessionStorageKeys.User);

    dispatch(setLogin(false));

    location.reload();
  } catch (err) {
    toast.error((err as Error).message);
  }
};

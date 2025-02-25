import { Flip, toast } from 'react-toastify';
import { Dispatch } from 'redux';

// Components
import { sessionStorageKeys } from '@utils/constants';
import { loginUser } from './apiStore';
import { setLogin } from '@redux/reducers/login';
import { setLoading } from '@redux/reducers/loading';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Do a login check.
 * @function checkLogin
 * @async
 * @param { Dispatch<any> } dispatch
 * @param { ILoginForm } loginForm
 * @returns { Promise<void> }
 * @example checkLogin(dispatch, { uname: 'Erik', psw: 123 });
 */
export const checkLogin = async (
  dispatch: Dispatch<any>,
  loginForm: ILoginForm
): Promise<void> => {
  dispatch(setLoading(true));

  try {
    await loginUser(loginForm)
      .then((res) => {
        if (res.accessToken) {
          sessionStorage.setItem(sessionStorageKeys.Token, res.accessToken);
          sessionStorage.setItem(sessionStorageKeys.Author, res.author);

          dispatch(setLogin(true));
        } else {
          toast.error(res.message, { transition: Flip });
        }
      })
      .catch((err) =>
        toast.error((err as Error).message, { transition: Flip })
      );
  } catch (err) {
    toast.error((err as Error).message, { transition: Flip });
  } finally {
    dispatch(setLoading(false));
  }
};

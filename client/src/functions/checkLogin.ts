import { toast } from 'react-toastify';
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
    await loginUser(loginForm).then((res) => {
      if (res.accessToken) {
        sessionStorage.setItem(
          sessionStorageKeys.User,
          JSON.stringify(res.user)
        );

        sessionStorage.setItem(sessionStorageKeys.Token, res.accessToken);

        dispatch(setLogin(true));
      } else {
        if (res.message) {
          toast.error(res.message);
        }
      }
    });
  } catch (err) {
    console.error(err);
    toast.error((err as Error).message);
  } finally {
    dispatch(setLoading(false));
  }
};

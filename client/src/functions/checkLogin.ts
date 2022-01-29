import localforage from 'localforage';
import { Flip, toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLoading, setLogin } from 'redux/actions';
import { ILoginForm } from 'typings';
import { localForageKeys } from 'utils/constants';

import { loginUser } from './auth';
import { RedirectToRoute } from './helper';

export const checkLogin = async (
  dispatch: Dispatch<any>,
  loginForm: ILoginForm
): Promise<void> => {
  try {
    dispatch(setLoading(true));

    const data = await loginUser(loginForm);

    if (data.accessToken) {
      localforage
        .setItem(localForageKeys.Token, data.accessToken)
        .catch((err) => toast.error((err as Error).message));
      localforage
        .setItem(localForageKeys.Author, data.author)
        .catch((err) => toast.error((err as Error).message));

      dispatch(setLogin(true));

      RedirectToRoute("/");
    } else {
      toast.error(data.message, { transition: Flip });
    }
  } catch (err) {
    toast.error((err as Error).message, { transition: Flip });
  } finally {
    dispatch(setLoading(false));
  }
};

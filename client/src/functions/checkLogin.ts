import localforage from 'localforage';
import { Flip, toast } from 'react-toastify';
import { ILoginForm } from 'typings';
import { localForageKeys } from 'utils/constants';

import { loginUser } from './auth';

export const checkLogin = async (
  setLoading: (loading: boolean) => void,
  loginForm: ILoginForm
): Promise<void> => {
  try {
    setLoading(true);

    const data = await loginUser(loginForm);

    if (data.accessToken) {
      localforage
        .setItem(localForageKeys.Token, data.accessToken)
        .catch((err) => toast.error((err as Error).message));
      localforage
        .setItem(localForageKeys.Author, data.author)
        .catch((err) => toast.error((err as Error).message));
    } else {
      toast.error(data.message, { transition: Flip });
    }
  } catch (err) {
    toast.error((err as Error).message, { transition: Flip });
  } finally {
    setLoading(false);
  }
};

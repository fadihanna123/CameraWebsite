import localforage from 'localforage';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLogin } from 'redux/actions';
import { localForageKeys } from 'utils/constants';

import { RedirectToRoute } from './helper';

export const doLogOut = (dispatch: Dispatch<any>) => {
    localforage
        .removeItem(localForageKeys.Token)
        .catch((err) => toast.error((err as Error).message));

    localforage
        .removeItem(localForageKeys.Author)
        .catch((err) => toast.error((err as Error).message));

    dispatch(setLogin(false));

    RedirectToRoute("/");
};

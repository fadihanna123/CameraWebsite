import localforage from 'localforage';
import { NavigateFunction } from 'react-router';
import { toast } from 'react-toastify';
import { localForageKeys } from 'utils/constants';

import { redirectToRoute } from './helper';

export const doLogOut = (navigate: NavigateFunction) => {
  localforage
    .removeItem(localForageKeys.Token)
    .catch((err) => toast.error((err as Error).message));
  localforage
    .removeItem(localForageKeys.Author)
    .catch((err) => toast.error((err as Error).message));

  redirectToRoute("/Start");
};

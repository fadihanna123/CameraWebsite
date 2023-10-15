import Layout from 'app/Layout';
import localforage from 'localforage';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'redux/app';
import { setLang, setLogin } from 'redux/reducers';
import { localForageKeys } from 'utils/constants';
import React from 'react';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isSubscribed = true;

    localforage
      .getItem(localForageKeys.Lang)
      .then((data) => {
        if (isSubscribed) {
          if (data === '') {
            dispatch(setLang('en'));
          }

          if (data === null) {
            localforage.setItem(localForageKeys.Lang, 'en');
          }
        } else {
          return null;
        }
      })
      .catch((err) => toast.error((err as Error).message));

    localforage
      .getItem(localForageKeys.Token)
      .then((Token) => {
        if (isSubscribed) {
          if (Token) {
            dispatch(setLogin(true));
          } else {
            dispatch(setLogin(false));
          }
        } else {
          return null;
        }
      })
      .catch((err: Error) => (isSubscribed ? toast.error(err.message) : null));

    return () => {
      isSubscribed = false;
    };
  }, []);

  return <Layout />;
};

export default App;

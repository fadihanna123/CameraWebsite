import Layout from 'app/Layout';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../redux/app';
import { setLang, setLogin } from '../redux/reducers';
import { sessionStorageKeys } from 'utils/constants';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const lang = sessionStorage.getItem(sessionStorageKeys.Lang);
  const token = sessionStorage.getItem(sessionStorageKeys.Token);

  useEffect(() => {
    if (lang === '') {
      dispatch(setLang('en'));
    }

    if (lang === null || undefined) {
      sessionStorage.setItem(sessionStorageKeys.Lang, 'en');
    }

    dispatch(setLang(lang!));

    if (token) {
      dispatch(setLogin(true));
    } else {
      dispatch(setLogin(false));
    }
  }, []);

  return <Layout />;
};

export default App;

import React, { useEffect } from 'react';

// Components
import Layout from '@app/Layout';
import { sessionStorageKeys } from '@utils/constants';
import useReduxConsts from '@hooks/useReduxConsts';
import { setLang } from '@redux/reducers/lang';
import { setLogin } from '@redux/reducers/login';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const App: React.FC = () => {
  const { dispatch } = useReduxConsts();

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

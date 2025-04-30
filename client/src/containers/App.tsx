import React, { useEffect } from 'react';

// Components
import Layout from '@app/Layout';
import { sessionStorageKeys } from '@utils/constants';
import useReduxConsts from '@hooks/useReduxConsts';
import { setLang } from '@redux/reducers/lang';
import { setLogin } from '@redux/reducers/login';
import { getStorage, setStorage } from '@core/functions';

/**
 * @author Fadi Hanna
 */

const App: React.FC = () => {
  const { dispatch } = useReduxConsts();

  const lang = getStorage(sessionStorageKeys.Lang);
  const token = getStorage(sessionStorageKeys.Token);

  useEffect(() => {
    if (lang === '') {
      dispatch(setLang('en'));
    }

    if (lang === null || undefined) {
      setStorage(sessionStorageKeys.Lang, 'en');
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

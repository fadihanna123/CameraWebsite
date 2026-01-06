import React, { useEffect } from 'react';

// Components
import Layout from '@app/Layout';
import { localStorageKeys } from '@utils/constants';
import useReduxConsts from '@hooks/useReduxConsts';
import { setLang } from '@redux/reducers/lang';
import { setLogin } from '@redux/reducers/login';
import { getStorage, setStorage } from '@core/functions';
import { setPageLoading } from '@core/redux/reducers/pageLoading';
import { ClipLoader } from 'react-spinners';
/**
 * @author Fadi Hanna
 */

const App: React.FC = () => {
  const { pageLoading, dispatch } = useReduxConsts();

  const lang = getStorage(localStorageKeys.Lang);
  const token = getStorage(localStorageKeys.Token);

  useEffect(() => {
    const timeout = setTimeout(() => dispatch(setPageLoading(false)), 1000);

    if (!lang) {
      setStorage(localStorageKeys.Lang, 'en');
      dispatch(setLang('en'));
    }

    dispatch(setLang(lang!));

    if (token) {
      dispatch(setLogin(true));
    } else {
      dispatch(setLogin(false));
    }
    return () => clearTimeout(timeout);
  }, []);

  if (pageLoading) {
    return (
      <div className='pageLoading'>
        <ClipLoader
          color={'#fff'}
          loading={pageLoading}
          size={130}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );
  }

  return <Layout />;
};

export default App;

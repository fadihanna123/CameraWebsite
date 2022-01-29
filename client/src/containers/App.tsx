import Layout from 'app/Layout';
import axios from 'axios';
import localforage from 'localforage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setLogin } from 'redux/actions';
import { localForageKeys } from 'utils/constants';
import { baseURL } from 'utils/envs';

const globalHeader: string = "application/json";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["Content-Type"] = globalHeader;

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localforage
      .getItem(localForageKeys.Token)
      .then((Token) => {
        Token ? dispatch(setLogin(true)) : dispatch(setLogin(false));
      })
      .catch((err) => toast.error((err as Error).message));
  }, []);

  return <Layout />;
};

export default App;

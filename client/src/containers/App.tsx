import Layout from 'app/Layout';
import axios from 'axios';
import localforage from 'localforage';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { loginState } from 'states';
import { localForageKeys } from 'utils/constants';
import { baseURL } from 'utils/envs';

const globalHeader: string = "application/json";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["Content-Type"] = globalHeader;

const App: React.FC = () => {
  const [, setLogin] = useRecoilState(loginState);

  useEffect(() => {
    localforage
      .getItem(localForageKeys.Token)
      .then((Token) => {
        Token ? setLogin(true) : setLogin(false);
      })
      .catch((err) => toast.error((err as Error).message));
  }, [setLogin]);

  return <Layout />;
};

export default App;

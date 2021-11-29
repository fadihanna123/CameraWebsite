import Layout from "app/Layout";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "states";

const globalHeader: string = "application/json";

const { REACT_APP_BACKEND_URL } = process.env;
axios.defaults.baseURL = REACT_APP_BACKEND_URL;
axios.defaults.headers.common["Content-Type"] = globalHeader;

const App: React.FC = () => {
  const [, setLogin] = useRecoilState(loginState);

  const Token: string | null = sessionStorage.getItem("Token");

  useEffect(() => {
    Token ? setLogin(true) : setLogin(false);
  }, [Token, setLogin]);

  return <Layout />;
};

export default App;

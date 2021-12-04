import Layout from "app/Layout";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "states";
import { baseURL } from "utils";

const globalHeader: string = "application/json";

axios.defaults.baseURL = baseURL;
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

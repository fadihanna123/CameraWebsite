import axios from "axios";
import Main from "components/Main";
import Footer from "inc/Footer";
import Header from "inc/Header";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "states";

const { REACT_APP_BACKEND_URL } = process.env;
axios.defaults.baseURL = REACT_APP_BACKEND_URL;
axios.defaults.headers["Content-Type"] = "application/json";

const App: React.FC = () => {
  const [, setLogin] = useRecoilState(loginState);

  const Token: string | null = sessionStorage.getItem("Token");

  useEffect(() => {
    Token ? setLogin(true) : setLogin(false);
  }, [Token, setLogin]);

  return (
    <section className="container">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default App;

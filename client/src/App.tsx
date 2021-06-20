import axios from "axios";
import Main from "components/Main";
import Footer from "includes/Footer";
import Header from "includes/Header";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "States";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
  const [, setLogin] = useRecoilState(loginState);

  const Token: string | null = sessionStorage.getItem("Token");

  useEffect(() => {
    Token ? setLogin(true) : setLogin(false);
  }, [Token, setLogin]);

  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;

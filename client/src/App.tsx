import axios from "axios";
import Main from "components/Main";
import Footer from "includes/Footer";
import Header from "includes/Header";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
  const [login, setLogin] = useState<boolean>(false);

  const Token: string | null = sessionStorage.getItem("Token");

  useEffect(() => {
    if (Token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [Token]);
  return (
    <>
      <div className="container">
        <Header login={login} />
        <Main login={login} />
        <Footer />
      </div>
    </>
  );
};

export default App;

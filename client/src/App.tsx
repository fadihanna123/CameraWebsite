import axios from "axios";
import Main from "./components/Main";
import Footer from "./includes/Footer";
import Header from "./includes/Header";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
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

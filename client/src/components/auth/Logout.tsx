import { Redirect, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "states";

const Logout: React.FC = () => {
  const history = useHistory();
  const [login] = useRecoilState(loginState);

  const DoLogout = () => {
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("Author");
    history.push("/Start");
  };

  return <>{login ? DoLogout : <Redirect to="/Start" />}</>;
};

export default Logout;

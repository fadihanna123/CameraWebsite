import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "states";

const Logout: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [login] = useRecoilState(loginState);

  const DoLogout = () => {
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("Author");
    navigate("/Start");
  };

  return <>{login ? DoLogout : <Navigate to="/Start" />}</>;
};

export default Logout;

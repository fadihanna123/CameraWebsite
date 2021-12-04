import { doLogOut } from "functions";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "states";

const Logout: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [login] = useRecoilState(loginState);

  return <>{login ? doLogOut(navigate) : <Navigate to="/Start" />}</>;
};

export default Logout;

import { doLogOut } from 'functions';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from 'states';

const Logout: React.FC = () => {
  const [login] = useRecoilState(loginState);

  return <>{login ? doLogOut() : <Navigate to="/Start" />}</>;
};

export default Logout;

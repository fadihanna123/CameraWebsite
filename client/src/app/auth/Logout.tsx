import { Navigate } from 'react-router-dom';

// Components
import useReduxConsts from '@hooks/useReduxConsts';
import { doLogOut } from '@functions/doLogOut';

/**
 * @author Fadi Hanna
 */

const Logout = () => {
  const { login, dispatch } = useReduxConsts();

  return login ? doLogOut(dispatch) : <Navigate to='/' />;
};

export default Logout;

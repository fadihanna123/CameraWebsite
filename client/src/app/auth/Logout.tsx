// Components
import useReduxConsts from '../../hooks/useReduxConsts';
import { doLogOut } from '../../functions';
import { Navigate } from 'react-router-dom';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Logout = () => {
  const { login, dispatch } = useReduxConsts();

  return login ? doLogOut(dispatch) : <Navigate to='/' />;
};

export default Logout;

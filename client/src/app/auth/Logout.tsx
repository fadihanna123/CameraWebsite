import { Navigate } from 'react-router-dom';
import React from 'react';

// Components
import { doLogOut } from '../../functions';
import useReduxConsts from '../../hooks/useReduxConsts';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Logout: React.FC = () => {
  const { login, dispatch } = useReduxConsts();

  return <>{login ? doLogOut(dispatch) : <Navigate to='/' />}</>;
};

export default Logout;

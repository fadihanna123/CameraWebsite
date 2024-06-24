import { Navigate } from 'react-router-dom';
import React from 'react';

// Components
import { doLogOut } from '../../functions';
import { useAppDispatch, useAppSelector } from '../../redux/app';
import { getLang } from '../../redux/reducers';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Logout: React.FC = () => {
  const login = useAppSelector(getLang);

  const dispatch = useAppDispatch();

  return <>{login ? doLogOut(dispatch) : <Navigate to='/' />}</>;
};

export default Logout;

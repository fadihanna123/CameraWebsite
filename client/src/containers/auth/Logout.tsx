import { doLogOut } from 'functions';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { getLang } from 'redux/reducers';
import React from 'react';

const Logout: React.FC = () => {
  const login = useAppSelector(getLang);

  const dispatch = useAppDispatch();

  return <>{login ? doLogOut(dispatch) : <Navigate to='/' />}</>;
};

export default Logout;

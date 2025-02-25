import React from 'react';
import { Dispatch } from 'redux';

// Components
import { setRegisterForm } from '@redux/reducers/registerForm';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Handle registrations form values.
 * @function RegisterTyper
 * @param { React.ChangeEvent<HTMLInputElement> } e
 * @param { IRegisterForm } registerForm
 * @param { Dispatch<any> } dispatch
 * @returns { object } Object
 * @example RegisterTyper(e, { uname: 'Erik', email: 'ab@gmail.com', mobnr: '075 11 75 147', psw: 123, repsw: 123, img: 'me.jpg' }, dispatch);
 */
export const RegisterTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  registerForm: IRegisterForm,
  dispatch: Dispatch<any>
): object =>
  dispatch(
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    })
  );

import React from 'react';
import { Dispatch } from 'redux';

// Components
import { setLoginForm } from '@redux/reducers/loginForm';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Handle login-form values.
 * @function loginTyper
 * @param { React.ChangeEvent<HTMLInputElement> } e
 * @param { ILoginForm } loginForm
 * @param { Dispatch<any> } dispatch
 * @returns { object } Object
 * @example loginTyper(e, { uname: 'Erik', psw: 123 }, dispatch)
 */
export const loginTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  loginForm: ILoginForm,
  dispatch: Dispatch<any>
) => dispatch(setLoginForm({ ...loginForm, [e.target.name]: e.target.value }));

import { ILoginForm, IRegisterForm } from 'typings';
import { SET_AUTHOR, SET_LOADING, SET_LOGIN, SET_LOGIN_FORM, SET_REGISTER_FORM } from 'utils/constants';

export const setLoginForm = (payload: ILoginForm): Object => {
  return { type: SET_LOGIN_FORM, payload };
};

export const setLogin = (payload: boolean): Object => {
  return { type: SET_LOGIN, payload };
};

export const setLoading = (payload: boolean): Object => {
  return { type: SET_LOADING, payload };
};

export const setAuthor = (payload: unknown): Object => {
  return { type: SET_AUTHOR, payload };
};

export const setRegisterForm = (payload: IRegisterForm): Object => {
  return { type: SET_REGISTER_FORM, payload };
};

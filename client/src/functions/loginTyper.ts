import { Dispatch } from 'redux';
import { setLoginForm } from 'redux/actions';
import { ILoginForm } from 'typings';

export const loginTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  loginForm: ILoginForm,
  dispatch: Dispatch<any>
) => dispatch(setLoginForm({ ...loginForm, [e.target.name]: e.target.value }));

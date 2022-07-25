import { ILoginForm } from 'models';
import { Dispatch } from 'redux';
import { setLoginForm } from 'redux/actions';

export const loginTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  loginForm: ILoginForm,
  dispatch: Dispatch<any>
) =>
  dispatch(
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  );

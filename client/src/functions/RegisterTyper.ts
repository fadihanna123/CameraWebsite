import { Dispatch } from 'redux';
import { setRegisterForm } from 'redux/actions';
import { IRegisterForm } from 'typings';

export const RegisterTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  registerForm: IRegisterForm,
  dispatch: Dispatch<any>
): Object =>
  dispatch(
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })
  );

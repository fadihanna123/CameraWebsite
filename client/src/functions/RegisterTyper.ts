import { IRegisterForm } from 'models';
import { Dispatch } from 'redux';
import { setRegisterForm } from 'redux/reducers';

/**
 * Handle registrations form values.
 *
 * @function RegisterTyper
 * @param { React.ChangeEvent<HTMLInputElement> } e
 * @param { IRegisterForm } registerForm
 * @param { Dispatch<any> } dispatch
 * @returns { object } Object.
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

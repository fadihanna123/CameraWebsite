import { IRegisterForm } from 'models';
import { Dispatch } from 'redux';
import { setRegisterForm } from 'redux/actions';

/**
 * Handle registrations form values.
 *
 * @param e
 * @param registerForm
 * @param dispatch
 * @returns Object.
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

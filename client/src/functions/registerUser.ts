import { toast, TypeOptions } from 'react-toastify';
import { Dispatch } from 'redux';

// Components
import { setLoading } from '@redux/reducers/loading';
import { registerUser } from './apiStore';
import { NavigateFunction } from 'react-router-dom';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Register a user.
 * @function RegisterUser
 * @async
 * @param { Dispatch<any> } dispatch
 * @returns { Promise<void> }
 * @example RegisterUser(dispatch);
 */
export const RegisterUser = async (
  dispatch: Dispatch<any>,
  registerForm: IRegisterForm,
  navigate: NavigateFunction
): Promise<void> => {
  try {
    dispatch(setLoading(true));
    const avatar_file = document.getElementById(
      'register_avatar'
    )! as HTMLInputElement;

    const myForm = new FormData();
    myForm.append('uname', registerForm.uname);
    myForm.append('email', registerForm.email);
    myForm.append('mobnr', registerForm.mobnr);
    myForm.append('psw', registerForm.psw);
    myForm.append('repsw', registerForm.repsw);
    myForm.append('avatar', avatar_file!.files![0]);

    await registerUser(myForm)
      .then((res) => {
        if (res.message) {
          toast(res.message, {
            type: res.type as TypeOptions,
          });

          if (res.type === 'success') {
            setTimeout(() => {
              navigate('/');
            }, 2000);
          }
        }
      })
      .catch((err) => toast.error((err as Error).message));
  } catch (err) {
    toast.error((err as Error).message);
  } finally {
    dispatch(setLoading(false));
  }
};

import { Flip, toast } from 'react-toastify';
import { Dispatch } from 'redux';

// Components
import { setLoading } from '../redux/reducers';
import { registerUser } from './apiStore';

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
  registerForm: IRegisterForm
): Promise<void> => {
  try {
    // dispatch(setLoading(true));

    const myForm = new FormData();
    myForm.append('uname', registerForm.uname);
    myForm.append('email', registerForm.email);
    myForm.append('mobnr', registerForm.mobnr);
    myForm.append('psw', registerForm.psw);
    myForm.append('repsw', registerForm.repsw);
    myForm.append('avatar', registerForm.avatar);

    // for (const pair of myForm.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    await registerUser(myForm)
      .then((res) => {
        if (res.message) {
          toast.error(res.message, { transition: Flip });
        }
      })
      .catch((err) =>
        toast.error((err as Error).message, { transition: Flip })
      );
  } catch (err) {
    toast.error((err as Error).message, { transition: Flip });
  } finally {
    dispatch(setLoading(false));
  }
};

import { Flip, toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLoading } from 'redux/actions';

import { registerUser } from './auth';

export const RegisterUser = async (dispatch: Dispatch<any>): Promise<void> => {
  try {
    dispatch(setLoading(true));

    const file = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    const myForm = new FormData();
    myForm.append("img", file!.files![0]);

    const data = await registerUser(myForm);

    toast.error(data.message, { transition: Flip });
  } catch (err) {
    toast.error((err as Error).message, { transition: Flip });
  } finally {
    dispatch(setLoading(false));
  }
};

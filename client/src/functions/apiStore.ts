import { request } from '../api';
import { loginEndPoint, registerEndPoint } from '../utils';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Login a user.
 * @function loginUser
 * @async
 * @param { ILoginForm } loginForm
 * @returns { Promise<ILoginData> } ILoginData object
 * @example loginUser({ uname: 'Erik', psw: 123 });
 */
export const loginUser = async (loginForm: ILoginForm): Promise<ILoginData> => {
  try {
    return await request.post<ILoginData>(loginEndPoint as Paths, loginForm);
  } catch (error: any) {
    throw new Error(error);
  }
};

/**
 * Register a user.
 * @function registerUser
 * @async
 * @param { FormData } myForm
 * @returns { Promise<IRegisterData> } IRegisterData object
 * @example registerUser({ uname: 'Erik', email: 'ab@gmail.com', mobnr: '075 11 75 147', psw: 123, repsw: 123, img: 'me.jpg' });
 */
export const registerUser = async (
  myForm: FormData
): Promise<IRegisterData> => {
  try {
    return await request.post<IRegisterData>(
      registerEndPoint as Paths,
      myForm,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
  } catch (error: any) {
    throw new Error(error);
  }
};

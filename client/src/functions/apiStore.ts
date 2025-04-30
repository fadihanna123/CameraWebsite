// Components
import { loginEndPoint, registerEndPoint } from '@utils/envsVariables';
import { request } from '@api/request';

/**
 * @author Fadi Hanna
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
  registerForm: FormData
): Promise<IRegisterData> => {
  try {
    return await request.post<IRegisterData>(
      registerEndPoint as Paths,
      registerForm
    );
  } catch (error: any) {
    throw new Error(error);
  }
};

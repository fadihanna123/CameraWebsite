import { request } from 'api';
import { ILoginData, ILoginForm, IRegisterData } from 'models';
import { loginEndPoint, registerEndPoint } from 'utils';

/**
 * Login a user.
 *
 * @function loginUser
 * @async
 * @param { ILoginForm } loginForm
 * @returns { Promise<ILoginData> } ILoginData object
 * @example loginUser({ uname: 'Erik', psw: 123 });
 */
export const loginUser = async (loginForm: ILoginForm): Promise<ILoginData> =>
  await request.post<ILoginData>(loginEndPoint as string, loginForm);

/**
 * Register a user.
 *
 * @function registerUser
 * @async
 * @param { FormData } myForm
 * @returns { Promise<IRegisterData> } IRegisterData object
 * @example registerUser({ uname: 'Erik', email: 'ab@gmail.com', mobnr: '075 11 75 147', psw: 123, repsw: 123, img: 'me.jpg' });
 */
export const registerUser = async (myForm: FormData): Promise<IRegisterData> =>
  await request.post<IRegisterData>(registerEndPoint as string, myForm);

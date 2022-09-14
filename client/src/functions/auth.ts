import { request } from 'api';
import { ILoginData, ILoginForm, IRegisterData } from 'models';
import { loginEndPoint, registerEndPoint } from 'utils/envs';

/**
 * Login a user.
 *
 * @param loginForm
 * @returns ILoginData object.
 */

export const loginUser = async (loginForm: ILoginForm): Promise<ILoginData> =>
  await request.post<ILoginData>(loginEndPoint as string, loginForm);

/**
 * Register a user.
 *
 * @param myForm
 * @returns IRegisterData object.
 */

export const registerUser = async (myForm: FormData): Promise<IRegisterData> =>
  await request.post<IRegisterData>(registerEndPoint as string, myForm);

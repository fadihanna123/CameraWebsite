import { request } from 'api';
import { ILoginData, ILoginForm, IRegisterData } from 'typings';
import { loginEndPoint, registerEndPoint } from 'utils/envs';

export const loginUser = async (loginForm: ILoginForm): Promise<ILoginData> =>
  await request.post<ILoginData>(loginEndPoint as string, loginForm);

export const registerUser = async (myForm: FormData): Promise<IRegisterData> =>
  await request.post<IRegisterData>(registerEndPoint as string, myForm);
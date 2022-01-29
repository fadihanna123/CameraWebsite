import { ILoginForm, IRegisterForm } from './forms';

export interface ActionTypes {
  type: string;
  payload: void;
}

export interface LoginFormReducerTypes {
  loginFormReducer: ILoginForm;
}

export interface LoginReducerTypes {
  loginReducer: boolean;
}

export interface LoadingReducerTypes {
  loadingReducer: boolean;
}

export interface AuthorReducerTypes {
  authorReducer: string;
}

export interface RegisterFormReducerTypes {
  registerFormReducer: IRegisterForm;
}

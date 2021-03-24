export interface ILoginForm {
  uname: string;
  psw: string;
}

export interface ILoginData {
  accessToken: string;
  message: string;
}

export interface IRegisterForm {
  uname: string;
  email: string;
  mobnr: string;
  psw: string;
  repsw: string;
  img: string;
}

export interface IRegisterData {
  message: string;
}

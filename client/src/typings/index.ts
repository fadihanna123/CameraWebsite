export interface ILoginForm {
  uname: string;
  psw: string;
}

export interface ILoginData {
  accessToken: string;
  message: string;
  author: string;
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

export interface StyleTypes {
  p10: P10;
}

export interface P10 {
  padding: string;
}

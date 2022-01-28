import {
  ButtonHTMLAttributes,
  ChangeEventHandler,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactChildren,
  ReactElement,
  ReactHTMLElement,
  ReactNode,
} from 'react';

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

export interface HeadingProps {
  headingLevel?: 1 | number;
  className?: string;
  children: ReactElement<any, any> | string;
}

export interface InputProps {
  id: string;
  type?: "text" | string;
  className?: string;
  name?: string;
  val?: string;
  isRequired?: boolean;
  changeFunc?: ChangeEventHandler<HTMLInputElement>;
  acceptValues?: string;
}

export interface BtnProps {
  className: "btn" | string;
  clickFunc?: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement<any, any> | string;
  btnStyle?: Object;
}

export interface ParaProps {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
}

export interface FileUploaderProps {
  id: string;
  type?: "text" | string;
  className?: string;
  name: string;
  val: string;
  isRequired?: boolean;
  changeFunc: ChangeEventHandler<HTMLInputElement>;
  acceptValues?: string;
}

export interface TxtAreaProps {
  id: string;
  className?: string;
}

export interface ImgProps {
  source: string;
  className: string;
  alt: string;
  ariaLabel: string;
  loading: "eager" | "lazy" | undefined;
}

import { UseFormRegister } from 'react-hook-form';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BACKEND_URL: string;
      REACT_APP_LOGIN_API: string;
      REACT_APP_REGISTER_API: string;
      NODE_ENV: 'development' | 'production';
    }
  }

  interface ILoginData {
    accessToken: string;
    message: string;
    user: UserData;
  }

  interface IRegisterData {
    message: string;
    type: string;
  }

  interface ILoginForm {
    uname: string;
    psw: string;
  }

  interface IRegisterForm {
    uname: string;
    email: string;
    mobnr: string;
    psw: string;
    repsw: string;
    avatar: any;
  }

  type UserData = IRegisterForm;

  interface HeadingProps {
    headingLevel?: 1 | number;
    className?: string[];
    children: ReactElement<any, any> | string;
  }

  interface InputProps {
    id: string;
    type?: 'text' | string;
    className?: string[];
    name?: string;
    val?: string;
    isRequired?: boolean;
    changeFunc?: ChangeEventHandler<HTMLInputElement>;
    acceptValues?: string;
    autoComplete?: string;
    placeHolder?: string;
    defaultVal?: string;
    register?: UseFormRegister;
  }

  interface BtnProps {
    className?: ['btn'] | string[];
    clickFunc?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactElement<any, any> | string;
    btnStyle?: object;
    backgroundColor?: string;
    disabled: boolean;
  }

  interface ParaProps {
    className?: string[];
    children: JSX.Element | JSX.Element[] | string;
  }

  interface FileUploaderProps {
    id: string;
    type?: 'text' | string;
    className?: string[];
    name?: string;
    val?: string;
    isRequired?: boolean;
    changeFunc?: ChangeEventHandler<HTMLInputElement>;
    acceptValues?: string;
  }

  interface TxtAreaProps {
    id: string;
    className?: string[];
  }

  interface ImgProps {
    source: string;
    className: string[];
    alt: string;
    ariaLabel: string;
    dimensions: number[];
  }

  interface MainFooterProps {
    classNames: string[];
    children: JSX.Element | JSX.Element[] | string;
  }

  interface MainHeaderProps {
    children: JSX.Element | JSX.Element[] | string;
  }

  interface MenuProps {
    classNames: string[];
    children: any;
  }

  type Paths = 'login' | 'register';

  declare module '*.webp';
  declare module '*.jpg';
}

export {};

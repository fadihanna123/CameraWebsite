import { ILoginForm, IRegisterForm } from './forms';

export class ActionTypes {
  constructor(other?: any) {
    this.type = other.type;
    this.payload = other.payload;
  }
  public type: string;
  public payload: void;
}

export class LoginFormReducerTypes {
  constructor(other?: any) {
    this.loginFormReducer = other.loginFormReducer;
  }
  public loginFormReducer: ILoginForm;
}

export class LoginReducerTypes {
  constructor(other?: any) {
    this.loginReducer = other.loginReducer;
  }
  public loginReducer: boolean;
}

export class LoadingReducerTypes {
  constructor(other?: any) {
    this.loadingReducer = other.loadingReducer;
  }
  public loadingReducer: boolean;
}

export class AuthorReducerTypes {
  constructor(other?: any) {
    this.authorReducer = other.authorReducer;
  }
  public authorReducer: string;
}

export class RegisterFormReducerTypes {
  constructor(other?: any) {
    this.registerFormReducer = other.registerFormReducer;
  }
  public registerFormReducer: IRegisterForm;
}

export class LangReducerTypes {
  constructor(other?: any) {
    this.langReducer = other.langReducer;
  }
  public langReducer: string;
}

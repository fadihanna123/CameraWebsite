import { Request } from 'express';

declare global {
  namespace NodeJS {
    /**
     * ProcessEnv
     * @param { number } PORT
     * @param { string } DATABASE_URL
     * @param { 'development' | 'production' | 'test' } NODE_ENV
     * @param { string } Token
     */
    interface ProcessEnv {
      PORT: number;
      DATABASE_URL: string;
      NODE_ENV: 'development' | 'production' | 'test';
      Token: string;
    }
  }

  /**
   * UsrObjJwt
   * @param { string } uname
   */
  interface UsrObjJwt {
    uname: string;
  }

  /**
   * IUsers
   * @param { string } [ id ] id
   * @param { string } uname
   * @param { string } email
   * @param { string } psw
   * @param { string } repsw
   * @param { string } mobnr
   * @param { number } locked
   * @param { Buffer } avatar
   */
  interface IUsers {
    id?: string;
    uname: string;
    email: string;
    psw: string;
    repsw: string;
    mobnr: string;
    locked: number;
    avatar: string;
  }

  /**
   * typedRequestBody
   * @param { T } body
   */
  interface typedRequestBody<T> extends Request {
    body: T;
  }

  type Routes = '/login' | '/register';
}

export {};

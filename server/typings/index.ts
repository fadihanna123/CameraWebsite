import { Request as ExpressRequest } from "express";

export interface IUsers {
  id: string;
  uname: string;
  email: string;
  psw: string;
  mobnr: string;
  locked: number;
  img: Buffer;
}

export interface Request extends ExpressRequest {
  user?: IUsers;
}

export interface MulterRequest extends Request {
  files: any;
}

import { Request as ExpressRequest } from "express";
import { Document } from "mongoose";

export interface IUsers extends Document {
  _id: string;
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

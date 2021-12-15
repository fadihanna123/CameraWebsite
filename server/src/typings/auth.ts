import { Request as ExpressRequest } from "express";
import { IUsers } from "./users";

export interface Request extends ExpressRequest {
  user?: IUsers;
}

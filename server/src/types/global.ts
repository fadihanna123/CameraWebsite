import { Request } from 'express';

export interface typedRequestBody<T> extends Request {
  body: T;
}

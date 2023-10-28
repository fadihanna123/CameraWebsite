import { Request } from 'express';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DATABASE_URL: string;
      NODE_ENV: 'development' | 'production' | 'test';
      Token: string;
    }
  }

  interface typedRequestBody<T> extends Request {
    body: T;
  }
}

export {};

import { Request } from 'express';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DATABASE_URL: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }

  interface typedRequestBody<T> extends Request {
    body: T;
  }
}

export {};

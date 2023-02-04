declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BACKEND_URL: string;
      REACT_APP_LOGIN_API: string;
      REACT_APP_REGISTER_API: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};

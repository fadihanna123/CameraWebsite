const { REACT_APP_BACKEND_URL, REACT_APP_LOGIN_API, REACT_APP_REGISTER_API } =
  process.env;

export const baseURL: string | undefined = REACT_APP_BACKEND_URL;

export const loginEndPoint: string | undefined = REACT_APP_LOGIN_API;

export const registerEndPoint: string | undefined = REACT_APP_REGISTER_API;

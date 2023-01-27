const { REACT_APP_BACKEND_URL, REACT_APP_LOGIN_API, REACT_APP_REGISTER_API } =
  process.env;

/**
 * @type string | undefined
 */
export const baseURL: string | undefined = REACT_APP_BACKEND_URL;

/**
 * @type string | undefined
 */
export const loginEndPoint: string | undefined = REACT_APP_LOGIN_API;

/**
 * @type string | undefined
 */
export const registerEndPoint: string | undefined = REACT_APP_REGISTER_API;

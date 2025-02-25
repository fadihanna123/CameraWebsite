/**
 * @type string | undefined
 */
export const baseURL: string | undefined = import.meta.env['VITE_BACKEND_URL'];

/**
 * @type string | undefined
 */
export const loginEndPoint: string | undefined = import.meta.env[
  'VITE_LOGIN_API'
];

/**
 * @type string | undefined
 */
export const registerEndPoint: string | undefined = import.meta.env[
  'VITE_REGISTER_API'
];

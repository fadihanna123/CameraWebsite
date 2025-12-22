// @ts-check
import { connection } from '@core/db';

/**
 * @author Fadi Hanna
 */

/**
 * Store server logs in the database.
 * @function storeLog
 * @async
 * @param { string } message
 * @param { string } method
 * @param { string } located
 * @returns { Promise<void> } A promise
 * @example storeLog("Connected!", "POST", "/login");
 */
export const storeLog = async (
  message: string,
  method: string = '/',
  located: string = '/'
): Promise<void> => {
  connection.query(
    `INSERT INTO logs (message, method, located) VALUES ('${message}', '${method}', '${located}')`
  );
};

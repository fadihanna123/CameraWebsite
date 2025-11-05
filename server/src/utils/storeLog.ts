// @ts-check
import { prisma } from '@core/db';

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
  await prisma.logs.create({
    data: {
      message,
      method: method,
      located: located,
    },
  });
};

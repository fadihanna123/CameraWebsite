// @ts-check
import { prisma } from '@core/db';
import { DateTime } from 'luxon';

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
  const created_at = DateTime.fromJSDate(new Date(), {
    zone: 'Europe/Stockholm',
  }).toFormat('yyyy-MM-dd HH:mm');

  await prisma.logs.create({
    data: {
      message,
      method: method,
      located: located,
      created_at,
    },
  });
};

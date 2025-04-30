// @ts-check
import { prisma } from '@core/db';
import { DateTime } from 'luxon';
import crypto from 'crypto';

/**
 * @author Fadi Hanna
 */

/**
 * Store errors in the database
 * @function storeError
 * @async
 * @param { string } message
 * @param { string } method
 * @param { string } located
 * @returns { Promise<void> } A promise
 * @example storeError("Error connecting!", "POST", "/login");
 */
export const storeError = async (
  message: string,
  method?: string,
  located?: string
): Promise<void> => {
  const created_at = DateTime.fromJSDate(new Date(), {
    zone: 'Europe/Stockholm',
  }).toFormat('yyyy-MM-dd HH:mm');
  const rnd = crypto.randomBytes(1);

  await prisma.errors.create({
    data: {
      errorId: Number(rnd),
      method: method ?? '/',
      message,
      located: located ?? '/',
      created_at,
    },
  });
};

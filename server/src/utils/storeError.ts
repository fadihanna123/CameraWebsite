import { prisma } from 'db';
import { DateTime } from 'luxon';

/**
 * Store errors in the database
 *
 * @param { string } message
 * @param { string } method
 * @param { string } located
 * @returns { Promise<void> } A promise
 */
export const storeError = async (
  message: string,
  method?: string,
  located?: string
): Promise<void> => {
  const rnd: number = Math.floor(Math.random() * 1000);

  const time = DateTime.fromJSDate(new Date()).toFormat('yyyy-MM-dd HH:mm');

  await prisma.errors.create({
    data: {
      errorId: rnd,
      method: method || '/',
      message,
      located: located || '/',
      time,
    },
  });
};

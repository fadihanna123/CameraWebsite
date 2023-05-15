import { prisma } from 'db';
import { DateTime } from 'luxon';

/**
 * Store server logs in the database.
 *
 * @param { string } message
 * @param { string } method
 * @param { string } located
 * @returns { Promise<void> } A promise
 */
export const storeLog = async (
  message: string,
  method?: string,
  located?: string
): Promise<void> => {
  const time: string = DateTime.fromJSDate(new Date()).toFormat(
    'yyyy-MM-dd HH:mm'
  );

  await prisma.logs.create({
    data: {
      message,
      method: method ? method : '/',
      located: located ? located : '/',
      time,
    },
  });
};

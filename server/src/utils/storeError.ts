import { prisma } from 'db';
import { DateTime } from 'luxon';

export const storeError = async (
    message: string,
    method: string,
    located: string
): Promise<void> => {
    const rnd: number = Math.floor(Math.random() * 1000);

    const time = DateTime.fromJSDate(new Date()).toFormat("yyyy-MM-dd HH:mm");

    await prisma.errors.create({
        data: {
            errorId: rnd,
            method,
            message,
            located,
            time,
        },
    });
};
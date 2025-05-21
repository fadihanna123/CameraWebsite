import { prisma } from '@core/db';
import { Response } from 'express';
import { apiKey, storeError } from '@core/utils';
import { logger } from '@core/tools';

/**
 * Get all users.
 *
 * @function getAllUsers
 * @async
 * @access Private
 * @route GET /api/users/
 * @param { typedRequestedBody<IUsers> } req
 * @param { Response } res
 * @returns { Promise<Response<any, Record<string, any>> | undefined> } Promise.
 * @example getAllUsers(req, res);
 */
export const getAllUsers = async (
  req: typedRequestBody<IUsers>,
  res: Response
) => {
  if (req.get('apiKey') === apiKey) {
    try {
      const getData = await prisma.users.findMany();
      res.json(getData);
    } catch (err) {
      // If there is any error..
      storeError((err as Error).message, 'POST', '/api/users/');
      res.status(500).send({ message: (err as Error).message });
    }
  } // End if apiKey is found and correct.
  else {
    storeError('No headers provided!', 'GET', '/api/users/');

    logger.error('No headers provided GET /api/users/!');

    res.json({ message: 'FORBIDDEN' });
  } // End if apiKey is not correct or not found.
};

import { prisma } from '@core/db';
import { Response } from 'express';
import { apiKey, storeError } from '@core/utils';
import { logger } from '@core/tools';

/**
 * Get a users by id.
 *
 * @function getUserById
 * @async
 * @access Private
 * @route GET /api/users/:id
 * @param { typedRequestedBody<IUsers> } req
 * @param { Response } res
 * @returns { Promise<Response<any, Record<string, any>> | undefined> } Promise.
 * @example getUserById(req, res);
 */
export const getUserById = async (
  req: typedRequestBody<IUsers>,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  if (req.get('apiKey') === apiKey) {
    const { id } = req.params;
    try {
      const getUser = await prisma.users.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (getUser) {
        return res.json(getUser);
      } else {
        return res.json({ message: 'User not found' });
      }
    } catch (err) {
      // If there is any error..
      storeError((err as Error).message, 'POST', '/api/users/:id');
      return res.status(500).send({ message: (err as Error).message });
    }
  } // End if apiKey is found and correct.
  else {
    storeError('No headers provided!', 'GET', '/api/users/:id');

    logger.error('No headers provided GET /api/users/:id!');

    res.json({ message: 'FORBIDDEN' });
  } // End if apiKey is not correct or not found.
};

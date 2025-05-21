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
 * @example getUserById(req, res);
 */
export const getUserById = async (
  req: typedRequestBody<IUsers>,
  res: Response
) => {
  if (req.get('apiKey') === apiKey) {
    const { id } = req.params;
    try {
      const getUser = await prisma.users.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (getUser) {
        res.json(getUser);
      } else {
        res.json({ message: 'User not found' });
      }
    } catch (err) {
      // If there is any error..
      storeError((err as Error).message, 'POST', '/api/users/:id');
      res.status(500).send({ message: (err as Error).message });
    }
  } // End if apiKey is found and correct.
  else {
    storeError('No headers provided!', 'GET', '/api/users/:id');

    logger.error('No headers provided GET /api/users/:id!');

    res.json({ message: 'FORBIDDEN' });
  } // End if apiKey is not correct or not found.
};

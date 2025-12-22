import { Response } from 'express';
import { apiKey, storeError } from '@core/utils';
import { logger } from '@core/tools';
import { connection } from '@core/db';

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
      let getUser;
      connection.query(
        'SELECT * FROM users WHERE id = ?',
        [id],
        (err, results) => {
          getUser = results;
        }
      );

      if (getUser) {
        res.status(200).json(getUser);
      } else {
        res.status(404).json({ message: 'User not found' });
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

    res.status(401).json({ message: 'FORBIDDEN' });
  } // End if apiKey is not correct or not found.
};

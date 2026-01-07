import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { apiKey, privateToken, storeError, storeLog } from '@core/utils';
import { logger } from '@core/tools';
import bcrypt from 'bcryptjs';
import { connection } from '@core/db';

/**
 * Do a login check.
 *
 * @function doLogin
 * @async
 * @access Public
 * @route POST /login
 * @param { typedRequestedBody<IUsers> } req
 * @param { Response } res
 * @example doLogin(req, res);
 */
export const doLogin = async (req: typedRequestBody<IUsers>, res: Response) => {
  if (req.get('apiKey') === apiKey) {
    const { uname, psw } = req.body;

    const userObject: UsrObjJwt = {
      uname,
    };

    if (!uname || !psw) {
      // If the user did not fill in all the boxes.
      storeLog('Du måste fylla i alla rutor!', 'POST', '/login');
      res.status(404).json({ message: 'Du måste fylla i alla rutor!' });
    } else {
      // If the user filled in all the boxes.
      try {
        let user: any;
        connection.query(
          'SELECT * FROM users WHERE uname = ?',
          [uname],
          (err, results) => {
            user = results;
          }
        );

        console.log(user);

        const matchPsw = await bcrypt.compare(psw, user ? user.psw : '');

        if (!matchPsw) {
          storeError(
            'Det finns något fel i ditt användarnamn/lösenord.',
            'POST',
            '/api/auth/login'
          );

          res.status(404).json({
            message: 'Det finns något fel i ditt användarnamn/lösenord.',
          });
        } else {
          // Return accessToken.
          const accessToken: string = jwt.sign(
            userObject,
            privateToken as string
          );

          res.status(200).json({
            accessToken,
            user: {
              uname,
              fullname: user?.fullname,
              email: user?.email,
              mobnr: user?.mobnr,
              locked: user?.locked,
              avatar: user?.avatar,
              created_at: user?.created_at,
            },
          });
        }
      } catch (err: Error | unknown) {
        // If there is any error..
        storeError((err as Error).message, 'POST', '/api/auth/login');
        res.status(500).send({ message: (err as Error).message });
      }
    } // End if the user filled in all boxes.
  } // End if apiKey is found and correct.
  else {
    storeError('No headers provided!', 'POST', '/api/auth/login');

    logger.error('No headers provided POST /api/auth/login!');

    res.status(401).json({ message: 'FORBIDDEN' });
  } // End if apiKey is not correct or not found.
};

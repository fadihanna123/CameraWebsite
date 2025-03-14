import { prisma } from '@core/db';
import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { apiKey, privateToken, storeError, storeLog } from '@core/utils';
import { logger } from '@core/tools';
import bcrypt from 'bcryptjs';

/**
 * Do a login check.
 *
 * @function doLogin
 * @async
 * @access Public
 * @route POST /login
 * @param { typedRequestedBody<IUsers> } req
 * @param { Response } res
 * @returns { Promise<Response<any, Record<string, any>> | undefined> } Promise.
 * @example doLogin(req, res);
 */
export const doLogin = async (
  req: typedRequestBody<IUsers>,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  if (req.get('apiKey') === apiKey) {
    const { uname, psw } = req.body;

    const userObject: UsrObjJwt = {
      uname,
    };

    if (!uname || !psw) {
      // If the user did not fill in all the boxes.
      storeLog('Du måste fylla i alla rutor!', 'POST', '/login');
      res.json({ message: 'Du måste fylla i alla rutor!' });
    } else {
      // If the user filled in all the boxes.
      try {
        const user = await prisma.users.findFirst({
          where: {
            uname,
          },
        });

        const matchPsw = await bcrypt.compare(psw, user ? user.psw : '');

        if (!matchPsw) {
          storeError(
            'Det finns något fel i ditt användarnamn/lösenord.',
            'POST',
            '/api/auth/login'
          );

          res.json({
            message: 'Det finns något fel i ditt användarnamn/lösenord.',
          });
        } else {
          // Return accessToken.
          const accessToken = jwt.sign(userObject, privateToken!);

          res.json({
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
      } catch (err) {
        // If there is any error..
        storeError((err as Error).message, 'POST', '/api/auth/login');
        return res.status(500).send({ message: (err as Error).message });
      }
    } // End if the user filled in all boxes.
  } // End if apiKey is found and correct.
  else {
    storeError('No headers provided!', 'POST', '/api/auth/login');

    logger.error('No headers provided POST /api/auth/login!');

    res.json({ message: 'FORBIDDEN' });
  } // End if apiKey is not correct or not found.
};

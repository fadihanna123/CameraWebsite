import { prisma } from '@core/db';
import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { storeError, storeLog } from '@core/utils';

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
      const result = await prisma.users.findMany({
        where: {
          uname,
          psw,
        },
      });

      if (result.length === 0) {
        storeError(
          'Det finns något fel i ditt användarnamn/lösenord.',
          'POST',
          '/login'
        );

        res.json({
          message: 'Det finns något fel i ditt användarnamn/lösenord.',
        });
      } else {
        // Return accessToken.
        const accessToken = jwt.sign(userObject, process.env['Token']!);
        res.json({ accessToken, author: uname });
      }
    } catch (err) {
      // If there is any error..
      storeError((err as Error).message, 'POST', '/login');
      return res.status(500).send();
    }
  } // End if the user filled in all boxes.
};

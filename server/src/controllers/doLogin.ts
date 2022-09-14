import { prisma } from 'db';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UsrObjJwt } from 'models';
import striptags from 'striptags';
import { storeError } from 'utils/storeError';
import { storeLog } from 'utils/storeLog';

/**
 * Do a login check.
 *
 * @route POST /login
 * @param req
 * @param res
 * @returns Promise.
 */

export const doLogin = async (req: Request, res: Response) => {
  let { uname, psw } = req.body;
  const userObject: UsrObjJwt = {
    uname,
  };

  if (!uname || !psw) {
    // Om användaren inte fyllde i alla rutor.
    storeLog('Du måste fylla i alla rutor!', 'POST', '/login');
    res.json({ message: 'Du måste fylla i alla rutor!' });
  } else {
    // Om användaren fyllde i alla rutor.
    try {
      uname = striptags(uname);
      psw = striptags(psw);

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
        // Returnera accesToken.
        const accessToken = jwt.sign(userObject, process.env.Token as string);
        res.json({ accessToken, author: uname });
      }
    } catch (err) {
      // Om det finns något fel..
      storeError((err as Error).message, 'POST', '/login');
      return res.status(500).send();
    }
  } // Slut om användaren fyllde i alla rutor.
};

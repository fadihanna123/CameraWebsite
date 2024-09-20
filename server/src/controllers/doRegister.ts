import { prisma } from 'db';
import { Response } from 'express';
import { logger } from '@core/tools';
import { storeError, storeLog } from '@core/utils';
import validator from 'validator';
import * as path from 'path';

/**
 * Registration functionality.
 *
 * @function doRegister
 * @async
 * @route POST /register
 * @param { typedRequestedBody<IUsers> } req
 * @param { Response } res
 * @access Public
 * @returns { Promise<Response<any, Record<string, any>> | undefined> } Promise
 * @example doRegister(req, res);
 */
// deepcode ignore NoRateLimitingForExpensiveWebOperation: The fix is already there in server.ts.
export const doRegister = async (
  req: typedRequestBody<IUsers>,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { uname, email, mobnr, psw, repsw } = req.body;

  if (!uname || !email || !mobnr || !psw || !repsw) {
    // If the user did not fill in all required fields.
    storeError(
      'Du måste fylla i alla obligatoriska rutor!',
      'POST',
      '/register'
    );
    res.json({
      message: 'Du måste fylla i alla obligatoriska rutor!',
    });
  } else {
    // If the user filled in all required fields.
    if (!validator.isEmail(email)) {
      // If the email address is not written correctly.
      storeError(
        'Du måste fylla in en korrekt e-postadress!',
        'POST',
        '/register'
      );
      res.json({
        message: 'Du måste fylla in en korrekt e-postadress!',
      });
    } else {
      // If the email address is written correctly.
      if (
        !validator.isLength(psw, { min: 8 }) &&
        !validator.isLength(repsw, { min: 8 })
      ) {
        // If the password and confirm password fields do not contain strong passwords that are at least 8 characters long.
        storeError(
          'Du måste välja ett lösenord som är minst 8 tecken!',
          'POST',
          '/register'
        );

        res.json({
          message: 'Du måste välja ett lösenord som är minst 8 tecken!',
        });
      } else {
        // If the password and confirm Password fields contain strong passwords that have at least 8 characters.
        if (psw !== repsw) {
          // If the password and confirm password fields do not match.
          storeError(
            'Ditt lösenord matchar inte det bekräftade lösenordet.',
            'POST',
            '/register'
          );

          res.json({
            message: 'Ditt lösenord matchar inte det bekräftade lösenordet.',
          });
        } else {
          // If the password and confirm password fields match each other.
          const findUser = await prisma.users.count({
            where: {
              uname,
              email,
            },
          });

          if (findUser !== 0) {
            // If the user was found in the database.
            storeLog(
              'Du är redan registrerad hos oss. Du kan logga in ovan.',
              'POST',
              '/register'
            );

            res.json({
              message: 'Du är redan registrerad hos oss. Du kan logga in ovan.',
            });
          } else {
            // If the user was not found in the database.
            try {
              const avatar = (req as any).files.avatar
                ? (req as any).files.avatar
                : '';

              if (
                !(req as any).files ||
                Object.keys((req as any).files).length === 0
              ) {
                storeLog('Var vänlig välj en bild.', 'POST', '/register');
                return res.status(400).send('Var vänlig välj en bild.');
              }

              const UPLOAD_ROOT = path.resolve('src/uploads');
              const uploadPath = path.resolve(UPLOAD_ROOT, avatar.name);

              if (!uploadPath.startsWith(UPLOAD_ROOT)) {
                storeLog('Invalid upload path.', 'POST', '/register');
                return res.status(400).send('Invalid upload path.');
              }

              avatar.mv(uploadPath, avatar.name, (err: Error) => {
                if (err) {
                  return logger.error(err);
                }
              });

              const userModel = await prisma.users.create({
                data: {
                  uname,
                  email,
                  psw,
                  mobnr,
                  locked: 0,
                  avatar: avatar.name,
                },
              });

              if (userModel) {
                storeLog(
                  'Tack för registrering. \n Var vänlig och logga in.',
                  'POST',
                  '/register'
                );
                res.send({
                  message: 'Tack för registrering. \n Var vänlig och logga in.',
                });
              }
            } catch (error) {
              storeError((error as Error).message, 'POST', '/register');
              logger.error('\x1b[31m', (error as Error).message);
            }
          } // End if the user was not found in the database.
        } // End if password and confirm password fields match each other.
      } // End if password and confirm Password fields contain strong passwords that are at least 8 characters long.
    } // End if the email address is correctly written.
  } // End if the user filled in all required boxes.
};

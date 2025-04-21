import { logger } from '@core/tools';
import { apiKey, storeError, storeLog } from '@core/utils';
import { prisma } from 'db';
import { Response } from 'express';
import { DateTime } from 'luxon';
import * as path from 'path';
import validator from 'validator';
import bcrypt from 'bcryptjs';

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
  if (req.get('apiKey') === apiKey) {
    const { uname, fullname, email, mobnr } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const psw = await bcrypt.hash(req.body.psw, salt);
    const repsw = await bcrypt.hash(req.body.repsw, salt);

    if (!uname || !email || !mobnr || !psw || !repsw) {
      // If the user did not fill in all required fields.
      storeError(
        'Du måste fylla i alla obligatoriska rutor!',
        'POST',
        '/register'
      );
      res.json({
        message: 'Du måste fylla i alla obligatoriska rutor!',
        type: 'info',
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
          type: 'info',
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
            type: 'info',
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
              type: 'info',
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
                message:
                  'Du är redan registrerad hos oss. Du kan logga in ovan.',
                type: 'info',
              });
            } else {
              // If the user was not found in the database.
              try {
                const avatar = (req as any).files?.avatar ?? '';

                if (avatar) {
                  const UPLOAD_ROOT = path.resolve('./src/uploads');
                  const uploadPath = path.resolve(UPLOAD_ROOT, avatar.name);

                  avatar.mv(uploadPath, avatar.name, (err: Error) => {
                    if (err) {
                      return logger.error(err);
                    }

                    console.log('File Uploaded');
                  });

                  if (!uploadPath.startsWith(UPLOAD_ROOT)) {
                    storeLog('Invalid upload path.', 'POST', '/register');
                    return res.status(400).send('Invalid upload path.');
                  }
                }

                const created_at = DateTime.fromJSDate(new Date(), {
                  zone: 'Europe/Stockholm',
                }).toFormat('yyyy-MM-dd HH:mm');

                const userModel = await prisma.users.create({
                  data: {
                    uname,
                    email,
                    fullname,
                    psw,
                    mobnr,
                    locked: 0,
                    avatar: avatar.name,
                    created_at,
                  },
                });

                if (userModel) {
                  storeLog(
                    'Tack för registrering. \n Var vänlig och logga in.',
                    'POST',
                    '/register'
                  );
                  res.send({
                    message:
                      'Tack för registrering. \n Var vänlig och logga in.',
                    type: 'success',
                  });
                }
              } catch (error) {
                console.log(error);
              }
            } // End if the user was not found in the database.
          } // End if password and confirm password fields match each other.
        } // End if password and confirm Password fields contain strong passwords that are at least 8 characters long.
      } // End if the email address is correctly written.
    } // End if the user filled in all required boxes.
  } // End if apiKey is found and correct.
  else {
    storeError('No headers provided!', 'POST', '/api/auth/register');

    logger.error('No headers provided POST /api/auth/register!');

    res.json({ message: 'FORBIDDEN' });
  } // End if apiKey is not correct or not found.
};

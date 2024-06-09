import { prisma } from 'db';
import { Response } from 'express';
import { logger } from '@core/tools';
import { storeError, storeLog } from '@core/utils';
import validator from 'validator';

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
    // Om användaren inte fyllde i alla obligatoriska rutor.
    storeError(
      'Du måste fylla i alla obligatoriska rutor!',
      'POST',
      '/register'
    );
    res.json({
      message: 'Du måste fylla i alla obligatoriska rutor!',
    });
  } else {
    // Om användaren fyllde i alla obligatoriska rutor.
    if (!validator.isEmail(email)) {
      // Om e-postadressen är inte korrekt skriven.
      storeError(
        'Du måste fylla in en korrekt e-postadress!',
        'POST',
        '/register'
      );
      res.json({
        message: 'Du måste fylla in en korrekt e-postadress!',
      });
    } else {
      // Om e-postadressen är korrekt skriven.
      if (
        !validator.isLength(psw, { min: 8 }) &&
        !validator.isLength(repsw, { min: 8 })
      ) {
        // Om lösenord och bekräfta lösenord fälten inte innehåller starka lösenord som har minst 8 tecken.
        storeError(
          'Du måste välja ett lösenord som är minst 8 tecken!',
          'POST',
          '/register'
        );

        res.json({
          message: 'Du måste välja ett lösenord som är minst 8 tecken!',
        });
      } else {
        // Om lösenord och bekräfta lösenord fälten innehåller starka lösenord som har minst 8 tecken.
        if (psw !== repsw) {
          // Om lösenord och bekräfta lösenord fälten inte matchar varandra.
          storeError(
            'Ditt lösenord matchar inte det bekräftade lösenordet.',
            'POST',
            '/register'
          );

          res.json({
            message: 'Ditt lösenord matchar inte det bekräftade lösenordet.',
          });
        } else {
          // Om lösenord och bekräfta lösenord fälten matchar varandra.
          const findUser = await prisma.users.count({
            where: {
              uname,
              email,
            },
          });

          if (findUser !== 0) {
            // Om användaren hittades i databasen.
            storeLog(
              'Du är redan registrerad hos oss. Du kan logga in ovan.',
              'POST',
              '/register'
            );

            res.json({
              message: 'Du är redan registrerad hos oss. Du kan logga in ovan.',
            });
          } else {
            // Om användaren inte hittades i databasen.
            try {
              const file = (req as any).files.myFile
                ? (req as any).files.myFile
                : '';

              if (
                !(req as any).files ||
                Object.keys((req as any).files).length === 0
              ) {
                storeLog('Var vänlig välj en bild.', 'POST', '/register');
                return res.status(400).send('Var vänlig välj en bild.');
              }

              await file.mv(
                `./uploads/${file.name}`,
                file.name,
                (err: Error) => {
                  if (err) {
                    return logger.error(err);
                  }
                }
              );

              const userModel = await prisma.users.create({
                data: {
                  uname,
                  email,
                  psw,
                  mobnr,
                  locked: 0,
                  img: (req as any).files.img.name,
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
          } // Slut om användaren inte hittades i databasen.
        } // Slut om lösenord och bekräfta lösenord fälten matchar varandra.
      } // Slut lösenord och bekräfta lösenord fälten innehåller starka lösenord som har minst 8 tecken.
    } // Slut om e-postadressen är korrekt skriven.
  } // Slut om användaren fyllde i alla obligatoriska rutor.
};

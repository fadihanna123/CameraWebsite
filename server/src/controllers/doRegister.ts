import { prisma } from 'db';
import { Response } from 'express';
import { Request } from 'models/auth';
import striptags from 'striptags';
import { logger } from 'tools';
import validator from 'validator';

export const doRegister = async (req: Request, res: Response) => {
  const { uname, email, mobnr, psw, repsw } = req.body;

  if (!uname || !email || !mobnr || !psw || !repsw) {
    // Om användaren inte fyllde i alla obligatoriska rutor.
    res.json({ message: "Du måste fylla i alla obligatoriska rutor!" });
  } // Slut om användaren inte fyllde i alla obligatoriska rutor.
  else {
    // Om användaren fyllde i alla obligatoriska rutor.
    if (!validator.isEmail(email)) {
      // Om e-postadressen är inte korrekt skriven.
      res.json({ message: "Du måste fylla in en korrekt e-postadress!" });
    } // Slut om e-postadressen är inte korrekt skriven.
    else {
      // Om e-postadressen är korrekt skriven.
      if (
        !validator.isLength(psw, { min: 8 }) &&
        !validator.isLength(repsw, { min: 8 })
      ) {
        // Om lösenord och bekräfta lösenord fälten inte innehåller starka lösenord som har minst 8 tecken.
        res.json({
          message: "Du måste välja ett lösenord som är minst 8 tecken!",
        });
      } // Slut om lösenordet och bekräfta lösenord fälten inte innehåller starka lösenord som har minst 8 tecken.
      else {
        // Om lösenord och bekräfta lösenord fälten innehåller starka lösenord som har minst 8 tecken.
        if (psw !== repsw) {
          // Om lösenord och bekräfta lösenord fälten inte matchar varandra.
          res.json({
            message: "Ditt lösenord matchar inte det bekräftade lösenordet.",
          });
        } // Slut om lösenord och bekräfta lösenord fälten inte matchar varandra.
        else {
          // Om lösenord och bekräfta lösenord fälten matchar varandra.
          const findUser = await prisma.users.findMany({
            where: {
              uname,
              email,
            },
          });

          if (findUser !== null) {
            // Om användaren hittades i databasen.
            res.json({
              message: "Du är redan registrerad hos oss. Du kan logga in ovan.",
            });
          } // Slut om användaren hittades i databasen.
          else {
            // Om användaren inte hittades i databasen.
            try {
              const file = (req as any).files.myFile
                ? (req as any).files.myFile
                : "";

              if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send("Var vänlig välj en bild.");
              }

              await file.mv(
                "./uploads/" + file.name,
                file.name,
                (err: Error) => {
                  if (err) return logger.error(err);
                }
              );

              const UserModel = await prisma.users.create({
                data: {
                  uname: striptags(uname),
                  email: striptags(email),
                  psw: striptags(psw),
                  mobnr: striptags(mobnr),
                  locked: 0,
                  img: (req as any).files.img.name,
                },
              });

              if (UserModel) {
                res.send({
                  message: "Tack för registrering. \n Var vänlig och logga in.",
                });
              }
            } catch (error) {
              logger.error("\x1b[31m", (error as Error).message);
            }
          } // Slut om användaren inte hittades i databasen.
        } // Slut om lösenord och bekräfta lösenord fälten matchar varandra.
      } // Slut lösenord och bekräfta lösenord fälten innehåller starka lösenord som har minst 8 tecken.
    } // Slut om e-postadressen är korrekt skriven.
  } // Slut om användaren fyllde i alla obligatoriska rutor.
};

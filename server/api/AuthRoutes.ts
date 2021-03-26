import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import validator from "validator";
import { sha256 } from "crypto-hash";
import striptags from "striptags";
import { router } from "../config";
import { Users } from "../models";
import { IUsers, Request } from "../typings";
import multer from "multer";
const upload = multer({ dest: "/uploads/" });
import fs from "fs";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const Header = req.headers.authorization;
  const token = Header && Header.split(" ")?.[1];
  if (!token) return res.sendStatus(401);
  try {
    const user = jwt.verify(token, <string>process.env.Token);
    req.user = user as IUsers;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

// Inloggningskontroll.
router.post("/login", async (req: Request, res: Response) => {
  let { uname, psw } = req.body;
  const userObject: { uname: string } = {
    uname: uname,
  };

  if (!uname || !psw) {
    // Om användaren inte fyllde i alla rutor.
    res.json({ message: "Du måste fylla i alla rutor!" });
  } // Slut om användaren inte fyllde i alla rutor.
  else {
    // Om användaren fyllde i alla rutor.
    try {
      uname = striptags(uname);
      psw = await sha256(striptags(req.body.psw));
      const result = await Users.findOne({
        uname,
        psw,
      });
      if (!result) {
        res.json({
          message: "Det finns något fel i ditt användarnamn/lösenord.",
        });
      }

      if (result) {
        // Returnera accesToken.
        const accessToken = jwt.sign(userObject, <string>process.env.Token);
        res.json({ accessToken: accessToken, author: uname });
      }
    } catch (err) {
      // Om det finns något fel..
      return res.status(500).send();
    }
  } // Slut om användaren fyllde i alla rutor.
});

// Registreringsprocess.

router.post(
  "/register",
  upload.single("img"),
  async (req: Request, res: Response, next: NextFunction) => {
    const { uname, email, mobnr, psw, repsw, img } = req.body;

    if (!uname || !email || !mobnr || !psw || !repsw || !img) {
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
            const findUser = await Users.findOne({
              $or: [{ uname }, { email }],
            });
            if (findUser !== null) {
              // Om användaren hittades i databasen.
              res.json({
                message:
                  "Du är redan registrerad hos oss. Du kan logga in ovan.",
              });
            } // Slut om användaren hittades i databasen.
            else {
              // Om användaren inte hittades i databasen.
              try {
                const UserModel: IUsers = new Users({
                  uname: striptags(req.body.uname),
                  email: striptags(req.body.email),
                  psw: await sha256(striptags(req.body.psw)),
                  mobnr: striptags(req.body.mobnr),
                  locked: 0,
                  img: req.body.img.substr(12),
                });

                await UserModel.save();
              } catch (error) {
                console.log("\x1b[31m", error.message);
              }
            } // Slut om användaren inte hittades i databasen.
          } // Slut om lösenord och bekräfta lösenord fälten matchar varandra.
        } // Slut lösenord och bekräfta lösenord fälten innehåller starka lösenord som har minst 8 tecken.
      } // Slut om e-postadressen är korrekt skriven.
    } // Slut om användaren fyllde i alla obligatoriska rutor.
  }
);

export default router;
function hash256(psw: any): any {
  throw new Error("Function not implemented.");
}

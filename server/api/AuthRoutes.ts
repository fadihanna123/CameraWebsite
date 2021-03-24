import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import validator from "validator";

import { router } from "../config";
import { Users } from "../models";
import { IUsers, Request } from "../typings";

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
  const { uname, psw } = req.body;
  const userObject: {} = {
    uname: uname,
  };

  if (!uname || !psw) {
    // Om användaren inte fyllde i alla rutor.
    res.json({ message: "Du måste fylla i alla rutor!" });
  } // Slut om användaren inte fyllde i alla rutor.
  else {
    // Om användaren fyllde i alla rutor.
    try {
      const result = await Users.findOne({ uname, psw });
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
router.post("/register", async (req: Request, res: Response) => {
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
          const findUser = await Users.findOne({ uname });
        } // Slut om lösenord och bekräfta lösenord fälten matchar varandra.
      } // Slut lösenord och bekräfta lösenord fälten innehåller starka lösenord som har minst 8 tecken.
    } // Slut om e-postadressen är korrekt skriven.
  } // Slut om användaren fyllde i alla obligatoriska rutor.
});

export default router;

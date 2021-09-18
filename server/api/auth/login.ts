import { sha256 } from "crypto-hash";
import { Response, Router } from "express";
import jwt from "jsonwebtoken";
import striptags from "striptags";

import { Users } from "../../models";
import { Request } from "../../typings";

const router: Router = Router();

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

export default router;

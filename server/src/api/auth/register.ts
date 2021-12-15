import { Router } from "express";

import { doRegister } from "../../controllers";

const router: Router = Router();

// Registreringsprocess.
router.post("/register", doRegister);

export default router;

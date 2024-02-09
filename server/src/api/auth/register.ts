import { Router } from 'express';

import { doRegister } from '../../controllers';
import { rateLimit } from 'express-rate-limit';

const router: Router = Router();

// Registreringsprocess.
router.post(
  '/register',
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  }),
  doRegister
);

export default router;

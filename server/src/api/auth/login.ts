import { Router } from 'express';

import { doLogin } from '../../controllers';

const router: Router = Router();

// Inloggningskontroll.
router.post('/login', doLogin);

export default router;

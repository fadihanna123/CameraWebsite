import { Router } from 'express';

import { doRegister } from '@core/controllers';

const router: Router = Router();

// Registration process
router.post<Routes>('/register', doRegister);

export default router;

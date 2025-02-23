import { Router } from 'express';

import { doLogin, doRegister } from '@core/controllers';

const router = Router();

// Login control
router.post<Routes>('/login', doLogin);
// Registration process
router.post<Routes>('/register', doRegister);

export default router;

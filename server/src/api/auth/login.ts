import { Router } from 'express';

import { doLogin } from '@core/controllers';

const router = Router();

// Login control
router.post<Routes>('/login', doLogin);

export default router;

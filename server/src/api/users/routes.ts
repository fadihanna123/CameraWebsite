import { Router } from 'express';

import { verifyToken, getAllUsers } from '@core/controllers';

const router = Router();

// Get all users
router.get<Routes>('/', verifyToken, getAllUsers);
// Get a user data by id
router.post<Routes>('/:id');

export default router;

import { Router } from 'express';

import { verifyToken, getAllUsers } from '@core/controllers';
import { getUserById } from '@core/controllers/getUserById';

const router = Router();

// Get all users
router.get<Routes>('/', verifyToken, getAllUsers);
// Get a user data by id
router.get<Routes>('/:id', verifyToken, getUserById);

export default router;

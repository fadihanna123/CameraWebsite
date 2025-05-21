import { Router } from 'express';

import { verifyToken, getAllUsers } from '@core/controllers';
import { getUserById } from '@core/controllers/getUserById';

const router = Router();

// Get all users
router.get('/', verifyToken, getAllUsers);
// Get a user data by id
router.get('/:id', verifyToken, getUserById);

export default router;

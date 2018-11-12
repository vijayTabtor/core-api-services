
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import express from 'express';

import * as UserController from '../controllers/user';


const router = new express.Router();

router.post('/signup', UserController.create);
router.delete('/:userId', UserController.remove);
router.get('/', UserController.userList);

export default router;
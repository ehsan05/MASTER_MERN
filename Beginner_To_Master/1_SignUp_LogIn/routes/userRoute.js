//Global Imports
import express from 'express';
//Internal Imports
import { signin, signup } from '../Controllers/UserController.js';



const userRouter = express.Router();

userRouter.post('/signup', signup);

userRouter.post('/login', signin);

export default userRouter;

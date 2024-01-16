import express from 'express';

import home from '../controllers/homecontroller.js';
import signup from '../controllers/userController/signupcontroller.js';
import login from '../controllers/userController/logincontroller.js'; 
import reset from '../controllers/userController/resetcontroller.js';
import contact from '../controllers/userController/contactcontroller.js';
import about  from '../controllers/userController/aboutcontroller.js';

const router = express.Router();



router.get('/',home);

router.get("/home",home);

router.get('/signup',signup);

router.get('/login',login);

router.get('/reset',reset);

router.get('/contact',contact);

router.get('/about',about);



export default router;
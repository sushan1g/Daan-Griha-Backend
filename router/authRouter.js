import express from 'express';
// const home = require('../controllers/authControllers');
import home from '../controllers/authControllers.js';
import signup from '../controllers/authControllers.js';
import login from '../controllers/authControllers.js'; 
import reset from '../controllers/authControllers.js';
import contact from '../controllers/authControllers.js';
import about  from '../controllers/authControllers.js';

const router = express.Router();



router.route('/').get(home);

router.route('/home').get(home);

router.route('/signup').get(signup);

router.route('/login').get(login);

router.route('/reset').get(reset);

router.route('/contact').get(contact);

router.route('/about').get(about);



export default router;
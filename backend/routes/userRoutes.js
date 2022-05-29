import express from 'express';
import { registerUser } from '../controllers/userControllers';
const router = express.Router();

router.route('/register').post(registerUser);
// router.post('/login', loginUser);

module.exports = router;

import express from 'express';
import { registerUser, authUser } from '../controllers/userControllers';
import { protect } from '../middlewares/authMiddleware';
import { fetchRegisterData } from '../controllers/profileControllers';
const router = express.Router();

router.route('/register').get(protect);
router.route('/register').post(registerUser);
router.post('/login', authUser);
router.route('/:userId').get(protect, fetchRegisterData);

module.exports = router;

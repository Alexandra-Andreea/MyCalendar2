import express from 'express';
import { registerUser, authUser, allUsers } from '../controllers/userControllers';
import { protect } from '../middlewares/authMiddleware';
const router = express.Router();

router.route('/register').get(protect, allUsers);
router.route('/register').post(registerUser);
router.post('/login', authUser);

module.exports = router;

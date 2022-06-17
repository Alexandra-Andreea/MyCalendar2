import express from 'express';
import { registerUser, authUser } from '../controllers/userControllers';
import { protect } from '../middlewares/authMiddleware';
import { fetchRegisterData, updateProfileData } from '../controllers/profileControllers';
import { fetchTasks, addTask, deleteTask, checkTask } from '../controllers/taskControllers';
const router = express.Router();

router.route('/register').get(protect);
router.route('/register').post(registerUser);
router.post('/login', authUser);
router.route('/:userId').get(protect, fetchRegisterData);
router.route('/profile').put(protect, updateProfileData);
router.route('/task/:userId').get(protect, fetchTasks);
router.route('/addTask').put(protect, addTask);
router.route('/deleteTask').put(protect, deleteTask);
router.route('/checkTask').put(protect, checkTask);

module.exports = router;

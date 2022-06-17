import express from 'express';
import { protect } from '../middlewares/authMiddleware';
import { registerUser, authUser } from '../controllers/userControllers';
import { fetchRegisterData, updateProfileData } from '../controllers/profileControllers';
import { fetchTasks, addTask, deleteTask, checkTask } from '../controllers/taskControllers';
import { fetchNotes, addNote, deleteNote, editNote } from '../controllers/noteController';
import { fetchEvents, addEvent, deleteEvent, editEvent } from '../controllers/calendarController';
const router = express.Router();

// login
router.post('/login', authUser);

// register
//router.route('/register').get(protect);
router.route('/register').post(protect, registerUser);

// profile settings
router.route('/:userId').get(protect, fetchRegisterData);
router.route('/profile').put(protect, updateProfileData);

// task
router.route('/task/:userId').get(protect, fetchTasks);
router.route('/addTask').put(protect, addTask);
router.route('/deleteTask').put(protect, deleteTask);
router.route('/checkTask').put(protect, checkTask);

// note
router.route('/note/:userId').get(protect, fetchNotes);
router.route('/addNote').put(protect, addNote);
router.route('/deleteNote').put(protect, deleteNote);
// router.route('/editNote').put(protect, editNote);

// calendar
router.route('/calendar/:userId').get(protect, fetchEvents);
router.route('/addEvent').put(protect, addEvent);
router.route('/deleteEvent').put(protect, deleteEvent);
// router.route('/editEvent').put(protect, editEvent);

// milestone

module.exports = router;

import express from 'express';
import { protect } from '../middlewares/authMiddleware';
import { registerUser, authUser } from '../controllers/userControllers';
import { fetchRegisterData, updateProfileData } from '../controllers/profileControllers';
import { fetchTasks, addTask, deleteTask, checkTask, editTask } from '../controllers/taskControllers';
import { fetchNotes, addNote, deleteNote, editNote } from '../controllers/noteController';
import { fetchEvents, addEvent, deleteEvent, editEvent } from '../controllers/calendarController';
import { fetchMilestones, addMilestone, deleteMilestone, checkMilestone } from '../controllers/milestoneController'
const router = express.Router();

// login
router.post('/login', authUser);

// register
router.route('/register').get(protect);
router.route('/register').post(registerUser);

// profile settings
router.route('/:userId').get(protect, fetchRegisterData);
router.route('/profile').put(protect, updateProfileData);

// task
router.route('/task/:userId').get(protect, fetchTasks);
router.route('/addTask').put(protect, addTask);
router.route('/deleteTask').put(protect, deleteTask);
router.route('/checkTask').put(protect, checkTask);
router.route('/editTask').put(protect, editTask);
// router.route('/updateFeedback').put(protect, updateFeedback);

// note
router.route('/note/:userId').get(protect, fetchNotes);
router.route('/addNote').put(protect, addNote);
router.route('/deleteNote').put(protect, deleteNote);
router.route('/editNote').put(protect, editNote);

// calendar
router.route('/calendar/:userId').get(protect, fetchEvents);
router.route('/addEvent').put(protect, addEvent);
router.route('/deleteEvent').put(protect, deleteEvent);
// router.route('/editEvent').put(protect, editEvent);

// dashboard/milestone
router.route('/dashboard/:userId').get(protect, fetchMilestones);
router.route('/addMilestone').put(protect, addMilestone);
router.route('/deleteMilestone').put(protect, deleteMilestone);
router.route('/checkMilestone').put(protect, checkMilestone);

module.exports = router;

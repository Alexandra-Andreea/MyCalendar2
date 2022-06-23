import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import TaskChart from './TaskChart';
import Milestone from './Milestone';
import './DashboardStyle.scss';
import EventItem from './EventItem';
import TaskItem from './TaskItem';
import NoteItem from './NoteItem';

const Dashboard = () => {
    const [username, setUsername] = useState();
    const [feedback, setFeedback] = useState(0);
    const [tasks, setTasks] = useState();
    const [notes, setNotes] = useState();
    const [events, setEvents] = useState();
    const [milestones, setMilestones] = useState();
    let [inProgress, setInProgress] = useState(0);
    let [completed, setCompleted] = useState(0);
    const today = new Date(dayjs());

    const fetchData = async () => {
        const user = localStorage.getItem("userInfo");
        const userId = JSON.parse(user)._id
        const token = JSON.parse(user).token;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const {data} = await axios.get
            (
                `/api/user/dashboard/${userId}`,
                config
            );
            
            setUsername(data.username);
            setFeedback(data.feedback);
            setMilestones(data.milestones);
            setEvents(data.events);
            setTasks(data.tasks);
            setNotes(data.notes);

        } catch (error) {
            alert('Error occured!');
        };
    };

    function computeFeedback () {
        setCompleted(0);
        setInProgress(0);

        tasks?.map((task, i) => {
            if (task.completeTask === true) 
                setCompleted(completed++);
            else 
                setInProgress(inProgress++);
        })

        console.log(inProgress, completed);
    };

    const renderEvents = () => {
        return events?.map((event, i) => {
            let day = new Date(event.startDateEvent);

            if (day.getDate() === today.getDate())
                return <EventItem key={i} event={event}/>
        });
    };

    const renderTasks = () => {
        return tasks?.map((task, i) => {
            if (task.completeTask === false)
                return <TaskItem key={i} task={task}/>
        });
    };


    const renderNotes = () => {
        return notes?.map((note, i) => {
            if (i <= 2)
                return <NoteItem key={i} note={note}/>
        });
    };

    useEffect (() => {
        fetchData();
        
    }, []);

   return (
        <div className='dashboard-style'>
            <header className='dashboard-header'>
                <h3 className='display-current-day rounded border border-light'>
                    {dayjs().format('DD MMMM YYYY')}
                </h3>

                <h3 className='welcome-message' style={{marginLeft: '40%'}}>
                    Good to see you, {username}
                </h3>
            </header>

            <div className='line'></div>

            <div className='middle-style'>
                <Milestone {... milestones}/>
                <TaskChart/>
            </div>

            <div className='display-events rounded'>
                <h3>Your today events</h3>
                {renderEvents()}
            </div>

            <div className='display-tasks rounded'>
                <h3>Your tasks that need to be finished</h3>
                {renderTasks()}
            </div>

            <div className='display-notes rounded'>
                <h3>Your most recent notes</h3>
                {renderNotes()}
            </div>
        </div>
   );
   
};

export default Dashboard;
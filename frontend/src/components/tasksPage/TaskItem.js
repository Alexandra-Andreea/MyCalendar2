import React, { useState, useContext } from 'react';
import moment from 'moment';
import axios from 'axios';
import GlobalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';

function TaskItem ({task}) {
    const [completeTask, setCompleteTask] = useState(task.completeTask);
    const { setShowCreateTaskModal } = useContext(GlobalContext);

    if (!task.startDateTask) {
        task.startDateTask = dayjs(new Date()).format('DD-MM-YYYY');
    }

    if (!task.endDateTask) {
        task.endDateTask = dayjs(new Date()).format('DD-MM-YYYY');
    }

    // if (!task.endHourTask) {
    //     task.endHourTask = (dayjs(task.endDateTask).hour(12)).format('HH-MM');
    // }

    const deleteTask = async () => {
        const user = localStorage.getItem("userInfo");
        const _id = JSON.parse(user)._id
        const token = JSON.parse(user).token;
        const nameTask = task.nameTask;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.put(
                "/api/user/deleteTask",
                { _id, nameTask},
                config
            );

        } catch (error) {
            alert('Error occured!');
        };
    };

    async function checkComplete () {
        const user = localStorage.getItem("userInfo");
        const _id = JSON.parse(user)._id
        const token = JSON.parse(user).token;
        const nameTask = task.nameTask;
        const check = task.completeTask;
        setCompleteTask(!check);


        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.put(
                "/api/user/checkTask",
                { _id, nameTask, completeTask},
                config
            );

        } catch (error) {
            alert('Error occured!');
        };
    }

   return (
        <div
            className='task-item border border-light'
            style={{
                backgroundColor: completeTask === true ? 'grey' : '#6afa66'
            }}>
            <span>
                <button className='close-button btn' onClick={checkComplete}>
                    <span className='far fa-solid fa-circle-check'></span>
                </button>
            </span>

            <span>
                {task.nameTask}
            </span>

            <span>
                {task.descriptionTask}
            </span>

            <span>
                Start at {moment(task.startDateTask).format('DD-MM-YYYY')}
            </span>

            <span>
                End at {moment(task.endDateTask).format('DD-MM-YYYY')} 
            </span>

            <span>
                Due to {moment(task.endHourTask).format('HH:MM')}
            </span>

            <span>
                <button className='edit-delete-button btn' onClick={deleteTask}>
                    <span className='far fa-solid fa-trash-can'></span>
                </button>
            </span>
        </div>
        
        
   );
};

export default TaskItem;
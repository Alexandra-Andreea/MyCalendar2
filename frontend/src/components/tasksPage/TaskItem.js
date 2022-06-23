import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import dayjs from 'dayjs';

function TaskItem ({task}) {
    const [nameTask, setNameTask] = useState(task.nameTask);
    const [descriptionTask, setDescriptionTask] = useState(task.descriptionTask);
    const [startDateTask, setStartDateTask] = useState(task.startDateTask);
    const [endDateTask, setEndDateTask] = useState(task.endDateTask);
    const [endHourTask, setEndHourTask] = useState(task.endHourTask);
    const [completeTask, setCompleteTask] = useState(task.completeTask);

    if (!startDateTask)
        startDateTask = dayjs(new Date()).format('dd-mm-yyyy');


    if (!task.endDateTask)
        task.endDateTask = dayjs(new Date()).format('DD-MM-YYYY');

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
    };

    const editTask = async () => {
        console.log(task);

        const user = localStorage.getItem("userInfo");
        const _id = JSON.parse(user)._id
        const token = JSON.parse(user).token;
        const oldDescriptionTask = task.descriptionTask;

        console.log(descriptionTask);

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.put(
                "/api/user/editTask",
                { _id, oldDescriptionTask, descriptionTask},
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
                <input
                    className='input-style task-input'
                    type='text'
                    value={nameTask}
                    onChange={(e) => setNameTask(e.target.value)}
                    required
                    />
            </span>

            <span>
                <input
                    className='task-input input-style'
                    type='text'
                    value={descriptionTask}
                    onChange={(e) => setDescriptionTask(e.target.value)}
                    required
                    />
            </span>

            <span>
                <input
                    className="form-control input-style task-input"
                    type="date"
                    value={startDateTask}
                    onChange={(e) => setStartDateTask(e.target.value)}
                    />
            </span>

            <span>
                <input
                    className="form-control input-style task-input"
                    type="date"
                    value={endDateTask}
                    onChange={(e) => setEndDateTask(e.target.value)}
                    />
            </span>

            <span>
                <input
                    className="form-control input-style task-input"
                    type="time"
                    value={endHourTask}
                    onChange={(e) => setEndHourTask(e.target.value)}
                    />
            </span>

             <span>
                <button className='edit-delete-button btn' onClick={editTask}>
                    <span className='far fa-solid fa-pen-to-square'></span>
                </button>

                <button className='edit-delete-button btn' onClick={deleteTask}>
                    <span className='far fa-solid fa-trash-can'></span>
                </button>
            </span>

           
        </div>
   );
};

export default TaskItem;
import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import './TaskStyle.scss';
import TaskHeader from './TaskHeader';

export function TaskForm() {
    const [tasks, setTasks] = useState();

    const fetchTasks = async () => {
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
                `/api/user/task/${userId}`,
                config
            );

            setTasks(data.tasks);

            renderTasks();

        } catch (error) {
            alert('Error occured!');
        };
    };

    const renderTasks = () => {
        console.log(tasks);

        if (tasks) {
            return tasks.map((task, i) => {
                return <TaskItem key={i} task={task}/>
            })
        }
    };

    useEffect (() => {
        fetchTasks();
    }, []);

    return (
        <>
            <div className='form-style'>
                <TaskHeader/>
                <div className='list-items'>
                    {renderTasks()}
                </div>
            </div>
        </>
    );
};

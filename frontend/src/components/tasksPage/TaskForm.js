import React, {useState, useEffect, setState} from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import './TaskStyle.scss';
import TaskHeader from './TaskHeader';

export function TaskForm() {
    const [tasks, setTasks] = useState();
    const [ dislayTask, setDisplayTask ] = useState(0)

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
        if (tasks) {
            return tasks.map((task, i) => {
                if (dislayTask === 0)
                    return <TaskItem key={i} task={task}/>
                else if (dislayTask === 1 && task.completeTask === false)
                    return <TaskItem key={i} task={task}/>
                else if (dislayTask === 2 && task.completeTask === true)
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
                <TaskHeader setDisplayTask={setDisplayTask}/>
                <div className='list-items'>
                    {renderTasks()}
                </div>
            </div>
        </>
    );
};

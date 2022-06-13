import React, { useEffect, useState } from 'react';
import './TodoStyle.scss';
import axios from 'axios';
import TodoItem from './Item';

const TodoForm = () => {

    const [todos, setTodos] = useState([]);

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

            const { data } = await axios.get(
                `/api/user/task/${userId}`,
                config
            );

            setTodos(data.tasks);
        } catch (error) {
            alert('Error occured!');
        };
    };

    const renderTodos = () => {
        return todos.map((todo, i) => {
            return <TodoItem key={i} todo={todo} />
        })
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return <div className='todo-list-style'>
        <div>
            {renderTodos()}
        </div>
    </div>
};

export default TodoForm;
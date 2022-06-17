import React, {useState, useContext} from 'react';
import './TaskStyle.scss';
import GlobalContext from '../../context/GlobalContext';
import axios from 'axios';

const CreateTaskModal = () => {
    const [nameTask, setNameTask] = useState();
    const [descriptionTask, setDescriptionTask] = useState('');
    const [startDateTask, setStartDateTask] = useState();
    const [endDateTask, setEndDateTask] = useState();
    const [endHourTask, setEndHourTask] = useState();
    const {setShowCreateTaskModal} = useContext(GlobalContext);

    const createTask = async () => {
        const user = localStorage.getItem("userInfo");
        const _id = JSON.parse(user)._id
        const token = JSON.parse(user).token;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.put(
                "/api/user/addTask",
                { _id, nameTask, descriptionTask, startDateTask, endDateTask, endHourTask},
                config
            );

            if(data) {
                console.log(data);
            }

        } catch (error) {
            alert('Error occured!');
        };
    }
    
    return (
        <div className='create-task-modal'>
            <form className='form-create-task'>
                <header className='header-create-task'>
                    <span className='drag-handle-icon far fa-solid fa-grip-lines'></span>
                    <button
                        className='close-button btn btn-light'
                        onClick={() => setShowCreateTaskModal(false)}>
                        <span className='far fa-solid fa-xmark'></span>
                    </button>
                </header>

                <div className='create-task-body'>
                    <input
                        className='input-style'
                        type='text'
                        placeholder='Add title to the task'
                        value={nameTask}
                        onChange={(e) => setNameTask(e.target.value)}
                        required
                        />

                    <textarea
                        className='input-style'
                        cols='30'
                        rows='5'
                        placeholder='Add description to the task'
                        value={descriptionTask}
                        onChange={(e) => setDescriptionTask(e.target.value)} />

                    <label className='label-style'>Start date</label>
                    <input
                        className="form-control input-style"
                        type="date"
                        value={startDateTask}
                        onChange={(e) => setStartDateTask(e.target.value)}
                        />

                    <label className='label-style'>End date</label>
                    <input
                        className="form-control input-style"
                        type="date"
                        value={endDateTask}
                        onChange={(e) => setEndDateTask(e.target.value)}
                        />

                    <label className='label-style'>Due to </label>
                    <input
                        className="form-control input-style"
                        type="time"
                        value={endHourTask}
                        onChange={(e) => setEndHourTask(e.target.value)}
                        />

                    <div className="text-center">
                        <button
                            className="btn btn-outline-success"
                            type="button"
                            onClick={createTask}>
                            Create Task
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default CreateTaskModal;
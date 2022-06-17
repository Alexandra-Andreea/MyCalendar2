import React, {useContext} from 'react';
import './TaskStyle.scss'
import '@fortawesome/fontawesome-free/js/all.js';
import GlobalContext from '../../context/GlobalContext';
import CreateTaskModal from './InsertTaskModal';

export default function TaskHeader () {
    const {showCreateTaskModal, setShowCreateTaskModal} = useContext(GlobalContext);

    return (
        <div id='header-style'>
        <header className='task-header'>
            <button
                className='create-task-button btn btn-primary btn-lg'
                onClick={() => setShowCreateTaskModal(true)} >
                <span className='icon fa-solid fa-circle-plus'></span>
                <span className='create-text-style'>Create Task</span>
            </button>

            <React.Fragment>
                {showCreateTaskModal && <CreateTaskModal />}
            </React.Fragment>

            <div className="btn-group filter-button" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-light">All</button>
                <button type="button" className="btn btn-light">In progress</button>
                <button type="button" className="btn btn-light">Completed</button>
            </div>
        </header>
        </div>
    )
};
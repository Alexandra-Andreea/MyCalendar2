import React, {useContext} from 'react';
import './TaskStyle.scss'
import '@fortawesome/fontawesome-free/js/all.js';
import GlobalContext from '../../context/GlobalContext';
import CreateTaskModal from './InsertTaskModal';

export default function TaskHeader ({setDisplayTask}) {
    const {showCreateTaskModal, setShowCreateTaskModal } = useContext(GlobalContext);

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

                <button type="button" className="btn btn-display" onClick={ () => setDisplayTask(0) }>All</button>
                <button type="button" className="btn btn-display" onClick={ () => setDisplayTask(1) }>In progress</button>
                <button type="button" className="btn btn-display" onClick={ () => setDisplayTask(2) }>Completed</button>
            </header>
        </div>
    )
};
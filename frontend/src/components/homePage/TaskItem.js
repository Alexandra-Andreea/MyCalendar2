import React, { useState} from 'react';
import './DashboardStyle.scss';

function TaskItem ({task}) {
    const [nameTask] = useState(task.nameTask);
    const [descriptionTask] = useState(task.descriptionTask);
    const [endHourTask] = useState(task.endHourTask);

    console.log(Date(endHourTask));

    return (
        <div className='task-item border border-light'>
            <span>
                {nameTask}
            </span>

            <span>
                {descriptionTask}
            </span>

            {/* <span>
                {endHourTask}
            </span> */}
        </div>
    );
};

export default TaskItem;
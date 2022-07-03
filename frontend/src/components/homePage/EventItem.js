import React, { useState} from 'react';
import './DashboardStyle.scss';

function EventItem ({event}) {
    const [nameEvent] = useState(event.nameEvent);
    const [descriptionEvent] = useState(event.descriptionEvent);
    const [startHourEvent] = useState(event.startHourEvent);
    const [endHourEvent] = useState(event.endDateEvent);

    return (
        <div className='event-item border border-light'>
            <span>
                {nameEvent} 
            </span>

            {/* <span>
                {descriptionEvent}
            </span>

            <span>
                {startHourEvent}
            </span>

            <span>
                {endHourEvent}
            </span> */}
        </div>
    );
};

export default EventItem;
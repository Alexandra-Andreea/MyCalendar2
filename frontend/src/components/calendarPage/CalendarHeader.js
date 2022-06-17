import React, {useContext} from 'react';
import './CalendarStyle.scss'
import '@fortawesome/fontawesome-free/js/all.js';
import GlobalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';

export default function CalendarHeader () {
    const {monthIndex, setMonthIndex, setShowCreateEventModal} = useContext(GlobalContext);

    function handelePrevMonth () {
        setMonthIndex(monthIndex - 1);
    }

    function handleNextMonth () {
        setMonthIndex(monthIndex + 1);
    }

    function handleReset () {
        setMonthIndex(dayjs().month());
    }

    return (
        <header id='calendar-header-style'>
            <button className='today-button btn btn-primary btn-lg' onClick={handleReset}>Today</button>
            
            <button className='left-arrow btn btn-light' onClick={handelePrevMonth}>
                <span className="far fa-solid fa-circle-arrow-left"></span>
            </button>
            <button className='right-arrow btn btn-light' onClick={handleNextMonth}>
                <span className="far fa-solid fa-circle-arrow-right"></span>
            </button>

            <h2 className='display-month-style'>
                {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
            </h2>

            <button
                className='create-event-button btn btn-primary btn-lg'
                onClick={() => setShowCreateEventModal(true)} >
                <span className='icon fa-regular fa-calendar-plus'></span>
                <span className='create-text-style'>Create Event</span>
            </button>
            
        </header>
    )
};
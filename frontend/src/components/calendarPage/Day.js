import React from 'react';
import './CalendarStyle.scss'
import dayjs from 'dayjs';

export default function Days ({day, rowIdx}) {
    function getCurrentDayClass() {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'current-day-style' : ''
    }

    return (
        <div id='day-style' className='border border-secondary d-flex flex-column'>
            <header className='header-style'>
                {rowIdx === 0 && (
                    <p className='day-name'>{day.format('ddd').toUpperCase()}</p>
                )}
                <p className={`day-item ${getCurrentDayClass()} `}>
                    {day.format('DD')}
                </p>
            </header>
        </div>
    )
};
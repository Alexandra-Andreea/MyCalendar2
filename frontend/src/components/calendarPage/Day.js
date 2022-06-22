import React, { useContext } from 'react';
import './CalendarStyle.scss'
import dayjs from 'dayjs';
import GlobalContext from '../../context/GlobalContext';

export default function Days ({day, rowIdx}) {
    const { setShowCreateEventModal } = useContext(GlobalContext);

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

            <div className='' onClick={() => setShowCreateEventModal(true)}>
                
            </div>
        </div>
    )
};
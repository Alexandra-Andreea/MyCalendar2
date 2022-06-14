import React from 'react';
import Day from './Day';
import './CalendarStyle.scss'

export default function Month ({month}) {
    console.log(month);

    return (
        <div id='month-syle' >
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day day={day} key={idx} rowIdx={i}/>
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
};
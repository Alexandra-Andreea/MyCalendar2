import React, {useState} from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

export default function ContextWrapper (props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [showCreatEventModal, setShowCreateEventModal] = useState(false);
    const [daySelected, setDaySelected] = useState(null);
    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
    const [showEditTaskModal, setShowEditTaskModal] = useState(false);

    return (
        <GlobalContext.Provider value={{ 
            monthIndex,
            setMonthIndex,
            showCreatEventModal,
            setShowCreateEventModal,
            daySelected,
            setDaySelected,
            showCreateTaskModal,
            setShowCreateTaskModal
        }} >
            
            {props.children}
        </GlobalContext.Provider>
    );
};
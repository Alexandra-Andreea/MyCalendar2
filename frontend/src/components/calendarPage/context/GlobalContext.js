import React from 'react';

const GlobalContext = React.createContext ({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    showCreatEventModal: false,
    setShowCreateEventModal: () => {},
    daySelected: null,
    setDaySelected: (day) => {}
});

export default GlobalContext;
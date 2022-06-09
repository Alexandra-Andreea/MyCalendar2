import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/homePage/Main';
import Main from './components/login/Main';
import Profile from './components/profilePage/Profile';
import Calendar from './components/calendarPage/Calendar';
import Tasks from './components/tasksPage/Tasks';
import Notes from './components/notesPage/Notes';

function App() {
    return (
        <div className="App">
            <Route path='/' component={Main} exact />

            <Route path='/home' component={Home} />

            <Route path='/profile' component={Profile} />

            <Route path='/calendar' component={Calendar} />

            <Route path='/tasks' component={Tasks} />

            <Route path='/notes' component={Notes} />
        </div>
    );
};

export default App;

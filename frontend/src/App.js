import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/login/Main';

function App() {
    return (
        <div className="App">
            <Route path='/' component={Main} exact />

            <Route path='/Home' component={Home} />
        </div>
    );
};

export default App;

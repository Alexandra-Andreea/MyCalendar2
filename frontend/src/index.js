import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import ContextWrapper from './components/calendarPage/context/ContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextWrapper>
                <App />
            </ContextWrapper>
        </BrowserRouter>
    </React.StrictMode>
);

import React from "react";
import '@fortawesome/fontawesome-free/js/all.js';
import './NavbarStyle.scss';

const Navbar = () => {

    return <div id="navbar-style">
        <nav className="navbar navbar-expand-custom navbar-mainbg">
            <a className="navbar-brand navbar-logo" href="/home">myCalendar</a>
            <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-3">
                    <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                    <li className="nav-item">
                        <a className="nav-link" href="/home"><i className="far fa-solid fa-chart-line"></i>Dashboard</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/calendar"><i className="far fa-solid fa-calendar-days"></i>Calendar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tasks"><i className="far fa-solid fa-list-check"></i>Tasks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/notes"><i className="far fa-solid fa-note-sticky"></i>Notes</a>
                    </li>
                    <li className="form-inline my-2 my-lg-0">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success mt-3" type="submit">Search</button>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5" href="/profile"><i className="far fa-solid fa-user"></i>Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
};

export default Navbar;
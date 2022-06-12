import React from "react";
import Navbar from '../utils/Navbar';
import Footer from "../utils/Footer";
import StickyNote from './StickyNote';

const Notes = () => {
    return <>
        <Navbar />
        <StickyNote />
        <Footer />
    </>
};

export default Notes;
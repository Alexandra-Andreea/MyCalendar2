import React from "react";
import Navbar from '../utils/Navbar';
import Footer from "../utils/Footer";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Tasks = () => {
    return <>
        <Navbar />
        <TodoForm />
        <TodoList />
        <Footer />
    </>
};

export default Tasks;
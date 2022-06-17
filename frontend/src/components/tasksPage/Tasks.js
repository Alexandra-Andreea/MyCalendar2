import React, { useContext } from "react";
import Navbar from '../utils/Navbar';
import Footer from "../utils/Footer";
import {TaskForm} from './TaskForm';
import EditTaskModal from "./EditTaskModal";
import GlobalContext from '../../context/GlobalContext';

const Tasks = () => {
    const {showEditTaskModal} = useContext(GlobalContext);


    return <>
        <Navbar />
        <TaskForm />
        {/* <React.Fragment>
            {showEditTaskModal && <EditTaskModal />}
        </React.Fragment> */}
        <Footer />
    </>
};

export default Tasks;
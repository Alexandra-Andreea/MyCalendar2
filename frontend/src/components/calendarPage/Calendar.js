import React, {useState, useContext, useEffect} from "react";
import Navbar from '../utils/Navbar';
import Footer from "../utils/Footer";
import { getMonth } from "./Utils";
import CalendarHeader from './CalendarHeader';
import Sidebar from './Sidebar';
import Month from './Month';
import GlobalContext from "./context/GlobalContext";
import CreatEventModal from "./CreateEventModal";

const Calendar = () => {
    const [curretMonth, setCurrentMonth] = useState(getMonth());
    const {monthIndex, showCreatEventModal} = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex]);

    return <>
        <Navbar />

        <React.Fragment>
            {showCreatEventModal && <CreatEventModal />}
            <div className="d-flex flex-column">
                <CalendarHeader />
                <div className="d-flex flex-shrink-1">
                    <Sidebar />
                    <Month month={curretMonth}/>
                </div>
            </div>
        </React.Fragment>

        <Footer />
    </>
};

export default Calendar;
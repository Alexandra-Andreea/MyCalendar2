import React, {useContext, useState} from 'react';
import GlobalContext from '../../context/GlobalContext';
import axios from 'axios';
import dayjs from 'dayjs';

export default function CreatEventModal () {
    const {setShowCreateEventModal} = useContext(GlobalContext);
    const [nameEvent, setNameEvent] = useState('');
    const [descriptionEvent, setDescriptionEvent] = useState('');
    const [startDateEvent, setStartDateEvent] = useState(dayjs());
    const [endDateEvent, setEndDateEvent] = useState(startDateEvent);
    const [startHourEvent, setstartHourEvent] = useState();
    const [endHourEvent, setEndHourEvent] = useState();

    const createEvent = async () => {
        const user = localStorage.getItem("userInfo");
        const _id = JSON.parse(user)._id
        const token = JSON.parse(user).token;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.put(
                "/api/user/addEvent",
                { _id, nameEvent, descriptionEvent, startDateEvent, endDateEvent, startHourEvent, endHourEvent},
                config
            );

            if(data) {
                console.log(data);
            }

        } catch (error) {
            alert('Error occured!');
        };
    }

    return (
        <div className='create-event-modal'>
            <form className='form-create-event'>
                <header className='header-create-event'>
                    <span className='drag-handle-icon far fa-solid fa-grip-lines'></span>
                    <button
                        className='close-button btn btn-light'
                        onClick={() => setShowCreateEventModal(false)} >
                        <span className='far fa-solid fa-xmark'></span>
                    </button>
                </header>

                <div className='create-event-body'>
                    <div className='grid-body'>
                        <div></div>
                        <input
                            className='title-input'
                            type='text'
                            name='title'
                            placeholder='Add title to the event'
                            value={nameEvent}
                            onChange={(e) => setNameEvent(e.target.value)}
                            required
                            />

                        <input
                            className='title-input'
                            type='text'
                            name='Description'
                            placeholder='Add description to the event'
                            value={descriptionEvent}
                            onChange={(e) => setDescriptionEvent(e.target.value)}
                            required
                            />

                        <label className='label-style'>Start date</label>
                        <input
                            className="form-control title-input"
                            type="date"
                            value={startDateEvent}
                            onChange={(e) => setStartDateEvent(e.target.value)}
                            />

                        <label className='label-style'>End date</label>
                        <input
                            className="form-control title-input"
                            type="date"
                            value={endDateEvent}
                            onChange={(e) => setEndDateEvent(e.target.value)}
                            />

                        <label className='label-style'>Start Hour</label>
                        <input
                            className="form-control title-input"
                            type="time"
                            value={startHourEvent}
                            onChange={(e) => setstartHourEvent(e.target.value)}
                            />

                        <label className='label-style'>End Hour</label>
                        <input
                            className="form-control title-input"
                            type="time"
                            value={endHourEvent}
                            onChange={(e) => setEndHourEvent(e.target.value)}
                            />

                        <div className="text-center"><button className="btn btn-outline-success" type="button" onClick={createEvent}>Save Event</button></div>
                    </div>
                </div>
            </form>
        </div>
    );
};
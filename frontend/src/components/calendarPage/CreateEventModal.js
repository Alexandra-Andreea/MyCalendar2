import React, {useContext, useState} from 'react';
import GlobalContext from '../../context/GlobalContext';

export default function CreatEventModal () {
    const {setShowCreateEventModal} = useContext(GlobalContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startHour, setStartHour] = useState();
    const [endHour, setEndHour] = useState();

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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            />

                        <input
                            className='title-input'
                            type='text'
                            name='Description'
                            placeholder='Add description to the event'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            />

                        <label className='label-style'>Start date</label>
                        <input
                            className="form-control title-input"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            />

                        <label className='label-style'>End date</label>
                        <input
                            className="form-control title-input"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            />

                        <label className='label-style'>Start Hour</label>
                        <input
                            className="form-control title-input"
                            type="time"
                            value={startHour}
                            onChange={(e) => setStartHour(e.target.value)}
                            />

                        <label className='label-style'>End Hour</label>
                        <input
                            className="form-control title-input"
                            type="time"
                            value={endHour}
                            onChange={(e) => setEndHour(e.target.value)}
                            />

                        <div className="text-center"><button className="btn btn-outline-success" type="button" >Save Event</button></div>
                    </div>
                </div>
            </form>
        </div>
    );
};
import React, { useState, useContext } from 'react';
import axios from 'axios';
import './NoteStyle.scss';
import '../tasksPage/TaskStyle.scss'
import GlobalContext from '../../context/GlobalContext';


function CreateNoteModal () {
    const [descriptionStickyNote, setDescriptionStickyNote] = useState('This is a sticky note you can type and edit.');
    const {setShowCreateNote} = useContext(GlobalContext);

    const createNote = async () => {
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
                "/api/user/addNote",
                { _id, descriptionStickyNote},
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
        <div className='create-task-modal'>
            <form className='form-create-task'>
                <header className='header-create-task'>
                    <span className='drag-handle-icon far fa-solid fa-grip-lines'></span>
                    <button
                        className='close-button btn btn-light'
                        onClick={() => setShowCreateNote(false)}>
                        <span className='far fa-solid fa-xmark'></span>
                    </button>
                </header>

                <textarea
                    className='input-style'
                    cols='30'
                    rows='7'
                    placeholder='Add description to the note'
                    value={descriptionStickyNote}
                    onChange={(e) => setDescriptionStickyNote(e.target.value)} />

                <div className="text-center">
                    <button
                        className="btn btn-outline-success create-btn"
                        type="button"
                        onClick={createNote}>
                        Create Note
                    </button>
                </div>
            </form>
        </div>
    )
};

export default CreateNoteModal;
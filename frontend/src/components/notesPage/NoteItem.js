import React, { useState } from 'react';
import './NoteStyle.scss';
import axios from 'axios';

function NoteItem ({note}) {
    const [descriptionStickyNote, setDescriptionStickyNote] = useState(note.descriptionStickyNote);

    const deleteNote = async () => {
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
                "/api/user/deleteNote",
                { _id, descriptionStickyNote},
                config
            );

        } catch (error) {
            alert('Error occured!');
        };
    };

    const editNote = async () => {
        console.log(note);

        const user = localStorage.getItem("userInfo");
        const _id = JSON.parse(user)._id
        const token = JSON.parse(user).token;
        const oldDescriptionStickyNote = note.descriptionStickyNote;

        console.log(descriptionStickyNote);

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.put(
                "/api/user/editNote",
                { _id, oldDescriptionStickyNote, descriptionStickyNote},
                config
            );

        } catch (error) {
            alert('Error occured!');
        };
    }

    return (
        <div id='note-item'>
            <textarea
                name='note'
                value={descriptionStickyNote}
                onChange={(e) => setDescriptionStickyNote(e.target.value)} >
                
            </textarea>
            
            <button className='btn' onClick={editNote}>
                <span className='icon-item edit far fa-solid fa-pen-to-square'></span>
            </button>

            <button className='btn' onClick={deleteNote}>
                <span className='icon-item delete far fa-solid fa-trash-can'></span>
            </button>
        </div>
    );
};

export default NoteItem;
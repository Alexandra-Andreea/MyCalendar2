import React, { useState, useEffect, useContext } from 'react';
import './NoteStyle.scss';
import $ from 'jquery';
import axios from 'axios';
import NoteItem from './NoteItem';
import GlobalContext from '../../context/GlobalContext';
import CreateNoteModal from './CreateNote';

const StickyNote = () => {
    const [notes, setNotes] = useState();
    const [descriptionStickyNote, setDescriptionStickyNote] = useState();
    const {showCreateNote, setShowCreateNote} = useContext(GlobalContext);
    

    const fetchNotes = async () => {
        const user = localStorage.getItem("userInfo");
        const userId = JSON.parse(user)._id
        const token = JSON.parse(user).token;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const {data} = await axios.get
            (
                `/api/user/note/${userId}`,
                config
            );

            setNotes(data.notes);

            renderNotes();

        } catch (error) {
            alert('Error occured!');
        };
    };

    const renderNotes = () => {
        console.log(notes);

        if (notes) {
            return notes.map((note, i) => {
                return <NoteItem key={i} note={note}/>
            })
        }
    };

    useEffect (() => {
        fetchNotes();
    }, []);

    return (
        <div id='sticky-note-style'>
            {renderNotes()}

            <div
                id="create"
                onClick={() => setShowCreateNote(true)}>
                    +
            </div> 

            <React.Fragment>
                {showCreateNote && <CreateNoteModal />}
            </React.Fragment>
        </div>
    )
};

export default StickyNote;
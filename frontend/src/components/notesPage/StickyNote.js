import React, { useState } from 'react';
import './NoteStyle.scss';
import $ from 'jquery'

const StickyNote = () => {

    const [note, setNote] = useState('This is a sticky note you can type and edit.')

    function createNote() {
        let windowWidth = window.innerWidth;
        document.getElementById("create").style.height = `${windowWidth}px`;

        return (
            $(this).before("<textarea></textarea>")
        );
    };

    return <div id='sticky-note-style'>
        <textarea name='note' onChange={(e) => setNote(e.target.value)} value={note}></textarea>

        <div id="create" onClick={() => $('#create').before("<textarea></textarea>")}>+</div>
    </div >
};

export default StickyNote;
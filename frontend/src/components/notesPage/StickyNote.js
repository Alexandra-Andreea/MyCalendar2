import React, { useState } from 'react';
import './NoteStyle.scss';
import $ from 'jquery'

const StickyNote = () => {

    const [note, setNote] = useState('This is a sticky note you can type and edit.');
    const [title, setTitle] = useState('Add title to your note');

    return <div id='sticky-note-style'>
            
        <textarea
            name='note'
            value={note}
            onChange={(e) => setNote(e.target.value)} >

            <input
                className='title-style'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)} >
            </input>

        </textarea>

        <div id="create" onClick={() => $('#create').before("<textarea></textarea>")}>+</div>
    </div >
};

export default StickyNote;
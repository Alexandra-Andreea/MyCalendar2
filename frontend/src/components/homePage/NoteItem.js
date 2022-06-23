import React, { useState} from 'react';
import './DashboardStyle.scss';

function NoteItem ({note}) {
    const [descriptionStickyNote] = useState(note.descriptionStickyNote);

    return (
        <span className='note-item'>
            <textarea>
                {descriptionStickyNote}
            </textarea>
        </span>
    );
};

export default NoteItem;
import React, { useState} from 'react';
import './DashboardStyle.scss';

function NoteItem ({note}) {
    const [descriptionStickyNote] = useState(note.descriptionStickyNote);

    return (
        <div className='note-item border border-light'>
            <span>
                {descriptionStickyNote}
            </span>
        </div>
    );
};

export default NoteItem;
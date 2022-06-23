import React, {useContext, useState} from 'react';
import GlobalContext from '../../context/GlobalContext';
import axios from 'axios';
import '../tasksPage/TaskStyle.scss';

export default function CreatMilestoneModal () {
    const [nameMilestone, setNameMilestone] = useState('');
    const [descriptionMilestone, setDescriptionMilestone] = useState('');
    const {setShowCreateMilestoneModal} = useContext(GlobalContext);

    const createMilestone = async () => {
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
                "/api/user/addMilestone",
                { _id, nameMilestone, descriptionMilestone},
                config
            );

            if(data) {
                console.log(data);
            }

        } catch (error) {
            alert('Error occured!');
        };
    };

    return (
        <div className='create-task-modal'>
            <form className='form-create-task'>
                <header className='header-create-task'>
                    <span className='drag-handle-icon far fa-solid fa-grip-lines'></span>
                    <button
                        className='close-button btn btn-light'
                        onClick={() => setShowCreateMilestoneModal(false)}>
                        <span className='far fa-solid fa-xmark'></span>
                    </button>
                </header>

                <div className='create-task-body'>
                    <input
                        className='input-style'
                        type='text'
                        placeholder='Add title to the milestone'
                        value={nameMilestone}
                        onChange={(e) => setNameMilestone(e.target.value)}
                        required
                        />

                    <textarea
                        className='input-style'
                        cols='30'
                        rows='5'
                        placeholder='Add description to the milestone'
                        value={descriptionMilestone}
                        onChange={(e) => setDescriptionMilestone(e.target.value)} />

                    <div className="text-center">
                        <button
                            className="btn btn-outline-success"
                            type="button"
                            onClick={createMilestone}>
                            Create Milestone
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

};
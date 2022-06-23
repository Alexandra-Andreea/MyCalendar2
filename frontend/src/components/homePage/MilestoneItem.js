import React, { useState } from 'react';
import axios from 'axios';
import './DashboardStyle.scss';

function MilestoneItem ({milestone}) {
    const [completeMilestone, setCompleteMilestone] = useState(milestone.completeMilestone);
    const [nameMilestone, setNameMilestone] = useState(milestone.nameMilestone);
    const [descriptionMilestone, setDescriptionMilestone] = useState(milestone.descriptionMilestone);

    const deleteMilestone = async () => {
        const user = localStorage.getItem("userInfo");
        const _id = JSON.parse(user)._id
        const token = JSON.parse(user).token;
        const nameMilestone = milestone.nameMilestone;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.put(
                "/api/user/deleteMilestone",
                { _id, nameMilestone},
                config
            );

        } catch (error) {
            alert('Error occured!');
        };
    };

    async function checkComplete () {
        const user = localStorage.getItem("userInfo");
        const _id = JSON.parse(user)._id
        const token = JSON.parse(user).token;
        const nameMilestone = milestone.nameMilestone;
        const check = milestone.completeMilestone;
        setCompleteMilestone(!check);

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.put(
                "/api/user/checkMilestone",
                { _id, nameMilestone, completeMilestone},
                config
            );

        } catch (error) {
            alert('Error occured!');
        };
    };

    return (
        <div className='milestone-item border rounded border-light'>
            <span>
                <button className='close-button btn' onClick={checkComplete}>
                    <span className='far fa-solid fa-circle-check'></span>
                </button>
            </span>
            <span>
                <input
                    className='input-style'
                    type='text'
                    value={nameMilestone}
                    onChange={(e) => setNameMilestone(e.target.value)}
                    required
                    />
            </span>
            <span>
                 <input
                    className='input-style'
                    type='text'
                    value={descriptionMilestone}
                    onChange={(e) => setDescriptionMilestone(e.target.value)}
                    required
                    />
            </span>

            <span>
                <button className='edit-delete-button btn' onClick={deleteMilestone}>
                    <span className='far fa-solid fa-pen-to-square'></span>
                </button>
            </span>

            <span>
                <button className='edit-delete-button btn' onClick={deleteMilestone}>
                    <span className='far fa-solid fa-trash-can'></span>
                </button>
            </span>
        </div>
    );
};

export default MilestoneItem;
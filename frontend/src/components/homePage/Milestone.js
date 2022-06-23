import React, { useState, useContext, useEffect } from 'react';
import GlobalContext from '../../context/GlobalContext';
import CreatMilestoneModal from './CreateMilestoneModal';
import axios from 'axios';
import MilestoneItem from './MilestoneItem';
import './DashboardStyle.scss';

const Milestone = () => {
    const [milestones, setMilestones] = useState();
    const {showCreateMilestoneModal, setShowCreateMilestoneModal} = useContext(GlobalContext);

    const fetchMilestones = async () => {
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
                `/api/user/dashboard/${userId}`,
                config
            );

            setMilestones(data.milestones);

        } catch (error) {
            alert('Error occured!');
        };
    };

    const renderMilestones = (da) => {
        return milestones?.map((milestone, i) => {
            return <MilestoneItem key={i} milestone={milestone}/>
        })
    }

    useEffect (() => {
        fetchMilestones();
    }, []);

    return (
        <div className='display-milestone rounded border border-light'>
            <h3>
                Setup a milestone of the day
            </h3>

            <button
                className='create-milestone-button btn btn-primary btn-lg'
                onClick={() => setShowCreateMilestoneModal(true)} >
                <span className='icon fa-solid fa-circle-plus'></span>
                <span className='create-text-style'>Create Milestone</span>
            </button>

            <React.Fragment>
                {showCreateMilestoneModal && <CreatMilestoneModal />}
            </React.Fragment>

            <div className='list-milestones'>
                {renderMilestones()}
            </div>
        </div>
    );
};

export default Milestone;
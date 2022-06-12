import axios from "axios";
import React, { useState, useEffect } from "react";
import './ProfileStyle.scss';

const ProfileSettings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const fetchRegisterData = async (userId) => {



    }

    useEffect(() => {
        fetchRegisterData();
    }, []);

    return <div id="profile-settings-style">
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-5 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Username</span><span className="text-black-50">Email</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">First Name</label><input type="text" className="form-control" placeholder="enter your first name" /></div>

                            <div className="col-md-12"><label className="labels">Last Name</label><input type="text" className="form-control" placeholder="enter yout last name" /></div>

                            <div className="col-md-12"><label className="labels">Birthday</label><input type="date" className="form-control"></input></div>

                            <div className="mt-5 text-center"><button className="btn btn-outline-success mt-3" type="button">Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default ProfileSettings;
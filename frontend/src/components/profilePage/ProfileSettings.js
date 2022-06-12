import axios from "axios";
import React, { useState, useEffect } from "react";
import './ProfileStyle.scss';
import moment from 'moment';

const ProfileSettings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState();

    const fetchRegisterData = async () => {
        const user = localStorage.getItem("userInfo");
        const userId = JSON.parse(user)._id
        const token = JSON.parse(user).token;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.get(
                `/api/user/${userId}`,
                config
            );

            console.log(data);

            setUsername(data.username);
            setEmail(data.email);
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setBirthday(moment(data.birthday).format('YYYY-MM-DD'));
        } catch (error) {
            alert('Error occured!');
        };
    };

    const updateProfile = async () => {
        const user = localStorage.getItem("userInfo");
        const _id = JSON.parse(user)._id
        const token = JSON.parse(user).token;

        console.log(_id);

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await axios.put(
                "/api/user/profile",
                { _id, firstName, lastName, birthday },
                config
            );

            if (data) {
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setBirthday(moment(data.birthday).format('YYYY-MM-DD'));
            }

        } catch (error) {
            alert('Error occured!');
        };
    };

    useEffect(() => {
        fetchRegisterData();
    }, []);

    return <div id="profile-settings-style">
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-5 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Username: {username}</span><span className="text-black-50">Email: {email}</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter your first name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                /></div>

                            <div className="col-md-12"><label className="labels">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="enter yout last name"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                ></input></div>

                            <div className="col-md-12"><label className="labels">Birthday</label>
                                <input type="date"
                                    className="form-control"
                                    onChange={(e) => setBirthday(e.target.value)}
                                    value={birthday}
                                /></div>

                            <div className="mt-5 text-center"><button className="btn btn-outline-success mt-3" type="button" onClick={updateProfile}>Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default ProfileSettings;
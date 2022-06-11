import React from "react";
import Navbar from '../utils/Navbar';
import Footer from "../utils/Footer";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
    return <>
        <Navbar />
        <ProfileSettings />
        <Footer />
    </>
};

export default Profile;
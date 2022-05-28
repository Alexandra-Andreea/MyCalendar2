import React, { useState, useEffect } from "react";
import loginImage from '../../layer/login.svg';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [confirmPasswordClass, setconfirmPasswordClass] = useState('form-control');
    const [isPasswordDirty, setisPasswordDirty] = useState(false);

    function submitRegister() {
        console.log(`${showErrorMessage}`);


    }

    useEffect(() => {
        if (isPasswordDirty) {
            if (password === confirmPassword) {
                setShowErrorMessage(false);
                setconfirmPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setconfirmPasswordClass('form-control is-invalid')
            }
        }
    }, [confirmPassword])

    const handleCPassword = (e) => {
        setConfirmPassword(e.target.value);
        setisPasswordDirty(true);
    }

    return <div className="base-container">
        <div className="header">
            Register
        </div>

        <form className="content">
            <div className="image">
                <img src={loginImage} alt="myImage" />
            </div>

            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirm_password"> Confirm Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        onChange={handleCPassword}
                        className={confirmPasswordClass}
                    />
                </div>
            </div>
        </form>

        {showErrorMessage && isPasswordDirty ? <div> Passwords did not match </div> : ''}

        <div className="footer">
            <button
                type="button"
                className="btn"
                onClick={submitRegister}
            >
                Register
            </button>
        </div>

    </div>
}

export default Register;

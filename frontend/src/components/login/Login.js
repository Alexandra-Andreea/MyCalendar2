import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import loginImage from '../../layer/login.svg';
import axios from "axios";

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submitLogin = async () => {
        if (!username || !password) {
            alert('Please fill all the fields!');
            return;
        }

        console.log(`${username} ${password}`);

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/user/login",
                { username, password },
                config
            );

            console.log(JSON.stringify(data));

            localStorage.setItem("userInfo", JSON.stringify(data));
            history.push('/home');

        } catch (error) {
            alert('Error occured!');
        };
    }

    return <div className="base-container" ref={props.containerRef}>
        <div className="header">
            Login
        </div>

        <div className="content">
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
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
        </div>

        <div className="footer">
            <button
                type="button"
                className="btn"
                onClick={submitLogin}>
                Login
            </button>
        </div>

    </div>
}

export default Login;

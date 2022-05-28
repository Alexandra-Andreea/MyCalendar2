import React, { useState } from "react";
import loginImage from '../../layer/login.svg';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            <button type="button" className="btn">Login</button>
        </div>

    </div>
}

export default Login;

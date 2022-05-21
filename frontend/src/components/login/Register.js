import React from "react";
import loginImage from '../../layer/login.svg';

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
            <div className="header">
                Register
            </div>

            <div className="content">
                <div className="image">
                    <img src={loginImage} />
                </div>

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" required />
                    </div>
                </div>
            </div>

            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>

        </div>
    }
}

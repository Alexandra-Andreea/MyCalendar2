import React from "react";
import './FooterStyle.scss';

const Footer = () => {
    return <>
        <footer className="site-footer" id="footer">
            <div className="container">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                        <li><a className="facebook" href="https://www.facebook.com/alexandra.a.balan.3"><i className="far fa-brands fa-facebook"></i></a></li>
                        <li><a className="instagram" href="https://www.instagram.com/addabalan/"><i className="far fa-brands fa-instagram"></i></a></li>
                        <li><a className="google" href="https://www.google.com/?client=safari"><i className="far fa-brands fa-google"></i></a></li>
                        <li><a className="linkedin" href="https://www.linkedin.com/in/balan-a-480868129/"><i className="far fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
};

export default Footer;
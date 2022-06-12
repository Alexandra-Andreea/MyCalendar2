import React, { useEffect } from "react";
import './FooterStyle.scss';

const Footer = () => {

    return <span id="footer-style">
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">MyCalendar is an interactive web application which aims to improve both time management and task prioritization skills. The application proposes an intuitive and efficient graphic interface which supports adding events, tasks, notes and setting goals for a specific day or period.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Useful links</h6>
                        <ul className="footer-links">
                            <li><a href="https://corporatefinanceinstitute.com/resources/careers/soft-skills/time-management-list-tips/">Time Management Tips</a></li>
                            <li><a href="https://www.luma-institute.com/importance-difficulty-matrix/">Importance/Difficulty Matrix</a></li>
                            <li><a href="https://www.rochester.edu/emerging-leaders/11-tips-for-organization-and-productivity/">Organization & Productivity Tips</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/about/">About Us</a></li>
                            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                            <a href="/home"> myCalendar</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="https://www.facebook.com/alexandra.a.balan.3"><i className="far fa-brands fa-facebook"></i></a></li>
                            <li><a className="instagram" href="https://www.instagram.com/addabalan/"><i className="far fa-brands fa-instagram"></i></a></li>
                            <li><a className="google" href="https://www.linkedin.com/in/balan-a-480868129/"><i className="far fa-brands fa-google"></i></a></li>
                            <li><a className="linkedin" href="https://www.google.com/?client=safari"><i className="far fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </span>
};

export default Footer;
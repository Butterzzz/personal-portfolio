import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './footer.css';

function Footer() {
    return (
        <footer>
            <a href="#home" className="footer__logo">GSS</a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Eperience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/grinchenko-s/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/Butterzzz" target="_blank" rel="noreferrer"><BsGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; GS. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer;
import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">GSS</h1>

                <ul className="footer__list">
                    <li><a href="#home" className="footer__link">Домой</a></li>
                    <li><a href="#about" className="footer__link">Обо мне</a></li>
                    <li><a href="#portfolio" className="footer__link">Портфолио</a></li>
                    <li><a href="#contact" className="footer__link">Контакты</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/grinchenko-s/" target="_blank" rel="noreferrer" className="footer__social-link"><BsLinkedin className="footer__social-icon" /></a>
                    <a href="https://github.com/Butterzzz" target="_blank" rel="noreferrer" className="footer__social-link"><BsGithub className="footer__social-icon" /></a>
                </div>

                <span className="footer__copyright"><small>&copy; Гринченко Сергей. 2022</small>
                </span>
            </div>
        </footer >
    )
}

export default Footer;

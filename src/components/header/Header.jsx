import React, { useState } from "react";
import './header.css';
import { HiOutlineHome } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import { RiContactsBook2Line } from 'react-icons/ri';
import { AiOutlineAppstore, AiOutlineUser } from 'react-icons/ai';
import { CiViewList, CiImageOn } from 'react-icons/ci';

function Header() {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) {
            header.classList.add("scroll-header");
        } else {
            header.classList.remove("scroll-header");
        }
    })

    const [showMenu, setShowMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className='nav__logo'></a>

                <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#home" className={activeNav === "#home" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#home')}>
                                <HiOutlineHome className="nav__icon" /> Домой
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#about')}>
                                <AiOutlineUser className="nav__icon" /> Обо мне
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#skills')}>
                                <CiViewList className="nav__icon" /> Навыки
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#portfolio')}>
                                <CiImageOn className="nav__icon" /> Портфолио
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#contact')}>
                                <RiContactsBook2Line className="nav__icon" /> Контакты
                            </a>
                        </li>

                    </ul>

                    <FaTimes className="nav__close" onClick={() => setShowMenu(!showMenu)} />
                </div>

                <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
                    <AiOutlineAppstore />
                </div>
            </nav>
        </header>
    )
}

export default Header;

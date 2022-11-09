import React, { useState } from "react";
import './header.css';
import { HiOutlineHome } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import { RiContactsBook2Line } from 'react-icons/ri';
import { AiOutlineAppstore, AiOutlineUser } from 'react-icons/ai';
import { CiViewList, CiImageOn } from 'react-icons/ci';
import { MdOutlineHomeRepairService } from 'react-icons/md';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className='nav__logo'></a>

                <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <HiOutlineHome className="nav__icon" /> Домой
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <AiOutlineUser className="nav__icon" /> Обо мне
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <CiViewList className="nav__icon" /> Навыки
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <CiImageOn className="nav__icon" /> Портфолио
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
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

import React from "react";
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

function Header() {
    return (
        <header id="home">
            <div className="container header__container">
                <h5>Привет, меня зовут</h5>
                <h1>Гринченко Сергей</h1>
                <h5 className="text-light">Junior Frontend-разработчик</h5>
                <CTA />
                <HeaderSocials />
                
                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Листай вниз</a>
            </div>
        </header>
    )
}

export default Header;
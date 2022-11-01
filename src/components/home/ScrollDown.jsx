import React from 'react';
import { BsArrowDown } from 'react-icons/bs';

function ScrollDown() {
    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <span className="home__scroll-name">Листай вниз <BsArrowDown className="home__scroll-arrow" /></span>
            </a>
        </div>
    )
}

export default ScrollDown
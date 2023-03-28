import React from "react";
import CV from '../../assets/cv.pdf';
import { CgFileDocument } from 'react-icons/cg';

function Data() {
    return (
        <div className="home__data">
            <h1 className="home__title">Сергей Гринченко</h1>
            <h3 className="home__subtitle">Frontend разработчик</h3>
            <p className="home__description">👋 Я начинающий веб-разработчик из Благовещенска</p>
            <a href={CV} download className="button button--flex">
                Скачать CV <CgFileDocument className="button__icon" />
            </a>
        </div>
    )
}

export default Data;
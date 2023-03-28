import React from "react";
import CV from '../../assets/cv.pdf';
import { CgFileDocument } from 'react-icons/cg';

function Data() {
    return (
        <div className="home__data">
            <h1 className="home__title">Сергей Гринченко</h1>
            <h3 className="home__subtitle">Frontend разработчик</h3>
            <p className="home__description">Я веб-разработчик из Благовещенска, и я очень увлечен и предан своей работе.</p>
            <a href={CV} download className="button button--flex">
                Скачать CV <CgFileDocument className="button__icon" />
            </a>
        </div>
    )
}

export default Data;
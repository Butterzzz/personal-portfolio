import React from "react";
import { FaAward } from 'react-icons/fa';
import { BiBriefcase } from 'react-icons/bi';
import { MdOutlineSupportAgent } from 'react-icons/md';

function Info() {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <FaAward className="about__icon"/>
                <h3 className="about__title">Опыт</h3>
                <span className="about__subtitle">3 года в веб-разработке</span>
            </div>

            <div className="about__box">
                <BiBriefcase className="about__icon"/>
                <h3 className="about__title">Проекты</h3>
                <span className="about__subtitle">8+ выполненных проектов</span>
            </div>

            <div className="about__box">
                <MdOutlineSupportAgent className="about__icon"/>
                <h3 className="about__title">Техподдержка</h3>
                <span className="about__subtitle">24/7</span>
            </div>
        </div>
    )
}

export default Info;
import React from "react";
import './about.css';
import AboutImg from '../../assets/about.jpg';
import Info from './Info';

function About() {

    return (
        <section className="about section" id="about">
            <h2 className="section__title">Обо мне</h2>
            <span className="section__subtitle">Немного подробнее</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="me" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">Мне нравится решать сложные задачи: разрабатывать сайты и веб-приложения или создавать дизайн  сайтов с удобным интерфейсом.</p>

                </div>
            </div>
        </section>
    )
}

export default About;
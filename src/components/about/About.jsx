import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


function About() {
    return (
        <section id="about">
            <h5>Узнай</h5>
            <h1>Обо мне</h1>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Опыт</h5>
                            <small>3+ года в разработе</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Клиенты</h5>
                            <small>200+ довольных клиентов</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Проекты</h5>
                            <small>80+ рабочих проектов</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident dicta magnam suscipit nulla nobis soluta vitae rerum natus odit, facere doloribus molestiae iure quas animi consectetur assumenda sapiente ducimus!</p>

                    <a href="#contact" className="btn btn-primary">Напиши мне</a>
                </div>
            </div>
        </section>
    )
}

export default About;